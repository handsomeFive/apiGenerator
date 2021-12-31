// https://petstore.swagger.io/v2/swagger.json
const fs = require("fs");
const chalk = require("chalk");
const { shiftType, shiftPath } = require("../utils/index");
function generator(data) {
  let output = "./api.ts";
  fs.readFile("./api-generator.json", (err, config) => {
    if (!err && JSON.parse(config).outputPath) {
      output = JSON.parse(config).outputPath + "/api.ts";
    } else {
      console.log(chalk.red(err));
    }
    const { definitions, basePath, paths } = JSON.parse(data);
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
      const requestBody = (parameters || []).reduce(
        (pre, cur, currentIndex, array) => {
          if (cur.in === "path") {
            requestTsName = `${pre}${cur.name}: ${shiftType({
              ...cur,
              ...(cur.schema || {}),
            })}${currentIndex === array.length - 1 ? "" : ", "}`;
            return requestTsName;
          }
          if (cur.name === "body") {
            requestTsName = shiftType(cur.schema);
            return "";
          }
          return (pre += `  ${cur.name}${!cur.required ? "?" : ""}: ${shiftType(
            {
              ...cur,
              ...(cur.schema || {}),
            }
          )};${currentIndex !== array.length - 1 ? "\n" : ""}`);
        },
        ""
      );
      const responseBody =
        responses && responses.schema ? shiftType(responses.schema) : "";
      if (requestBody && !requestTsName) {
        requestTsName = `${method}${shiftPath(paths)}Request`;
        interfaceList.push(
          `interface ${requestTsName} {\n${requestBody}\n}\n\n`
        );
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
      });
    });
    fs.writeFile(
      output,
      [
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
  });
}

// fs.readFile("./mock/index.json");

function writeApi(apiList) {
  return apiList.map(({ responsesName, requestName, paths, method }) => {
    const key = method === "get" ? "params" : "data";
    const relPath = "`" + paths.replace(/\{/g, "${") + "`";
    let inParameter = "";
    let passParameter = "";
    if (requestName) {
      if (requestName.includes(":")) {
        inParameter = requestName;
      } else {
        inParameter = `${key}: ${requestName}`;
        passParameter = `    ${key},\n`;
      }
    }
    return `export async function ${method}${shiftPath(
      paths
    )}(${inParameter}){\n  return request<${responsesName}>(${relPath}, {\n    method: '${method}',\n${passParameter}  })\n}\n\n`;
  });
}

function readJson(string) {
  const { basePath, paths } = JSON.parse(string);
  const originApi = [];
  Object.keys(paths).forEach((path) =>
    Object.keys(paths[path]).forEach((type) => {
      originApi.push({
        type,
        paths: basePath + path,
        responses: paths[path][type].responses["200"]
          ? paths[path][type].responses["200"].schema
          : null,
        parameters: paths[path][type].parameters,
      });
    })
  );
  return originApi;
}

module.exports = { generator };
