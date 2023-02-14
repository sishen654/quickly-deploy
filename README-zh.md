# quickly-deploy

[English](./README.md) | 简体中文

## ✨ 介绍

这是一个可以帮助你快速部署你的静态网站的包，使用Koa框架，你也可以在应用中添加更多的扩展。



## 📦 下载

```bash
npm i quickly-deploy
yarn add quickly-deploy
pnpm add quickly-deploy
```



## 🌍 TS支持

-   **filePath**：静态文件夹路径，可以添加多个
-   **envPath**：env 文件路径
-   **pushArr**: 添加前置中间件
-   **unshiftArr**: 添加后置中间件

```ts
import * as http from 'http';
import Koa from 'koa';

declare function startServer(filePath?: string[], envPath?: string, pushArr?: Koa.Middleware[], unshiftArr?: Koa.Middleware[]): {
    start(msg?: string, preload?: ((app: Koa) => void) | undefined, started?: () => void): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
};

export { startServer as default };
```



## 🔨 使用

### 部署网站

### 

```ts
import startServer from "quickly-deploy"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.resolve(__dirname, "./server.env")		// env path

let app = startServer([path.resolve(__dirname, "../www")], envPath)
app.start()		// start server
```

```shell
# server.env
PORT=3997
```



