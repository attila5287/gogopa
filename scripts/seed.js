const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gogopa');

const pnlseed = [
	{
		title: 'Profit & Loss',
    company: 'Sample Outdoors',
    created: Date.now(),
		categories: [
			{
				name: 'Income',
				accounts: [
					{
						name: 'Service Income',
						items: [
							{ name: 'Bike Repairs', values: [{ dated: 'TTM', amount: 741 }] }
						]
					},
					{
						name: 'Sales Income',
						items: [
							{ name: 'total', values: [{ dated: 'TTM', amount: 5154845 }] }
						]
					},
					{
						name: 'Interest Income',
						items: [
							{ name: 'Wells Fargo', values: [{ dated: 'TTM', amount: 145 }] }
						]
					},
					{ name: 'Gains', items: [] },
					{
						name: 'Fees Charged',
						items: [{ name: 'POS', values: [{ dated: 'TTM', amount: 15254 }] }]
					},
					{ name: 'Commissions', items: [] },
					{ name: 'Rental Income', items: [] }
				]
			},
			{
				name: 'Expenditure',
				accounts: [
					{
						name: 'Cost of Goods Sold',
						items: [
							{
								name: 'Product Purchase',
								values: [{ dated: 'TTM', amount: 1251411 }]
							}
						]
					},
					{
						name: 'Taxes',
						items: [{ name: 'IRS', values: [{ dated: 'TTM', amount: 110458 }] }]
					},
					{
						name: 'Marketing & Adv',
						items: [
							{ name: 'Radio', values: [{ dated: 'Radio', amount: 1150 }] }
						]
					},
					{
						name: 'Selling, Gen & Adm',
						items: [{ name: 'Rent', values: [{ dated: 'TTM', amount: 51240 }] }]
					},
					{
						name: 'Salaries & Wages',
						items: [
							{ name: 'Payroll', values: [{ dated: 'TTM', amount: 255841 }] }
						]
					},
					{
						name: 'Interest Expense',
						items: [
							{ name: 'Wells Fargo', values: [{ dated: 'TTM', amount: 258 }] }
						]
					},
					{
						name: 'Insurance',
						items: [
							{ name: 'Travelers', values: [{ dated: 'TTM', amount: 5280 }] }
						]
					},
					{
						name: 'Professional Fees',
						items: [
							{ name: 'Cleaning', values: [{ dated: 'TTM', amount: 1857 }] }
						]
					},
					{
						name: 'Telecommunication',
						items: [
							{ name: 'TMobile', values: [{ dated: 'TTM', amount: 1289 }] }
						]
					}
				]
			}
		]
	}
];

db.Financial.collection
	.insertMany(pnlseed)
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
