const express = require("express");

const causeRoutes = express.Router();
const causeController = require("../controllers/causeController");
const donationCauseController = require("../controllers/donationCauseController");


const paginate = require('express-paginate');
const multer  = require('multer');
const upload = multer({ dest: './public/file/causes/'});
const midle = require('../config/middlewares');


causeRoutes.get("/", paginate.middleware(10, 10), causeController.index);
causeRoutes.get("/:id", causeController.show);
causeRoutes.post("/", midle.isAuthenticated , upload.array('files'), causeController.create);
causeRoutes.post("/:causeId/donate", donationCauseController.create);

module.exports = causeRoutes;
