import express from "express";
import { getDailyMenu, getMostCalorieDays, getLessCalorieDays } from "../controllers/menuController.js";

const MenuRouter = express.Router();

MenuRouter.get("/day/:day", (req, res) => {
    const day = req.params.day;
    const menu = getDailyMenu(day);
    res.json(menu);
});

MenuRouter.get("/mostCalorieDays", (req, res) => {
    const mostCalorieDays = getMostCalorieDays();
    res.json(mostCalorieDays);
});

MenuRouter.get("/lessCalorieDays", (req, res) => {
    const lessCalorieDays = getLessCalorieDays();
    res.json(lessCalorieDays);
});

export default MenuRouter;
