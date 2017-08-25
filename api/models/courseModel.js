var connection = require('../dbconnection');
//var connection =
var course = {
    getAllCourses:function (callback) {
        return connection.query("SELECT * FROM courses", callback)
    },
    addCourse:function (courseModel, callback) {
        return connection.query('INSERT INTO courses (course_name, course_description ) VALUES (?,?)', [courseModel.course_name, courseModel.course_description], callback)
    },
    getCourseById:function(id, callback){
        return connection.query('SELECT * FROM courses WHERE ID = ? ', [id], callback);
    }
};
module.exports = course;