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

app.get("/api/v1/products/:productSlug", (req: Request, res: Response) => {
  const productSlug = req.params.productSlug;
  const product = sampleProducts.find((item) => item.slug === productSlug);

  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
});
app.listen(Port, () => {
  console.log(`Listening on port ${Port}`);
});
