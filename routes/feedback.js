var express = require('express');
var router = express.Router();
const Feedback = require('../models/feedback');
/* GET users listing. */
router.get('/', function(req, res, err) {
  
    Feedback.findAll().then(function(data){
        console.log(data)
        res.status(200)
        res.json(data, {success: true, message: 'Got data successfully'})
        if(err){
            res.status(401)
            res.json({success: false, message: 'Fail to retreive data from db'})
            console.log(err)
            throw err;
        }
    })
});

router.post('/', function(req, res, err){
    Feedback.create(req.body).then(function(data) {
        console.log(data)
        res.status(200)
        res.json(data)
        if(err){
            const message="Error posting data to mysql. Check your console log."
            console.log(err)
            res.status(401)
            res.json({success: false, message: message})
        }
    })
})

module.exports = router;
