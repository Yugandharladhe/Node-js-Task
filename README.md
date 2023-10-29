# Node-js-Task
To Run REST API's in local Environment use following steps:
1) clone this repository
2) Run command "npm install"
3) you should have local mongoDB installed in your system,to start project run command "nodemon index.js" OR "npm start"

# Endpoints of REST API's:
1) create Book API:
   [POST] localhost:3000/api/createBook <br>
   req body:
   {
    "title":"test1",
    "summary":"test2",
    "author":"myself"
   }
   <br>
   <br>
   <br>
   //all field are compulsory
2) get all books API:<br>
   [GET] localhost:3000/api/getAllBooks
<br>
<br>
<br>
   3) get particular book API:<br>
      [GET] localhost:3000/api/getParticularBook/:id
   <br>
   <br>
   <br>
   4) update Book APi:<br><br>
      [PUT] localhost:3000/api/updateBook/:id
      <br><br>
       req body:
      {
       "title":"test1",
       "summary":"test2",
       "author":"myself"
      }
      <br>
   //atleast one filed should be specified in update book
   <br>
   <br>
   <br>
   5) delete book API:<br>
      [DELETE] localhost:3000.api/deleteBook/:id
      
   
