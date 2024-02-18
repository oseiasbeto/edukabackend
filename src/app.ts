import express from "express"
import cors from "cors"
import { router } from "./routes"
import { MongoDb } from "./infra/database"
import path from "path"

const app = express()

const db = new MongoDb()
db.connect()

app.use(cors())
app.use(express.json())
app.use("/files", express.static(path.resolve(__dirname, "uploads")))
app.use(router)

export { app }