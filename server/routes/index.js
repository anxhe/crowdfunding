const app = require('express')();
const router = require('express').Router();
const causeRoutes = require('./causeRoutes');
const authRoutes = require('./auth');


router.use('/causes', causeRoutes);
router.use('/auth', authRoutes);

module.exports = router;
