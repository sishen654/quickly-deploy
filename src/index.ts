import Koa from "koa";
import fileStatic from "koa-static"
import dotenv from "@mazp/dotenv"
import { getLocalIPV4 } from "@mazp/node-util"


export default function startServer(filePath: string[] = [], envPath: string = "", pushArr: Koa.Middleware[] = [], unshiftArr: Koa.Middleware[] = []) {
  // 1 创建实例
  const app = new Koa();
  const middlewares: Koa.Middleware[] = []
  // 2 返回对象
  return {
    start(msg?: string, preload?: (app: Koa) => void, started?: () => void) {
      // 3 注入 env 文件
      envPath && dotenv({ path: envPath })
      // 4 执行预处理函数
      if (preload) preload(app);
      // 5 填充中间件
      filePath.forEach(path => { middlewares.push(fileStatic(path)) })
      middlewares.push(...pushArr)
      middlewares.unshift(...unshiftArr)
      // 6 使用中间件
      middlewares.forEach(middleware => app.use(middleware))
      // 7 开启服务
      const PORT = process.env.PORT || 3000;
      const localIp = getLocalIPV4()
      msg = msg ? msg : `server start success on: \n       http://127.0.0.1:${PORT}\n       http://${localIp}:${PORT}`
      return app.listen(PORT as number, "0.0.0.0", () => {
        if (started) started()
        console.log(msg);
      })
    }
  }
}
