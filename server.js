const express = require("express");
const cors = require("cors");
const app = express();
const db= require(".app/models")
 db.sequelize.sync;
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded


app.use(express.urlencoded({extended:true}));

// simple route 



  app.get("/",(req,res)=>{
      res.json({message:"welcome to ramakhethetha"})
  })

  // setting port to  listen

  require("./app/routes/turorial.routes")(app);

  const port = process.env.port  ||8080 ;

  app.listen(port,()=>{
      console.log(` server is runnig on ${port}`);
  });
