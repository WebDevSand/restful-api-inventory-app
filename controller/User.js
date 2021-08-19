'use strict';

const response = require('./../res');
const connection = require('./../db_config');
const jwt = require('jsonwebtoken');
let sha1 = require('sha1');
let moment = require('moment');

exports.user = function(req, res) {
    response.ok("This is user page", res);
};

exports.profile = (req, res) => {
    connection.query(query, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            jwt.verify(req.token, 'secretkey', (err, authData) => {
                if(err) {
                    res.sendStatus(403);
                } else {
                  res.send({
                      message: `Hello, welcome to your profile ${rows[0].fullName}`,
                      authData
                  });
                }
              });
        }
    });
};

exports.login = (request, reply) => {

    let username = request.body.username;
    let password = request.body.password;
    let sql = `SELECT * FROM users WHERE username = ?`;

    if(!request.body.username || !request.body.password) {
        reply.send({
            code: 400,
            message: "Enter your username / password !"
        });
        return false;
    } else {
        connection.query(sql, [username.trim()], function (error, rows) {
            if(error){
                return response.ok(error, reply)
            } else{
                if(rows.length > 0) {
                    let verify = sha1(password) === rows[0].password;
        
                    let data = {
                        name: rows[0].fullName,
                        email: rows[0].email,
                        dateCreated: rows[0].dateCreated,
                        dateUpdated: rows[0].dateUpdated
                    };
        
                    if(verify) {
                        jwt.sign({data}, 'secretkey', (err, token) => {
                            reply.json ({
                                token
                            });
                        });
                    } else {
                        response.ok('Wrong password', reply);
                    } 
                
                } else {
                    response.ok('Username not found', reply)
                }
            }
                
        });
    }
}

exports.register = (request, res) => {

    let now = moment().format('YYYY-MM-DD HH:mm:ss').toString();
    let { name, username, email } = request.body;
    let password = sha1(request.body.password);
    let { dateCreated, dateUpdated } = now;
    let sql = `SELECT * FROM users WHERE username = ?`;

    if (!request.body.username || !request.body.password || !request.body.email ||!request.body.name) {
        res.send({
            code: 400,
            message: `Enter your username / password / email`
        });
        return false;
    }
    connection.query(sql, username, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            if(rows.length > 0) {
                let verify = username === rows[0].username;
                if (verify) {
                    res.send({
                        code: 406,
                        message: `${username} has already registered.`,
                    });
                } 
            } else {
                let queryUpdate = `INSERT INTO users (fullName, username, email, password, dateCreated, dateUpdated)
                values(?, ?, ?, ?, ?, ?)`;

                connection.query(queryUpdate, [name.trim(), username.trim(), email.trim(), password, dateCreated, dateUpdated], function (error, rows) {
                    if(error){
                        console.log(error)
                    } else{
                        response.ok(`Successfully added new user with email - ${email}`, res)
                    }
                });     
            }
        }
    });
}

exports.verifyToken = (req, res, next) => {
    const thisIsToken = req.headers.token;
    //check is undefined ?
    if(typeof thisIsToken !== 'undefined') {
        req.token = thisIsToken;
        next();
    } else {
        res.send("Please Login first to access app");
    }
}
