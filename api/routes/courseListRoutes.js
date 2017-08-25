var express = require('express');
var router = express.Router();
var course = require('../models/courseModel');

router.get('/:id?', function (req, res, next) {
    if(req.params.id){
        course.getCourseById(req.params.id, function (err, rows) {
            if(err){
                res.json(err);
            }else {
                res.json(rows);
            }
        });
    }
    else {
        course.getAllCourses(function (err, rows) {
            if(err){
                res.json(err);
            }else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function (req, res, next) {
    console.log(req.body);
    course.addCourse(req.body, function (err, count) {
        if(err){
            res.json(err);
        }else
        {
            res.json({'status':'success'});
        }
    });
})
module.exports = router;