export default function accounts() {
  return [
		{
			icon: 'fas fa-money-bill-wave',
			style: 'success',
			category: 'income',
			accounts: [
				'Service Income',
				'Sales Income',
				'Interest Income',
				'Gains',
				'Fees Charged',
				'Commissions Earned',
				'Rental Income'
			]
		},
		{
			icon: 'fas fa-money-check-alt',
			style: 'danger',
			category: 'expenditure',
			accounts: [
				'Cost of Goods Sold',
				'Taxes',
				'Marketing & Adv',
				'Selling, General & Adm',
				'Salaries, Benefits & Wages',
				'Interest Expense',
				'Insurance',
				'Professional Fees',
				'Telecommunication'
			]
		}
	];
}
