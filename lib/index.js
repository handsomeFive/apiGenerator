// https://petstore.swagger.io/v2/swagger.json
const fs = require("fs");
const chalk = require("chalk");
const { shiftType, shiftPath } = require("../utils/index");
function generator(data, config) {
  const { output, requestPath, requestDefaultPath } = config;
  const outputPath = (output || ".") + "/api.ts";
  const { definitions, basePath, paths } = JSON.parse(data);
  const importStatement = `import ${
    requestDefaultPath ? "request" : "{ request }"
  } from '${requestPath || requestDefaultPath}';\n\n`;
  const interfaceList = [];
  const typeKey = [];
  const typeList = [];
  const apiList = [];
  const result = [];
  // 遍历获取Modals
  for (let key in definitions) {
    const interfaces = definitions[key].properties;
    if (!interfaces) continue;
    if (key.includes("«")) {
      // 泛型模式 需要声明type
      const [Type] = key.split("«");
      if (!typeKey.includes(Type)) {
        typeKey.push(Type);
        const values = Object.keys(interfaces)
          .sort()
          .reduce((pre, cur, currentIndex, array) => {
            return (pre += `  ${cur}: ${shiftType(interfaces[cur], true)};${
              currentIndex !== array.length - 1 ? "\n" : ""
            }`);
          }, "");
        typeList.push(`type ${Type}<T> = {\n${values}\n}\n\n`);
      }
    } else {
      const values = Object.keys(interfaces)
        .sort()
        .reduce((pre, cur, currentIndex, array) => {
          return (pre += `  ${cur}: ${shiftType(interfaces[cur])};${
            currentIndex !== array.length - 1 ? "\n" : ""
          }`);
        }, "");
      interfaceList.push(`interface ${key} {\n${values}\n}\n\n`);
    }
  }
  for (let key in paths) {
    const methodList = Object.keys(paths[key]);
    apiList.push(
      ...methodList.map((method) => ({
        method,
        paths: basePath === "/" ? key : basePath + key,
        parameters: paths[key][method].parameters,
        responses: paths[key][method].responses
          ? paths[key][method].responses[200]
          : "",
      }))
    );
  }
  // 根据api获取对应的请求内容和返回内容
  apiList.forEach(({ method, paths, parameters, responses }) => {
    let requestTsName = "";
    let responseTsName = "";
    const pathQuery = [];
    const requestBody = (parameters || []).reduce(
      (pre, cur, currentIndex, array) => {
        if (cur.in === "query") {
          // 将get的多个元素映射到一个类 methodPathRequest
          return `${pre}  ${cur.name}: ${shiftType({
            ...cur,
            ...(cur.schema || {}),
          })};${currentIndex === array.length - 1 ? "" : "\n"}`;
        } else {
          if (cur.name === "body") {
            // 映射到modal中的类
            requestTsName = shiftType(cur.schema);
          }
          if (cur.in === "path") {
            pathQuery.push(
              `${cur.name}${!cur.required ? "?" : ""}: ${shiftType(cur)}`
            );
          }
          return pre;
        }
      },
      ""
    );
    const responseBody =
      responses && responses.schema ? shiftType(responses.schema) : "";
    if (requestBody && !requestTsName) {
      // 将多个请求参数放进一个请求元素体内
      requestTsName = `${method}${shiftPath(paths)}Request`;
      interfaceList.push(`interface ${requestTsName} {\n${requestBody}\n}\n\n`);
    }
    if (responseBody) {
      if (responses.schema.additionalProperties) {
        responseTsName = `${method}${shiftPath(paths)}Response`;
        interfaceList.push(
          `interface ${responseTsName} {\n${responseBody}\n}\n\n`
        );
      } else {
        responseTsName = responseBody;
      }
    }
    result.push({
      requestName: requestTsName,
      responsesName: responseTsName,
      method,
      paths,
      pathQuery,
    });
  });
  fs.writeFile(
    outputPath,
    [
      importStatement,
      typeList.join(""),
      interfaceList.join(""),
      writeApi(result).join(""),
    ].join(""),
    function (err) {
      if (!err) {
        console.log(chalk.green("done"));
      } else {
        console.log(chalk.red(err));
      }
    }
  );
}

function writeApi(apiList) {
  return apiList.map(
    ({ responsesName, requestName, paths, method, pathQuery }) => {
      const key = method === "get" ? "params" : "data";
      const relPath = "`" + paths.replace(/\{/g, "${") + "`";
      const inParameterList = [...pathQuery];
      let passParameter = "";
      if (requestName) {
        if (requestName.includes(":")) {
          inParameterList.push(requestName);
        } else {
          inParameterList.push(`${key}: ${requestName}`);
          passParameter = `    ${key},\n`;
        }
      }
      return `export async function ${method}${shiftPath(
        paths
      )}(${inParameterList.join(", ")}){\n  return request${
        responsesName && "<"
      }${responsesName}${
        responsesName && ">"
      }(${relPath}, {\n    method: '${method}',\n${passParameter}  })\n}\n\n`;
    }
  );
}

module.exports = { generator };
