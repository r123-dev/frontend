const mongoose=require('mongoose');
const URI="mongodb://127.0.0.1:27017/vivek";


const connectdb=async ()=>{
    try {
         mongoose.connect(URI);
        console.log("connection successful")
    } catch (error) {
        console.log("database connection error");
        process.exit(0);
    }
}

module.exports=connectdb;