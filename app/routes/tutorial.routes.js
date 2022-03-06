
module.exports = app =>{
    const tutorials = require("../controller/tutorial.controller");
    var router = require("express").Router();

    // create a new Tutorial

    router.post("/",tutorials.create);
    // restrieve all tutorials
    router.get("/",tutorials.findAll);

    // retrieve all published tutorials

    router.get("/published", tutorials.findAllPublished)
    
    // retrieve single tutorials

    router.get("/:id",tutorials.findOne);

    //  update tutorial with id

    router.put("/:id",tutorials.update)

    // delete tutorials id

    router.delete("/:id", tutorials.delete)

    // create a new tutorial

    router.delete('/api/tutorials',router)
}