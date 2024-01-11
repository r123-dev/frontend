const {z}=require("zod")


const signupSchema=z.object({
    username:z
    .string({required_error:"Name is required"}).trim().min(3,{
        message:"Name must be at least of 3 chars"
    }).max(255,{message:"Email must not be more than 255 characters"}),
    email:z
    .string({required_error:"email is required"})
    .trim()
    .min(3,{message:"Email must be at least of 3 characters"}),
phone:z
   .string({required_error:"Phone is required"})
   .trim()
   .min(10,{message:"Phone must be at least 10 characters"})
   .max(20,{message:"Phone must not more than 20 characters"}),
   password:z
   
     .string({required_error:" Password is required"})
     .min(7,{message:"password must be at least 6 letter"})
}

     
)

