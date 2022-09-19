const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// instanciando app
const app = express();

// criando conexão com o banco de dados
const mongoDB = "mongodb://localhost:27017/expenseControl"  // "mongodb+srv://expctrl:wender.624468@expense-control.uuktvmf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoDB, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
});
const db = mongoose.connections;

// variaveis middleware
const indexRouter = require('./routes/index');

// setando as ferramentas do servidor
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// setando as rotas do middleware
app.use('/', indexRouter);

module.exports = app;
