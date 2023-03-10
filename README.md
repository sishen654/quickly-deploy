# quickly-deploy

English | [简体中文](./README-zh.md)

## ✨ Introduce
This is a package that can help you quickly deploy your static web, use the Koa framework, you can also add more extension in the app.



## 📦 Install
```sh
npm i quickly-deploy
yarn add quickly-deploy
pnpm add quickly-deploy
```



## 🌍 TS support

-   **filePath**：static folder path, can add multiple
-   **envPath**：env file path
-   **pushArr**: add pre-middleware
-   **unshiftArr**: add post middleware

```ts
import * as http from 'http';
import Koa from 'koa';

declare function startServer(filePath?: string[], envPath?: string, pushArr?: Koa.Middleware[], unshiftArr?: Koa.Middleware[]): {
    start(msg?: string, preload?: ((app: Koa) => void) | undefined, started?: () => void): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
};

export { startServer as default };
```



## 🔨 Usage

### deploy web

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

