const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: 'Enter a title',
		default: 'New Acct'
	},
	category: {
		type: String,
		required: 'Select a category',
		default: 'expense'
	},
	items: [
		{
			particular: {
				type: String,
				required: true,
				default: 'Default'
			},
			amount: {
				type: Number,
				default: 0
			},
		}
	]
});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
