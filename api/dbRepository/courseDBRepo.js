var db = require('../dbconnection');
var course = {
    getAllCourses:function (callback) {
        return db.query("SELECT * FROM COURSES", callback)
    },
    addCourse:function (courseModel, callback) {
        
    }
};