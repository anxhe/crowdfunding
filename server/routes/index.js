const app = require('express')();
const router = require('express').Router();
const causeRoutes = require('./causeRoutes');
const adminRoutes = require('./adminRoutes');
const authRoutes = require('./auth');
const creatorCauseRoutes = require('./creatorCauseRoutes');


router.use('/causes', causeRoutes);
router.use('/auth', authRoutes);
router.use('/admin/causes', adminRoutes);
router.use('/creator/causes', creatorCauseRoutes);

module.exports = router;
