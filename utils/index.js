const dictionary = {
  integer: "number",
  string: "string",
  boolean: "boolean",
  file: "File",
  date: "Date",
  object: "object",
};
const interfaceShiftMap = {
  "«": "<",
  "»": ">",
  List: "Array",
  Void: "void",
  int: "number",
};

function shiftType(obj, useGenerics) {
  let { type, $ref, items, additionalProperties } = obj;
  if (additionalProperties) {
    return `[additionalProperties: string]: ${
      dictionary[additionalProperties.type]
    }`;
  }
  $ref = $ref || (items ? items.$ref : null);
  let result = $ref
    ? $ref.split("/").pop()
    : dictionary[type === "array" ? items.type : type];
  if (useGenerics && $ref) {
    return "T";
  }
  if (result.includes("«")) {
    const typeKey = Object.keys(interfaceShiftMap)
      .map((key) => "\\" + key)
      .join("|");
    const re = new RegExp(typeKey, "g");

    return result.replace(re, (matchStr) => {
      return matchStr ? interfaceShiftMap[matchStr] : "";
    });
  }
  return `${result}${type === "array" ? "[]" : ""}`;
}

function shiftPath(paths) {
  const pathList = paths.split("/");
  const newPathList = pathList.map((path) => {
    const fold = path.replace(/\{|\}|\-/g, "");
    return `${fold.slice(0, 1).toUpperCase()}${fold.slice(1)}`;
  });
  return newPathList.join("");
}

function subCurry(...args) {
  const fn = args[0];
  const arg = args.slice(1);

  return function (...args) {
    return fn.apply(this, args.concat(arg));
  };
}

function Curry(fn, length) {
  length = fn.length || length;

  return function (...args) {
    if (arguments.length < length) {
      const combine = [fn].concat(args);
      return Curry(subCurry.apply(this, combine), length - args.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

function Compose() {}

module.exports = {
  shiftType,
  shiftPath,
};
