var express = require('express');
var router = express.Router();
const Feedback = require('../models').Feedback;
/* GET users listing. */
router.get('/', function(req, res, next) {
  
    Feedback.findAll().then((data) => {
        console.log(data)
        res.status(200).json({data});
        next();
    })
        .catch((err) => {
            res.status(401).json({
                message: 'Fail to retrieve data from db'});
            console.log(err);
        })
});

router.post('/', function(req, res, next){
    let data = req.body;
    Feedback.create(
       {name: data.name, feedback: data.feedback} 
    ).then((result) => {
        res.status(200).json(result)
        next();
    })
    .catch((err) => {
        console.log(err)
    })
})

router.get('/:id', function(req, res, next) {
    Feedback.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        if(data == null){
            res.status(400).json({message: 'No records returned with associated ID: '+ req.params.id})
            
        }
        else{
            console.log(data)
            res.status(200).json(data)
        }
       
        next()
    }).catch((err)=> {
        console.log(err)
    })
})

router.delete('/:id', function(req, res, next){
    const id = req.params.id 
    Feedback.destroy({ where: {
        id: id   
    }
    }).then(() => {
        console.log(res)
        if(req.query != {}){
            res.status(200).json({message: 'Deleted successfully'})
        } 
        else {
            res.status(404).json({message: 'No data found with associated ID ' + id})
        }
    })
})



module.exports = router;
