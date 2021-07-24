const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParticularSchema = new Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	body: String,
	date: { type: Date, default: Date.now }
});

const Particular = mongoose.model('Particular', ParticularSchema);

module.exports = Particular;
