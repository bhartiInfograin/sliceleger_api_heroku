const express = require('express');
const router = express.Router()


const {
    contactUs,
    subscribe,
    test
} = require('../controller/userController')


router.post("/contactUs",contactUs)
router.post("/subscribe",subscribe)
router.get("/test",test)

module.exports = router