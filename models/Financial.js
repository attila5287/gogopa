const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const valueSchema = new Schema({
	amount: {
		required: true,
		type: Number
	},
	dated: {
		required: true,
		type: String
	}
});

const itemSchema = new Schema({
	name: {
		type: String,
		required: true,
		default: 'Unnamed Expense'
	},
  values : [valueSchema]
});

const accountSchema = new Schema({
	name: {
		type: String,
		required: true,
		default: 'New Account'
	},
	items: [itemSchema]
});


const categorySchema = new Schema({
	name: {
		type: String,
		required: true,
		default: 'New Category'
	},
	accounts: [accountSchema]
});

const FinancialSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: true,
		default: 'Untitled Financial'
	},
	company: {
		type: String,
		trim: true,
		required: true,
		default: 'Unnamed Company'
	},
	created: {
		type: Date,
		required: true,
		default: Date.now
	},
  categories: [ categorySchema ]
});

const Financial = mongoose.model('Financial', FinancialSchema);

module.exports = Financial;
