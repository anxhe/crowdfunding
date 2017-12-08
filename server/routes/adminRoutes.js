const express = require("express");
const adminRoutes = express.Router();
const paginate = require('express-paginate');


const adminController = require("../controllers/adminController");
const midle = require('../config/middlewares');


adminRoutes.get("/", paginate.middleware(10, 10),midle.isAuthenticated, adminController.index);



module.exports = adminRoutes;
