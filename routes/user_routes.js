'use strict';

module.exports = function(app) {
    var todoList = require('./../controller/User');

    app.route('/user')
        .get(todoList.user);

    app.route('/user/login')
        .post(todoList.login);

    app.route('/user/register')
         .post(todoList.register);

    app.route('/profile')
         .get(todoList.verifyToken, todoList.profile);
};