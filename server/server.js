import express from "express";
import "dotenv/config";
const server = express();

import inventoryRouter from "./routers/inventoryRouter.js";
import cors from "cors";

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

server.use("/inventory", inventoryRouter);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server online on port ${PORT}`);
});
