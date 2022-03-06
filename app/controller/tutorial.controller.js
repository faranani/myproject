const db = require("../models")
const  Tutorial = db.tutorials;
 const OP = db.Sequelize.OP;

 // create new tutorial 

 exports.create =(req,res)=>{
     // validate request 

     if(!req.body.title){
         res.status(400),send({
             message : " content cannot be empty"
         });

         return;
     }
     //   create post

     const tutorial = {
         title : req.body.title,
         description :req.body.description,
         published : req.body.findAllPublished ? req.body.published : false
     };

     //  save post 

     Tutorial.create(tutorial)
     .then(data =>{
         res.send(data);
     })
     .catch(err =>{
         res.send(500).send({
             message:err.mesage ||"Some error occurred while creating the Tutorial."
         });
     });

 };

 exports.findAll =(req,res)=>{

    const title = req.query.title;
    var condition = title ? { title: { [OP.iLike]: `%${title}%` } } : null;
    Tutorial.findAll({where : condition}).
    then(data =>{
        res.send(data);
    }).
    catch(err =>{
        res.status(500).send({
            message:err.mesage ||"Some error occurred while creating the Tutorial."

        });
    });



     
};

exports.findOne =(req,res)=>{

    const id = req.params.id;
    Tutorial.findByPk(id).
    then(data =>{
        if(data){
            res.send(data);
        }
        else{
            res.status(404).send({
                message : `Cannot find Tutorial with id=${id}.`
            });
        }
    })
    .catch(err=>{
        res.status(500).send({
           message : "error retrieve tutorial with id  " + id
        });
    });

     
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;
    Tutorial.update(req.body,{
        where : {id : id}
    })
    . then (num =>{
        if(num == 1)
        {
            res.send({
                message : "tutorial wass updated success"
            })
        }
        else
        {
            res.send({
                message :`cannot update tutorial with id=${id}`
            });
        };
    })
    .catch(err=>{
        res.status(500).send({
            message :"error updating tutorial with id=" +id
        });
    });
    
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Tutorial.deleteById({
        where : {id :id}
    })
    .then(num=>{
        if(num ==1){
            res.send({
                message : "tutorial was deleted successully"
            });
        }
        else{
            res.send({
                message :`cannot delete tutorial with id= ${id}`
            });
        }
    }).
    catch(err =>{
        res.status(500).send({
            message : "could not tutoria; with id" +id
        });
    });
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where : {},
        truncate : false
    })
    .then(nums =>{
        res.send({
            message : `${nums} Tutorials were deleted  succesfully`
        })
    })
    . catch(err =>{
        res.status(500).send({
            message:err.message || "some error occurred while  deleting"
        });
    });
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    Tutorial.findAll({where :{published :true}})
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message ||"some error occurred while retriving"
        });
    });
  
};