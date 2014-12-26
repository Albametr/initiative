var request = require('co-supertest'),
	koa		= require('koa'),
	app		= require('./index');

require('co-mocha');

var server = app.listen();

describe('Testing initiative project', function () {
	describe('Get home page', function () {
		var agent;
		before(function *() {
			agent = request.agent(server);
		});
		
		it('Should get OK', function *() {
			yield agent
				.get('/')
				.expect(200)
				.end();
		});
	});
});