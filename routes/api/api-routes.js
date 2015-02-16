var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var topic = mongoose.model('Topic');

router.get('/topics', function (req, res) {
    //res.send('Getting topics...');
    var query = topic
        .find('')
        .sort('name');
    
    query.exec()
        .then(
            // Success
            function(results) {
                if (req.accepts('html')) {
                    res.render('topics', {
                        topics: results  
                    });
                }
                else {
                    res.send(results);
                }
            },
            // Failure
            function(error) {
                console.warn('Topic list failed: %O', error);
                res.status(500);
                res.send(error);
            }
        );
});

router.post('/topics', function (req, res) {
   topic.create(req.body).then(function (results) {
       res.send(results);
   }, function (error) {
       console.warn('Topic create failed: %0', error);
       res.status(400);
       res.send(error);
   });
});

module.exports = router;