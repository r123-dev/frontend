const Contact=require("../models/contact-model");


const contactForm=async (req,res)=>{
try {
    const response=req.body;
    await Contact.create(response);
    return res.status(200).json({message:"message send successful"});

} catch (error) {

    
}
}

module.exports=contactForm;