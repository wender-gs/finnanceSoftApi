const { body, validationResult } = require("express-validator");
const Transaction = require("../models/Transaction");

exports.transaction_create = [
  body('cliente')
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
  body('carteira')
    .trim()
    .escape()
    .isAlphanumeric(),
  (req, res) => {
    const errors = validationResult(req);

    const transaction = new Transaction({
      cliente: req.body.cliente,
      valor: req.body.valor,
      isPaid: req.body.isPaid,
      beneficiario: req.body.beneficiario,
      data: req.body.data,
      carteira: req.body.carteira
    })

    transaction.save();

    return res.json({ log: "created transaction"})
  }
];

exports.transactions_list = (req, res) => {
  Transaction.find({ cliente: {_id: '631236b8a37c757b63124e97'}}, 'beneficiario valor')
    .exec(function (err, transaction) {
      res.json(transaction)
    })
};
