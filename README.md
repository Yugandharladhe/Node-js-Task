# Node-js-Task
To Run REST API's in local Environment use following steps:
1) clone this repository
2) Run command "npm install"
3) you should have local mongoDB installed in your system,to start project run command "nodemon index.js" OR "npm start"

# Endpoints of REST API's:
1) create Book API:
   [POST]localhost:3000/api/createBook
   req body:
   {
    "title":"test1",
    "summary":"test2",
    "author":"myself"
   }

2) get all books API:
   [GET] localhost:3000/api/getAllBooks

3) get particular book API:
   [GET] localhost:3000/api/getParticularBook/:id

4) update Book APi:
   [PUT] localhost:3000/api/updateBook/:id
    req body:
   {
    "title":"test1",
    "summary":"test2",
    "author":"myself"
   }
//atleast one filed should be specified in update book

5) delete book API:
   [DELETE] localhost:3000.api/deleteBook/:id
   
   
