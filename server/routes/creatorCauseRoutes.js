const express = require("express");
const routes = express.Router();

const creatorCauseController = require("../controllers/creatorCauseController");
const midle = require('../config/middlewares');
//routes.use(midle.isAuthenticated, midle.hasRole('creatorcause'))// ==> probar esto
routes.get("/", midle.isAuthenticated, midle.hasRole('creatorcause'), creatorCauseController.index);
routes.get('/:causeId', midle.isAuthenticated, midle.hasRole('creatorcause'), creatorCauseController.show);
routes.put("/:causeId/members", midle.isAuthenticated, midle.hasRole('creatorcause'), creatorCauseController.createMembers);
routes.post("/:causeId/budget_item", midle.isAuthenticated, midle.hasRole('creatorcause'),creatorCauseController.createBudgetItem);
routes.delete("/:causeId/budget_item/:itemId", midle.isAuthenticated, midle.hasRole('creatorcause'), creatorCauseController.deleteItem);
routes.put("/:causeId/status", midle.isAuthenticated, midle.hasRole('creatorcause'), creatorCauseController.submitCause);
module.exports = routes;
