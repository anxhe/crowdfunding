const express = require("express");
const routes = express.Router();

const creatorCauseController = require("../controllers/creatorCauseController");
const midle = require('../config/middlewares');

routes.get("/", midle.isAuthenticated, midle.hasRole('creatorcause'), creatorCauseController.index);
routes.get('/:causeId', midle.isAuthenticated, midle.hasRole('creatorcause'), creatorCauseController.show);
routes.put("/:causeId/members", midle.isAuthenticated, midle.hasRole('creatorcause'), creatorCauseController.update);
routes.post("/:causeId/budget_item", midle.isAuthenticated, midle.hasRole('creatorcause'), creatorCauseController.createBudgetItem);


module.exports = routes;
