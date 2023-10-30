const express=require("express")
const app=express()
const { connectDB } = require("./db/connection")
require("dotenv").config()
const route=require("./routes/route")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT=process.env.PORT || 3000

const url=process.env.CONNECTION_STRING
connectDB(url)

app.use("/api",route)
app.use("/",(req,res)=>{
    res.json({msg:"Welcome to node js appplication by yugandhar"})
})


app.listen(PORT,()=>{
    console.log(`App is listening on PORT ${PORT}`);
})