const express = require("express");
const router = express.Router();
const path = require("path")

router.get('/',(req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname +'/../public/home.html'))
})
router.get('/home',(req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname +'/../public/home.html'))
})
router.get('/service',(req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname +'/../public/ourservices.html'))
})
router.get('/contact',(req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname +'/../public/contactus.html'))
})


module.exports=router