import React from 'react';
import { Line } from '@iftek/react-chartjs-3';
const data = {
	labels: ['Q1', 'Q2', 'Q3', 'Q4'],
	datasets: [
		{
			label: 'Gross Sales',
			data: [3954888, 3111456, 3157123, 3541321],
			fill: false,
			backgroundColor: 'rgba(119, 205, 99, 0.9)',
			borderColor: 'rgba(119, 205, 99, 0.4)'
		},
		{
			label: 'Fixed Cost',
			data: [1519681, 1911658, 1155668, 1584441],
			fill: false,
			backgroundColor: 'rgba(219, 155, 59, 0.9)',
			borderColor: 'rgba(219, 155, 59, 0.4)'
		},
		{
			label: 'Operations Cost',
			data: [1123456, 1159658, 1159228, 1159228],
			fill: false,
			backgroundColor: 'rgba(229, 25, 99, 0.9)',
			borderColor: 'rgba(229, 25, 99, 0.4)'
		},
		{
			label: 'Profit/Loss',
			data: [
        1311751,
        40140,
        842227,
        797652,
      ],
			fill: true,
			backgroundColor: 'rgba(99, 125, 255, 0.77)',
			backgroundColor: 'rgba(99, 125, 255, 0.27)',
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
					size: 10
				}
			}
		}
	}
};

const LineChart = () => (
	<>
		<Line data={data} options={options} />
	</>
);

export default LineChart;
