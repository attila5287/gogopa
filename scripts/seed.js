const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gogopa');

const pnlseed = [
	{
		title: 'Profit & Loss -3Y',
		company: 'Sample Outdoors Company',
		notes: [
			{
				about: 'Time Series',
				text: 'Last Three Years'
			}
		],
		created: Date.now(),
		categories: [
			{
				name: 'Income',
				sign: 'plus',
				accounts: [
					{
						name: 'Service Income',
						items: [
							{
								name: 'Bike Repairs',
								values: [
									{
										dated: '2020',
										amount: 741
									},
									{
										dated: '2019',
										amount: 955
									},
									{
										dated: '2018',
										amount: 1250
									}
								]
							}
						]
					},
					{
						name: 'Sales Income',
						items: [
							{
								name: 'Store Sales',
								values: [
									{
										dated: '2020',
										amount: 5154845
									},
									{
										dated: '2019',
										amount: 5751421
									},
									{
										dated: '2018',
										amount: 5987121
									}
								]
							},
							{
								name: 'Online Sales',
								values: [
									{
										dated: '2020',
										amount: 551254
									},
									{
										dated: '2019',
										amount: 221485
									},
									{
										dated: '2018',
										amount: 204125
									}
								]
							}
						]
					},
					{
						name: 'Interest Income',
						items: [
							{
								name: 'Wells Fargo',
								values: [
									{
										dated: '2020',
										amount: 145
									},
									{
										dated: '2019',
										amount: 145
									},
									{
										dated: '2018',
										amount: 199
									}
								]
							}
						]
					},
					{
						name: 'Fees Charged',
						items: [
							{
								name: 'Bike Late Fees',
								values: [
									{
										dated: '2020',
										amount: 1540
									},
									{
										dated: '2019',
										amount: 1860
									},
									{
										dated: '2018',
										amount: 2280
									}
								]
							}
						]
					},
					{
						name: 'Rental Income',
						items: [
							{
								name: 'Bike Rental',
								values: [
									{
										dated: '2020',
										amount: 24582
									},
									{
										dated: '2019',
										amount: 28451
									},
									{
										dated: '2018',
										amount: 32580
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Expenditure',
				sign: 'minus',
				accounts: [
					{
						name: 'Cost of Goods Sold',
						items: [
							{
								name: 'Product Purchase',
								values: [
									{
										dated: '2020',
										amount: 2251411
									},
									{
										dated: '2019',
										amount: 3251411
									},
									{
										dated: '2018',
										amount: 3771151
									}
								]
							}
						]
					},
					{
						name: 'Taxes',
						items: [
							{
								name: 'IRS',
								values: [
									{
										dated: '2020',
										amount: 110458
									},
									{
										dated: '2019',
										amount: 155411
									},
									{
										dated: '2018',
										amount: 194310
									}
								]
							}
						]
					},
					{
						name: 'Marketing & Adv',
						items: [
							{
								name: 'Radio Commercials',
								values: [
									{
										dated: '2020',
										amount: 1150
									},
									{
										dated: '2019',
										amount: 1350
									},
									{
										dated: '2018',
										amount: 1750
									}
								]
							}
						]
					},
					{
						name: 'Selling, Gen & Adm',
						items: [
							{
								name: 'Rent',
								values: [
									{
										dated: '2020',
										amount: 175500
									},
									{
										dated: '2019',
										amount: 166250
									},
									{
										dated: '2018',
										amount: 151240
									}
								]
							}
						]
					},
					{
						name: 'Salaries & Wages',
						items: [
							{
								name: 'Payroll',
								values: [
									{
										dated: '2020',
										amount: 175250
									},
									{
										dated: '2019',
										amount: 375245
									},
									{
										dated: '2018',
										amount: 455841
									}
								]
							}
						]
					},
					{
						name: 'Interest Expense',
						items: [
							{
								name: 'Wells Fargo',
								values: [
									{
										dated: '2020',
										amount: 258
									},
									{
										dated: '2019',
										amount: 390
									},
									{
										dated: '2018',
										amount: 580
									}
								]
							}
						]
					},
					{
						name: 'Insurance',
						items: [
							{
								name: 'Travelers',
								values: [
									{
										dated: '2020',
										amount: 5280
									},
									{
										dated: '2019',
										amount: 15280
									},
									{
										dated: '2018',
										amount: 25220
									}
								]
							}
						]
					},
					{
						name: 'Professional Fees',
						items: [
							{
								name: 'Accountant',
								values: [
									{
										dated: '2020',
										amount: 2750
									},
									{
										dated: '2019',
										amount: 3250
									},
									{
										dated: '2018',
										amount: 3750
									}
								]
							}
						]
					},
					{
						name: 'Telecommunication',
						items: [
							{
								name: 'TMobile',
								values: [
									{
										dated: '2020',
										amount: 1289
									},
									{
										dated: '2019',
										amount: 1355
									},
									{
										dated: '2018',
										amount: 1475
									}
								]
							}
						]
					}
				]
			}
		]
	}
];

db
  .Financial
  .collection
  .insertMany(pnlseed)
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
