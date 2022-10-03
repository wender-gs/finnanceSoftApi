const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  cliente: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  isPaid: {
    type: Boolean,
    required: true
  },
  beneficiario: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    required: true,
    default: new Date().getDate()
  },
  carteira: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Transaction", TransactionSchema);
