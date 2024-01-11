const User=require("../models/user-model")
const bcrypt=require("bcryptjs")

const home=async (req,res)=>{
  try {
    
   res.status(200).send("how are you");


  } catch (error) {
    console.log(error);
  }
}
const register=async (req,res)=>{
    try {
        
     const {username,email,phone,password}=req.body;
     const userExist= await User.findOne({email:req.body.email});
     if(userExist){
      return res.status(400).json({msg:"email already"});
     }
        //const saltRound=10;
        //const hash_password=await bcrypt.hash(password,saltRound);


     userExist=await User.create({username:username,email:email,phone:phone,password:password});
       // res.status(201).json({msg:userCreated,token:await userCreated.generateToken(),userId:userCreated._id.toString(),});

    } catch (error) {
        res.status(500).json("internal server error")
    }
}



///login

 const login=async(req,res)=>{
  try {
    const {email,password}=req.body;
    const userExist=await User.findOne({email});

    if(!userExist){ return res.status(400).json({message:"Invalid Credentials"});}
    
    const user=await bcrypt.compare(password,userExist.password);
    if(user){
      res.status(200).json({
        msg:"Login successful",
        token:await userExist.generateToken(),
        userId:userExist._id.toString(),
      });
    }
    else{
    res.status(401).json({message:"Invalid Credentials"})

    }


  } catch (error) {
    res.status(500).json("internal server error");
  }

 }



module.exports={home,register,login};