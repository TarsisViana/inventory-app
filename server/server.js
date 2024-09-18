import express from "express";
import "dotenv/config";
const server = express();

import inventoryRouter from "./routers/inventoryRouter.js";

app.use(express.urlencoded({ extended: true }));

app.use("/inventory", inventoryRouter);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`server online on port ${PORT}`);
});
