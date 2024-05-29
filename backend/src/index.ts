import express, { Request, Response } from "express";
import { sampleProducts } from "./data";
import cors from "cors";
require("dotenv").config();

const Port = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/api/v1/products", (req: Request, res: Response) => {
  res.json(sampleProducts);
});

app.listen(Port, () => {
  console.log(`Listening on port ${Port}`);
});
