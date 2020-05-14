var express = require('express'),
    router = express.Router();

//rotas para api de planos
router.use("/plano", require("../controllers/plano.api"));



module.exports = router;