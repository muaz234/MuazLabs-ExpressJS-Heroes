var express = require('express');
const fs = require('fs');
var router = express.Router();
const Heroes = require('../models').Hero
const multer = require('multer');
const path = require('path');
const hero_img = multer.diskStorage({ 
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname + './../public/images'))
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname )
    }
})

const save_img = multer({
  storage : hero_img
}).single('avatar');

router.post('/', save_img,function(req, res, next) {
  const result = req.body;
    Heroes.create({
      name: result.name,
      description: result.description,
      img_filename: req.file.filename 
    }). then((data)=> {
      res.status(200).json({message: 'Heroes created successfully', data: data})
      next()
    }).catch(err => {
      console.log(err)
      res.status(500).json({message: 'Unable to create hero!'})
    })
  });


  router.get('/', function(req, res, next) {
    Heroes.findAll().then((data)=> {
      console.log(data)
      res.status(200).json({message: 'All data returned', data: data})
      next()
    }).catch(err => {
      console.log(err)
      res.status(500).json({message: 'Data not returned. Please contact your administrator.'})
    })
  });

  router.get('/:id', function(req, res, next) {
    const argument = req.params.id;
    Heroes.findOne({
      where: {
        id: argument
      }
    }).then((data) => {
      if(data == null) {
        res.status(400).json({message: 'No data Returned for ID: ' +argument})
        
      } else{
        res.status(201).json({message: 'Returned data for ID:' +argument, data: data})
      }
      next() 
      
    }).catch((err) => {
      console.log(err)
      res.status(500).json({message: 'An Error occured. Please check your console or contact the administrator'})
    })
  });

  router.delete('/:id', function(req, res, next) {
    res.render({ title: 'Express' });
  });





module.exports = router;
