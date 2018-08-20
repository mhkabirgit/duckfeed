//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let config = require ('config');
let User = require('../../../server/models/user');
let server = require('../../../server/server');

let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

const serverDB = config.DBHost;

chai.use(chaiHttp);

describe('User routes tests', () => {

  // before(function(){
  //   mongoose.connect(serverDB, { useNewUrlParser: true });
  //   var db = mongoose.connection;
  //   db.on("error", console.error.bind(console, "connection error"));
  //   db.once("open", function(){
  //     console.log('DB connected');
  //   });
  // });
  //
  // it('User will signup', (done) => {
  //   let user = {
  //       username: "testuser",
  //       email: "email@test.com",
  //       password: "password",
  //       passwordcnf: "password"
  //   }
  //   chai.request(server)
  //       .post('/users/signup')
  //       .send(user)
  //       .end((err, res) => {
  //           res.should.have.status(200);
  //           res.body.should.be.a('object');
  //           res.body.should.have.property('user');
  //         done();
  //       });
  // });
  //
  // it('User will signin', (done) => {
  //   let user = {
  //       email: "email@test.com",
  //       password: "password"
  //   }
  //   chai.request(server)
  //       .post('/users/signin')
  //       .send(user)
  //       .end((err, res) => {
  //           res.should.have.status(200);
  //           res.body.should.be.a('object');
  //           res.body.should.have.property('user');
  //         done();
  //       });
  // });
  //
  // it('User will not signout', (done) => {
  //   chai.request(server)
  //       .post('/users/signout')
  //       .send({})
  //       .end((err, res) => {
  //           res.should.have.status(200);
  //           res.body.should.be.a('object');
  //           res.body.should.have.property('status');
  //         done();
  //       });
  // });
  //
  // after(function(){
  //     var db = mongoose.connection;
  //     db.dropDatabase();
  //     mongoose.disconnect();
  // });
})
