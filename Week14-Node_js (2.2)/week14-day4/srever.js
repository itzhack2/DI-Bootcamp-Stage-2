import express from "express";
import cors from "cors";
import router from "./routes/test_router.js";
import products_router from "./routes/products.router.js"


const app = express();
app.use(cros());

app.listen(3001);

app.use(router);
app.use(products_router);