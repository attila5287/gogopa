const router = require("express").Router();
const postRoutes = require("./posts");
const financialRoutes = require('./financials');

// Post routes
router.use("/posts", postRoutes);
router.use('/financials', financialRoutes);

module.exports = router;
