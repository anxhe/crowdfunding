const app = require('express')();
const router = require('express').Router();
const causeRoutes = require('./causeRoutes');
const adminRoutes = require('./adminRoutes');
const authRoutes = require('./auth');


router.use('/causes', causeRoutes);
router.use('/auth', authRoutes);
router.use('/admin/causes', adminRoutes);

module.exports = router;
