var express = require('express');
var router = express.Router();

const ToDo = require('../models/todo');

//Get Documents
router.get('/', (req, res, next) => {
    // Document.find().then(documents => {
    //     res.status(200).json({
    //         message: "Got Documents Successfully!",
    //         documents: documents
    //     })
    // }).catch(error => {
    //     res.status(500).json({
    //        message: 'An error occurred',
    //        error: error
    //      });
    //  });
    console.log('GET TO-DO ITEMS')
           res.status(200).json({
            message: "Got TODO Successfully!",
        })

 });

 module.exports = router;