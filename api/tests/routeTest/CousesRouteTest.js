var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../../server');
//var server = 'http://localhost:3000';

var should = chai.should();

chai.use(chaiHttp);

describe('Test Course Route', function () {
    it('Get Course By ID', function (done) {
        chai.request(server)
            .get('/courses/1')
            .end(function (err, res) {
                res.body.length.should.be.eql(1);
                done();
            });
    });

    it('Add Course', function (done) {
        chai.request(server)
            .post('/courses')
            .send({'course_name':'67909','course_description':'9090'})
            .end(function (err, res) {
                res.body.should.have.property('status');
                res.body.status.should.equal('success');
                done();
            });
    });
})