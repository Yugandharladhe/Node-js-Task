const express = require('express')
const router = express.Router()
const {createBook,deleteBook,getAllBooks,updateBook,getParticularBook}=require("../controllers/BookController")


router.post('/createBook', createBook)
router.get('/getAllBooks',getAllBooks)
router.get("/getParticularBook/:id",getParticularBook)
router.put("/updateBook/:id",updateBook)
router.delete("/deleteBook/:id",deleteBook)

module.exports=router