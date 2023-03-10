var express = require('express');
var router = express.Router();
var database = require('./../config/database');

router.get("/", function (request, response, next) {
    var query = "SELECT * FROM sample_data";
    database.query(query, function (error, data) {
        if (error) {
            throw error;
        }
        else {
            response.render('data', { title: 'Node.js MySQL CRUD Application', action: 'list', sampleData: data });
        }
    });
});

module.exports = router;

