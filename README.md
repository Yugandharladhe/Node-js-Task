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
   //all field are compulsory
   <br>
   <br>
   <br>
   
3) get all books API:<br>
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

# Deployment on Azure Webapp service
1) name your application(it will be later on your URL of deployed app)
2) select resource group
3) select runtime stack(Node 18 LTS)
4) select OS type (linux)
5) select region where you have to deploy your app
6) select linux plan(1GB memory)
7) In deployment options select how to do deployment(I selected github Actions continuous deployment)
8) then select access to application(public or private)
9) And lastly review + create
10) lastly it will built and deploy our app(and we get our url to access the app)
   
