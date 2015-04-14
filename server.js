'use strict';

console.log('Starting server...');

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

// localhost:1234/scrape?title=My Great Article
app.get('/scrape', function (req, res) {

	// get target article from client
	var title = req.query.title;
	var url = "http://en.wikipedia.org/wiki/" + title;

	console.log('Grabbing "' + title + '"');
	console.log(url);

	// fetch target article
	request(url, function (error, response, html) {

		if (error) {
			res.send(error);
			return;
		} else {

			// initialize cheerio
			var $_old = cheerio.load(html);
			var $_new = cheerio.load('<html><head></head><body></body></html>');

			// clean up article
			// $_old('#siteSub').remove();
			// $_old('#contentSub').remove();
			$_old('.mw-editsection').remove();

			// scrape article
			var $externalStyles = $_old('link[rel="stylesheet"]');
			var $internalStyles = $_old('style');
			var $articleContent = $_old('#content');

			// add scraped content to newnew
			$_new('head').append($externalStyles);
			$_new('head').append($internalStyles);
			$_new('body').append($articleContent);

			// hooray
			res.send($_new.html());

		}
	});

});

// fire it up
app.listen('1234');
console.log('Server listening on port 1234');