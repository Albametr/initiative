'use strict';
var koa 	= require('koa'),
	router 	= require('koa-router'),
	parse	= require('co-body'),
	config 	= require('config');

var app = module.exports = koa();

app.use(router(app));

app.get('/', function* (next) {
	this.body = 'hello albametr';
});

if (!module.parent) app.listen(config.port || 3000);