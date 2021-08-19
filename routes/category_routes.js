'use strict';

module.exports = function(app) {
    var todoList = require('./../controller/Category');
    let todoListUser = require('./../controller/User');

    app.route('/')
        .get(todoList.index);

    app.route('/category')
    .get(todoList.category);

    app.route('/category/:id')
        .get(todoList.findCategory);

    app.route('/category')
        .post(todoListUser.verifyToken, todoList.createCategory);

    app.route('/category/:id')
        .put(todoListUser.verifyToken, todoList.updateCategory);
    
    app.route('/category')
        .delete(todoListUser.verifyToken, todoList.deleteCategory);
};