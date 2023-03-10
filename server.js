import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import { config } from "./config.js";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
dotenv.config();


const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const users = new Map();


mongoose.set("strictQuery", false);
mongoose.connect(config.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => console.log("connected to mongoDB")
);

app.use("/api/v1/users", UserRoute);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if(process.env.NODE_ENV === "development") {
  app.get("/", (req, res) => res.send("Hello World"));
} else {
  app.use(express.static(path.join(__dirname, "./client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

server.listen(config.PORT, () => console.log(`Server started running on port ${config.PORT}`));
