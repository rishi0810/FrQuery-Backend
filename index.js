import express from "express";
import connectDB from "./db/userdb.js";
import UserRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Set-Cookie"
  );
  next();
});
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use("/user", UserRoute);

app.get("/", (req, res) => {
  return res.json({ message: "Get request initialized" });
});

app.listen(port, () => {
  console.log("Server listening on port 3000");
});
