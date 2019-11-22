var express = require('express'),
    router = express.Router();

//routes for user api
router.use("/plano", require("../controllers/plano.api"));

//add here other api routes

module.exports = router;