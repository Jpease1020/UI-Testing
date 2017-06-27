(function () {
    'use strict';

    var app = require('../../app');
    var request = require('supertest');
    // var httpStatus = require('http-status-codes');
    var expect = require('chai').expect;

    var sinon = require('sinon');
    var fs = require('fs');

    describe('Acceptance testing the Healh endpoint', function () {
        this.timeout(10000);

        describe('has ping functionality', () => {
            it('will return pong when application is up', (done) => {
                request(app).get('/ping')
                    .expect(200)
                    .end(function (req, res) {
                        expect(res.text).to.equal('pong');
                        done();
                    });
            });
        });

        describe('has status route to return application information', () => {

            it('will return an object with status attribute with value UP when appliation is running', (done) => {
                request(app).get('/status')
                    .expect(200)
                    .end(function (req, res) {
                        expect(res.body).to.have.property('status');
                        expect(res.body.status).to.equal("UP");
                        done();
                    });
            });

            // it('will return an object with name attribute for application name', (done) => {
            //     request(app).get('/status')
            //         .expect(200)
            //         .end(function (req, res) {
            //             expect(res.body).to.have.property('name');
            //             expect(res.body.name).to.equal("Billing Explanation Tool");
            //             done();
            //         });
            // });

            // it('will return an object with buildversion attribute for application buildversion', (done) => {
            //     request(app).get('/status')
            //         .expect(200)
            //         .end(function (req, res) {
            //             expect(res.body).to.have.property('version');
            //             expect(res.body.version).to.equal("0.0.1");
            //             done();
            //         });
            // });

        });

        // describe('has health GET route to return overall application health information  ', () => {

        //     it('response contains property healthy with value UP', (done) => {
        //         request(app).get('/health')
        //             .expect(200)
        //             .end(function (req, res) {
        //                 expect(res.body).to.have.property('healthy');
        //                 expect(res.body.healthy).to.equal('UP');
        //                 done();
        //             });
        //     });

        //     it(' response contains property services as an array ', (done) => {
        //         request(app).get('/health')
        //             .expect(200)
        //             .end(function (req, res) {
        //                 expect(res.body).to.have.property('services');
        //                 expect(res.body.services).to.not.equal(undefined);
        //                 expect(res.body.services).to.be.instanceOf(Array);
        //                 done();
        //             });
        //     });

        //     it(' for each service, response contains name property', (done) => {
        //         request(app).get('/health')
        //             .expect(200)
        //             .end(function (req, res) {
        //                 var responseArray = res.body.services;
        //                 expect(responseArray[0]).to.have.property('name');
        //                 done();
        //             });
        //     });

        //     it('for each service, response contains end-point property  ', (done) => {
        //         request(app).get('/health')
        //             .expect(200)
        //             .end(function (req, res) {
        //                 var responseArray = res.body.services;
        //                 expect(responseArray[0]).to.have.property('endpoint');
        //                 done();
        //             });
        //     });

        //     it('for each service, response contains status property  ', (done) => {
        //         request(app).get('/health')
        //             .expect(200)
        //             .end(function (req, res) {
        //                 var responseArray = res.body.services;
        //                 expect(responseArray[0]).to.have.property('status');
        //                 done();
        //             });
        //     });
        // });

        // describe('has health POST route to return overall application health information', () => {

        //     it('which returns response property healthy with value UP, when passed correct key', (done) => {
        //         request(app).post('/health')
        //             .send({ key: process.env.HEALTH_POST_KEY })
        //             .expect(200)
        //             .end(function (req, res) {
        //                 expect(res.body).to.have.property('healthy');
        //                 expect(res.body.healthy).to.equal('UP');
        //                 done();
        //             });
        //     });

        //     it('which returns empty response, when passed incorrect key', (done) => {
        //         request(app).post('/health')
        //             .send("xxx")
        //             .expect(500)
        //             .end(done);
        //     });

        // });

    });
}());