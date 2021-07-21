import React from 'react';
import { Bar } from 'react-chartjs-3';
const data = {
	labels: ['Q1', 'Q2', 'Q3', 'Q4'],
	datasets: [
		{
			label: 'Profit/Loss',
			data: [1311751, 40140, 842227, 797652],
			backgroundColor: 'rgba(99, 125, 255, 0.47)',
			borderColor: 'rgba(99, 125, 255, 0.27)'
		}
	]
};

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: false,
					fontSize: 12
				}
			}
		]
	}
};

const BarChart = () => (
	<>
		<Bar data={data} options={options} />
	</>
);

export default BarChart;
