const express=require('express');
const app=express();
const authRoute=require("./router/auth-router");
const connectDb=require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');
const contactRoute=require("./controller/contact-controller")


app.use(express.json());
app.use(errorMiddleware);

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
const PORT=5000
connectDb().then(()=>{


app.listen(PORT,()=>{
  console.log(`server is running on port : ${PORT}`);
});
});