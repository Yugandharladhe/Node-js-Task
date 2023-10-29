# Node-js-Task
To Run REST API's in local Environment use following steps:
1) clone this repository
2) Run command "npm install"
3) you should have local mongoDB installed in your system,to start project run command "nodemon index.js" OR "npm start"

# Endpoints of REST API's:
1) create Book API:
   [POST]localhost:3000/api/createBook <br>
   req body:
   {
    "title":"test1",
    "summary":"test2",
    "author":"myself"
   }
   <br>
3) get all books API:<br>
   [GET] localhost:3000/api/getAllBooks
<br>
4) get particular book API:<br>
   [GET] localhost:3000/api/getParticularBook/:id
<br>
5) update Book APi:<br>
   [PUT] localhost:3000/api/updateBook/:id
   <br>
    req body:
   {
    "title":"test1",
    "summary":"test2",
    "author":"myself"
   }
   <br>
//atleast one filed should be specified in update book
<br>
7) delete book API:<br>
   [DELETE] localhost:3000.api/deleteBook/:id
   
   
