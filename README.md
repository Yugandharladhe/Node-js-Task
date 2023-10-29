# Node-js-Task
To Run REST API's in local environment use following steps:
1) clone this repository
2) use command "npm install"
3) To run API use "nodemon index.js" command OR "npm start"

#Endpoints of Api are:

1) create book API:
  [POST] localhost:3000/api/createBook
  
   request body:
  {
    "title":"test test2",
    "summary":"summarize all book",
    "author":"test2"
  }

2) update book API:
   [PUT] localhost:3000/api/updateBook/:id
   
   request body:
  {
    "title":"test test2",
    "summary":"summarize all book",
    "author":"test2"
  }
  //atleast one field should be given to update book

4) get all book API:
   [GET] localhost:3000/api/getAllBooks

6) get particular book API:
   [GET] localhost:3000/api/getParticularBook/:id

7) delete book API:
   [delete] localhost:3000/api/deleteBook/:id 


