const response=require("../utils/response")
const Book=require("../models/Book")

const createBook = async (req, res) => {
    
    try {
        const {title,author,summary}=req.body

      const created=await Book.create({title,author,summary});
      if(created)
      {
        return response(res,200,true,"New Book Created Successfully",created)
      }
      else{
        return response(res, 400, false, 'Failed To Create Book', null)
      }
    } catch (error) {
        return response(res, 400, false, 'Something went wrong', { error: error.message })
    }
  }

  const deleteBook = async (req, res) => {
    const {id}=req.params
    try {
      const deleted=await Book.deleteOne({_id:id});
      if(deleted.deletedCount!==0)
      {
        return response(res,200,true,"Book deleted Successfully",deleted)
      }
      else{
        return response(res, 400, false, 'No book found', null)
      }
    } catch (error) {
        return response(res, 400, false, 'Something went wrong', { error: error.message })
    }
  }
  

  const getAllBooks = async (req, res) => {

    try {
      const allBooks=await Book.find({});
      if(allBooks.length>0)
      {
        return response(res,200,true,"Success",allBooks)
      }
      else{
        return response(res, 400, false, 'No books are present', null)
      }
    } catch (error) {
        return response(res, 400, false, 'Something went wrong', { error: error.message })
    }
  }


  const getParticularBook = async (req, res) => {
    const{id}=req.params
    try {
      const getBook=await Book.findById(id);
      if(getBook)
      {
        return response(res,200,true,"Success",getBook)
      }
      else{
        return response(res, 400, false, 'No book found of this id', null)
      }
    } catch (error) {
        return response(res, 400, false, 'Something went wrong', { error: error.message })
    }
  }


  const updateBook = async (req, res) => {
    const{id}=req.params
    const{title,summary,author}=req.body
    try {

        if(title===undefined && summary===undefined && author===undefined)
        {
            return response(res,400,false,"please provide details to update",null)
        }
        else{
            const updatedBook=await Book.findByIdAndUpdate(id,
                {
                  title,summary,author
                },
                {
                  new:true
                });
              if(updatedBook)
              {
                return response(res,200,true,"Book details updated successfully",updatedBook)
              }
              else{
                return response(res, 400, false, 'No book found of this id', null)
              }
        }
        
      
    } catch (error) {
        return response(res, 400, false, 'Something went wrong', { error: error.message })
    }
  }

  module.exports = {createBook,deleteBook,getAllBooks,updateBook,getParticularBook}
  