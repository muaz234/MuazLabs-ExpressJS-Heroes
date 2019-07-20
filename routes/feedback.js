var express = require('express');
var router = express.Router();
const Feedback = require('../models').Feedback;
/* GET users listing. */
router.get('/', function(req, res, next) {
  
    Feedback.findAll().then((data) => {
        console.log(data)
        res.status(200).json({data});
        next();
        if(err){
            res.status(401).json({
                message: 'Fail to retreive data from db'});
            console.log(err);
            throw err;
        }
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



module.exports = router;
