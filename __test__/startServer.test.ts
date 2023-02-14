import startServer from "@src/index"
import path from "path"
import { fileURLToPath } from "url"
import axios from "axios"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envPath = path.resolve(__dirname, "./server.env")

describe("startServer", () => {
  test("normal deployment project", async () => {
    let app = startServer([path.resolve(__dirname, "../www")], envPath)
    app.start()
    let data = await axios.get(`http://127.0.0.1:${process.env.PORT || 3000}`)
    let page = data.data
    expect(page.indexOf("<h1>Hello world!</h1>")).not.toEqual(-1)
  })
})
