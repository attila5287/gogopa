const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/gogopa');

const financials = [
	{
		_id: ObjectId('61047919962ae700040307c9'),
		title: 'Profit & Loss TTM',
		company: 'Sample Outdoors',
		notes: [
			{
				about: 'TTM',
				text: 'Trailing Twelve Months'
			}
		],
		created: 1627683097096.0,
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
										dated: 'TTM',
										amount: 741
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
										dated: 'TTM',
										amount: 5154845
									}
								]
							},
							{
								name: 'Online Sales',
								values: [
									{
										dated: 'TTM',
										amount: 251325
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
										dated: 'TTM',
										amount: 145
									}
								]
							}
						]
					},
					{
						name: 'Gains',
						items: []
					},
					{
						name: 'Fees Charged',
						items: [
							{
								name: 'POS',
								values: [
									{
										dated: 'TTM',
										amount: 15254
									}
								]
							}
						]
					},
					{
						name: 'Commissions',
						items: []
					},
					{
						name: 'Rental Income',
						items: []
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
										dated: 'TTM',
										amount: 1251411
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
										dated: 'TTM',
										amount: 110458
									}
								]
							}
						]
					},
					{
						name: 'Marketing & Adv',
						items: [
							{
								name: 'Radio',
								values: [
									{
										dated: 'Radio',
										amount: 1150
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
										dated: 'TTM',
										amount: 51240
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
										dated: 'TTM',
										amount: 255841
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
										dated: 'TTM',
										amount: 258
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
										dated: 'TTM',
										amount: 5280
									}
								]
							}
						]
					},
					{
						name: 'Professional Fees',
						items: [
							{
								name: 'Cleaning',
								values: [
									{
										dated: 'TTM',
										amount: 1857
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
										dated: 'TTM',
										amount: 1289
									}
								]
							}
						]
					}
				]
			}
		]
	},
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
	},
	{
		title: 'Balance Sheet, 2Y ',
		company: 'Sample Outdoors Company',
		notes: [
			{
				about: 'Description',
				text: 'Most recent accounting/calendar year with comparative previous'
			}
		],
		categories: [
			{
				name: 'Assets',
				sign: 'plus',
				accounts: [
					{
						name: 'Current assets',
						items: [
							{
								name: 'Total',
								values: [
									{ dated: '2020', amount: 2336392807 },
									{ dated: '2019', amount: 2139066575 }
								]
							}
						]
					},
					{
						name: 'Operating assets',
						items: [
							{
								name: 'Total',
								values: [
									{ dated: '2020', amount: 1778012688 },
									{ dated: '2019', amount: 1484257572 }
								]
							}
						]
					},
					{
						name: 'Other assets',
						items: [
							{
								name: 'Total',
								items: [
									{ dated: '2020', amount: 238958303 },
									{ dated: '2019', amount: 181159029 }
								]
							}
						]
					}
				]
			},
			{
				name: 'Liabilities',
				sign: 'minus',
				accounts: [
					{
						name: 'Current Liabilities',
						items: [
							{
								name: 'Total',
								values: [
									{ dated: '2020', amount: 1144967294 },
									{ dated: '2019', amount: 1206574775 }
								]
							}
						]
					},
					{
						name: 'Long-term and other Liabilities',
						items: [
							{
								name: 'Total',
								values: [
									{ dated: '2020', amount: 457321919 },
									{ dated: '2019', amount: 548299231 }
								]
							}
						]
					}
				]
			},
			{
				name: 'Equity',
				sign: 'minus',
				accounts: [
					{
						name: 'Common Stock',
						items: [
							{
								name: 'Total',
								values: [
									{ dated: '2020', amount: 719183000 },
									{ dated: '2019', amount: 749178000 }
								]
							}
						]
					},
					{
						name: 'Other Capital',
						items: [
							{
								name: 'Total',
								values: [
									{ dated: '2020', amount: 69921200 },
									{ dated: '2019', amount: 183898457 }
								]
							}
						]
					},
					{
						name: 'Retained Earnings',
						items: [
							{
								name: 'Total',
								values: [
									{ dated: '2020', amount: 1961541522 },
									{ dated: '2019', amount: 1116128225 }
								]
							}
						]
					},
					{
						name: 'Currency translation',
						items: [
							{
								name: 'Total',
								values: [
									{ dated: '2020', amount: 428864 },
									{ dated: '2019', amount: 404488 }
								]
							}
						]
					},
					{
						name: 'Declared dividends',
						items: [
							{
								name: 'Total',
								values: [
									{ dated: '2020', amount: 0 },
									{ dated: '2019', amount: 0 }
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
  .insertMany(financials)
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
