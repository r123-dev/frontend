const express=require("express");
const router=express.Router();
const contactForm=require("../controller/contact-controller");
router.route("/contact").post(contactForm);

module.exports=router;