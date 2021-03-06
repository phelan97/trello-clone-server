const signup = require('./signup');
const login = require('./login');
const addBoard = require('./addBoard');
const addList = require('./addList');
const addCard = require('./addCard');
const removeBoard = require('./removeBoard');
const removeList = require('./removeList');
const removeCard = require('./removeCard');
const editCard = require('./editCard');
const editList = require('./editList');
const moveCard = require('./moveCard');
const renameBoard = require('./renameBoard');

module.exports = {
  signup, login, addBoard, addList, addCard, renameBoard,
  removeBoard, removeList, removeCard, editCard, editList, moveCard};