const express = require('express');
const router = express.Router()


const {
    contactUs,
    subscribe
} = require('../controller/userController')


router.post("/contactUs",contactUs)
router.post("/subscribe",subscribe)


module.exports = router