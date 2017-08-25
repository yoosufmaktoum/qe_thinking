var assert = require('assert');
var courses = require('../../models/courseModel')
describe('Courses', function () {

    beforeEach(function (done) { //Before each test do some thing
        done();
    });

    describe('Get course by id', function () {
       // this.timeout(15000);

        it('test get course by id', function (done) {
          courses.getCourseById('1', function (err, rows) {
              assert.equal(rows.length, 1);
              done();
             // console.log (rows.length);
          });
      });
    });
})

after(function (done) {
    console.log("......after method running........");
    done();
});