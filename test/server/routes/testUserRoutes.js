//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let User = require('../../../server/models/user');
let server = require('../../../server/server');

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

describe('User routes tests', () => {
  it('User will signup', (done) => {
    let user = {
        username: "testuser",
        email: "email@test.com",
        password: "password",
        passwordcnf: "password"
    }
    chai.request(server)
        .post('/users/signup')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message');
          done();
        });
  });

  it('User will not signin', (done) => {
    let user = {
        email: "email@test.com",
        password: "password"
    }
    chai.request(server)
        .post('/users/signin')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message');
          done();
        });
  });

  it('User will not signout', (done) => {
    chai.request(server)
        .post('/users/signout')
        .send({})
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('statusCode');
          done();
        });
  });
})
