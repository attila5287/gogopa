const router = require("express").Router();
const financialsController = require('../../controllers/financialsController');

// Matches with "/api/posts"
router
	.route('/')
	.get(financialsController.findAll)
	.post(financialsController.create);

// Matches with "/api/posts/:id"
router
	.route('/:id')
	.get(financialsController.findById)
	.put(financialsController.update)
	.delete(financialsController.remove);

module.exports = router;
