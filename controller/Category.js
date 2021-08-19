'use strict';

const response = require('./../res');
const connection = require('./../db_config');

exports.category = function(req, res) {
    connection.query('SELECT * FROM `category`', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello welcome to inventory application, this is category page", res)
};

exports.findCategory = function(req, res) {
    
    const id = req.params.id;

    connection.query('SELECT * FROM `category` where idCategory = ?',
    [ id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createCategory = function(req, res) {
    
    const category  = req.body.category;

    const query = "INSERT INTO `category` VALUES ?";

    connection.query(query, category, (error, rows, fields) => {
        if(error){
            console.log(error)
        } else{
            response.ok("Successfully added new data", res)
        }
    });
};

exports.updateCategory = function(req, res) {
    
    const { category, idCategory } = req.body;

    const query = "UPDATE `category` SET category = ? WHERE idCategory = ?";

    connection.query(query, [ category, idCategory ], (error, rows, fields) => {
        if(error){
            console.log(error)
        } else{
            response.ok("Successfully change data", res)
        }
    });
};

exports.deleteCategory = function(req, res) {
    
    const { idCategory } = req.body;

    connection.query('DELETE FROM `category` WHERE idCategory = ?',
    [ idCategory ], (error, rows, fields) => {
        if(error){
            console.log(error)
        } else{
            response.ok("Successfully delete data", res)
        }
    });
};