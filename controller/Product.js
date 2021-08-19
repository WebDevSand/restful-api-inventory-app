'use strict';

const response = require('./../res');
const connection = require('./../db_config');
const queryView = "SELECT `pId`, `pName`, `pDesc`, `pImage`, `category`, `pQty`, `pDateAdded`, `pDateUpdated` FROM `product` INNER JOIN category ON `product`.`idCategory` = `category`.`idCategory`";

const jwt = require('jsonwebtoken');

exports.index = function(req, res) {
    response.ok("Hello welcome to inventory application", res)
};

exports.product = function(req, res) {
    //PAGINATION
    let page = (!isNaN(req.query.page)) ? req.query.page || 1 : req.query.page = 1;
    let limit =  (!isNaN(req.query.limit)) ? req.query.limit || 3 : req.query.limit = 3;
    let offset =  (limit * page) - limit || 0;
    // OR ANOTHER WAY
    // let offset = (page - 1) * limit

    //SORT BY NAME, CATEGORY, QUANTITY, DATE UPDATED
    const by = (req.query.by == 'pName' || req.query.by == 'category' || req.query.by == 'quantity' || req.query.by == 'dateUpdated') ?req.query.by || "pId" : req.query.by = 'pId';
    const type = req.query.type || "ASC";
    const sort = ` ORDER BY ${by} ${type} `;

    //SEARCH PRODUCT BY NAME
    const name = req.query.name;
    const whatToFind = (req.query.name || name) ? ` WHERE pName LIKE '%${name}%' ` : "";

    
    connection.query(queryView + whatToFind + sort + "LIMIT "+ limit + " OFFSET "+ offset, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res);
        }
    });      
};

exports.createProduct = function(req, res) {
    
    const { pName, pDesc, pImage, idCategory, pQty } = req.body;
    const date = new Date();
    const query = "INSERT INTO `product` (pName, pDesc, pImage, idCategory, pQty, pDateAdded, pDateUpdated) VALUES (?,?,?,?,?,?,?)";
 
    if( !pName || !pDesc || !pImage || !idCategory || !pQty ) {
        response.ok("Please insert the correct value", res);
    } else {
        connection.query(query, [ pName, pDesc, pImage, idCategory, pQty, date, date ], (error, rows, fields) => {
            if(error){
                console.log(error)
            } else{
                response.ok("Successfully added new data", res)
            }
        });
    }
};

exports.updateProduct = function(req, res) {
    
    const { pName, pDesc, pImage, idCategory, pQty } = req.body;
    const pId = req.params.id;
    const date = new Date();
    const query = "";

    if( !pName || !pDesc || !pImage || !idCategory || !pQty ) {
        response.ok("Please insert the correct value", res);
    } else {
        connection.query('UPDATE `product` SET pName = ?, pDesc = ?, pImage = ?, idCategory = ?, pQty = ?, pDateUpdated = ? WHERE pId = ?', 
        [pName, pDesc, pImage, idCategory, pQty, date, pId ], (error, rows, fields) => {
            if(error){
                console.log(error)
            } else{
                response.ok("Successfully change data", res)
            }
        });
    }
        
    
};

exports.deleteProduct = function(req, res) {
    
    const { pId } = req.body;

    connection.query('DELETE FROM `product` WHERE pId = ?',
    [ pId ], (error, rows, fields) => {
        if(error){
            console.log(error)
        } else{
            response.ok("Successfully delete data", res)
        }
    });
};

 // Add or Reduce Qty in Product
exports.AORQty = (req, res) => {
    const operation = req.body.operation;
    const qty = req.body.qty;
    const Name = req.body.name;

    if (operation.trim() == 'add') {
        const product = connection.query("SELECT * FROM `product` WHERE pName = "+"'"+Name+"'", function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                let result = parseInt(rows[0].pQty) + parseInt(qty);
 
                const query = "UPDATE `product` SET pQty = "+result+" WHERE pName = "+"'"+Name+"'";
                connection.query(query, (error, rows, fields) => {
                    if(error){
                        console.log(error)
                    } else{
                        response.ok("Successfully change data", res)
                    }
                });
            }
        });
    } else if (operation.trim() == 'min') {
        const product = connection.query("SELECT * FROM `product` WHERE pName = "+"'"+Name+"'", function (error, rows, fields){
            if(error){
                console.log(error)
            } else {
                let result = parseInt(rows[0].pQty) - parseInt(qty);

                if (result < 0) {
                    res.send("You cannot reduce the quantity of data below 0, You are reduce the "+ rows[0].pName + " with the quantity is "+ rows[0].pQty +" and reduce to "+ qty + ". so, the result is " + result);
                } else {
                    const query = "UPDATE `product` SET pQty = "+result+" WHERE pName = "+"'"+Name+"'";
                    connection.query(query, (error, rows, fields) => {
                        if(error){
                            console.log(error)
                        } else{
                            response.ok("Successfully change data", res)
                        }
                    });
                }
            } 
        });
    }
}