# api-generator 工具

## Highlights

- 配置化
- 支持导出泛型
- 暂支持 swagger.json

## Install

```sh
npm install api-generate-tool -D
```

## Usage

Firstly, create api-generator.json in the root directory

```json
{
  "output": "./",
  "requestPath": "@/api",
  "prefix": "/api"
}
```

I use this in my npm scripts:

```json
{
  "scripts": {
    "generate-api": "generate-api"
  }
}
```

then run

```sh
npm run generate-api
```

# Config

| name               | required                                 |                      description                      |
| :----------------- | :--------------------------------------- | :---------------------------------------------------: |
| output             | false                                    |                  generated file path                  |
| requestPath        | true (when requestDefaultPath not exits) |                  request object path                  |
| requestDefaultPath | true (when requestPath not exits)        | request object path (the default export mode is used) |
| prefix             | false                                    |                      prefix path                      |
