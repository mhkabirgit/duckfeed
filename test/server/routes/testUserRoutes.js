//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let config = require ('config');
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

let server = require('../../../server/server');
let User = require('../../../server/models/user');

const serverDB = config.DBHost;
const serverPort = config.ServerPort;
const host ='http://localhost:'+ serverPort;

chai.use(chaiHttp);

describe('User routes tests', () => {

  it('User will signup', (done) => {
    let user = {
        username: "testuser",
        email: "email@test.com",
        password: "password",
        passwordcnf: "password"
    }
    chai.request(host)
        .post('/users/signup')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('username');
          done();
        });
  });

  it('User will signin', (done) => {
    let user = {
        email: "email@test.com",
        password: "password"
    }
    chai.request(host)
        .post('/users/signin')
        .send(user)
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('username');
          done();
        });
  });

  it('Will delete a User', function(){
    User.deleteOne({'username':'testuser'})
    .exec(function(err) {
      if(err){
        console.log('Error: '+ err);
      }
    });
  });

});
