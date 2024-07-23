import express from "express";
import { getRevenueByName, getRevenueCount, getLowerCalorieRevenues, getHigherCalorieRevenues, getEasiestRevenues, getCheapiestRevenues } from "../controllers/revenueController.js";

const RevenueRouter = express.Router();

RevenueRouter.get("/name/:name", (req, res) => {
    const name = req.params.name;
    const revenue = getRevenueByName(name);
    res.json(revenue);
});

RevenueRouter.get("/revenueCount", (req, res) => {
    const revenueCount = getRevenueCount();
    res.json(revenueCount);
});

RevenueRouter.get("/lowerCalorieRevenues", (req, res) => {
    const lowerCalorieRevenues = getLowerCalorieRevenues();
    res.json(lowerCalorieRevenues);
});

RevenueRouter.get("/higherCalorieRevenues", (req, res) => {
    const higherCalorieRevenues = getHigherCalorieRevenues();
    res.json(higherCalorieRevenues);
});

RevenueRouter.get("/easiestRevenues", (req, res) => {
    const easiestRevenues = getEasiestRevenues();
    res.json(easiestRevenues);
});

RevenueRouter.get("/cheapiestRevenues", (req, res) => {
    const cheapiestRevenues = getCheapiestRevenues();
    res.json(cheapiestRevenues);
});

export default RevenueRouter;
