const express=require("express")
const app=express()
const { connectDB } = require("./db/connection")
require("dotenv").config()
const route=require("./routes/route")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT=process.env.PORT || 3000


connectDB(process.env.CONNECTION_STRING)

app.use("/api",route)


app.listen(PORT,()=>{
    console.log(`App is listening on PORT ${PORT}`);
})