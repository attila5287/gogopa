import React from 'react';
import { Doughnut } from '@iftek/react-chartjs-3';

const data = {
	labels: ['Q1', 'Q2', 'Q3', 'Q4'],

	datasets: [
		{
			label: 'PnL/Qs',
			data: [1311751, 40140, 842227, 797652],
			backgroundColor: [
				'rgba(225, 122, 192, 0.50)',
        'rgba(54, 162, 235, 0.50)',
				'rgba(91,98,244,0.5)',
				'rgba(155, 206, 186, 0.50)',
			],
			borderColor: ['rgba(217,227,241,1)'],
			borderWidth: 4
		}
	]
};

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: false,
					fontSize: 10
				}
			}
		]
	},
	plugins: {
		legend: {
			labels: {
				// This more specific font property overrides the global property
				font: {
					size: 8
				}
			}
		}
	}
};

const DoughnutChart = () => (
	<>
		<div className='row col-8 offset-2'>
			<Doughnut data={data} />
		</div>
	</>
);

export default DoughnutChart;
