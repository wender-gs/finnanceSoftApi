const { body, validationResult } = require("express-validator");
const Transaction = require("../models/Transaction");

exports.transaction_create = [
  body('cliente')
    .isAlphanumeric(),
  body('tipo')
    .isAlphanumeric(),
  body('valor')
    .trim()
    .escape(),
  body('isPaid')
    .isBoolean()
    .withMessage("valor invalido foi inserido")
    .escape(),
  body('beneficiario')
    .trim()
    .isAlphanumeric()
    .withMessage("beneficiario invalido foi inserido"),
  body('data')
    .isDate()
    .withMessage("data invalido foi inserido"),
  body('categoria')
    .trim()
    .escape()
    .isAlphanumeric(),
  body('carteira')
    .trim()
    .escape()
    .isAlphanumeric(),
  (req, res) => {
    const errors = validationResult(req);

    const transaction = new Transaction({
      cliente: req.body.cliente,
      tipo: req.body.tipo,
      valor: req.body.valor,
      isPaid: req.body.isPaid,
      beneficiario: req.body.beneficiario,
      data: req.body.data,
      categoria: req.body.categoria,
      carteira: req.body.carteira
    })

    transaction.save();

    return res.json({ log: "created transaction"})
  }
];

exports.transactions_list = (req, res) => {
  Transaction.find({ cliente : { _id: req.params.id }}, 'cliente tipo valor isPaid beneficiario data categoria carteira')
    .sort({data: -1})
    .exec(function (err, transaction) {
      res.json(transaction);
    })
};

exports.expense_list = (req, res) => {
  Transaction.find({tipo: 'expense', cliente: req.params.id})
    .sort({data: -1})
    .exec(function (err, exp) {
      res.json(exp);
    })
}

exports.recipes_list = (req, res) => {
  Transaction.find({tipo: 'recipe', cliente: req.params.id})
    .sort({data: -1})
    .exec(function (err, recipe) {
      res.json(recipe)
    });
}

exports.recipes_delete = (req, res) => {
  Transaction.deleteOne({_id: req.params.id}).exec();

  res.send({success: true});
}