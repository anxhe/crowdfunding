const express = require("express");
const adminRoutes = express.Router();

const adminController = require("../controllers/adminController");
const midle = require('../config/middlewares')


adminRoutes.get("/", midle.isAuthenticated, adminController.index);



module.exports = adminRoutes;
