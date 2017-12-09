const express = require("express");

const causeRoutes = express.Router();
const causeController = require("../controllers/causeController");
const causeBudgetItemController = require("../controllers/causeBudgetItemController");
const causeMemberController = require("../controllers/causeMemberController");
const donationCauseController = require("../controllers/donationCauseController");


const paginate = require('express-paginate');
const multer  = require('multer');
const upload = multer({ dest: './public/file/causes/'});
const midle = require('../config/middlewares');


causeRoutes.get("/", paginate.middleware(10, 10), causeController.index);
causeRoutes.get("/:id", causeController.show);
causeRoutes.post("/", midle.isAuthenticated , upload.array('files'), causeController.create);
causeRoutes.post("/:causeId/budget_item", causeBudgetItemController.create);
causeRoutes.put("/:causeId/members", causeMemberController.edit);
causeRoutes.post("/:causeId/donate", donationCauseController.create);

module.exports = causeRoutes;
