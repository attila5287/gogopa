const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: 'Enter a title',
		default: 'New Group'
	},
	category: {
		type: String,
		required: 'Select a category',
		default: 'expense'
	},
	particulars: [
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

const Workout = mongoose.model("Workout", GroupSchema);

module.exports = Workout;
