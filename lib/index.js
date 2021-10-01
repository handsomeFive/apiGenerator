// https://petstore.swagger.io/v2/swagger.json
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

module.exports = { readJson };
