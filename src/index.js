import express from "express";
import RevenueRouter from "./routes/revenueRoutes.js";
import MenuRouter from "./routes/menuRoutes.js";

const app = express();

app.use("/revenue", RevenueRouter);
app.use("/menu", MenuRouter);

app.listen(3000, () => {
    console.log("API running at http://localhost:3000");
});
