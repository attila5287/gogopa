import React, { useEffect, useState } from 'react';
import { Bar } from '@iftek/react-chartjs-3';

const rand = () => Math.floor(Math.random() *4);

const myData = [
	{
		label: 'Profit/Loss',
		data: [1311751, 40140, 842227, 797652],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
		],
		borderColor: [
			'rgba(255, 99, 132, 1)',
		],
		borderWidth: 1
	},
	{
		label: 'Gross Sales',
		data: [3954888, 3111456, 3157123, 3541321],
		backgroundColor: [
			'rgba(54, 162, 235, 0.2)',
		],
		borderColor: [
			'rgba(54, 162, 235, 1)',
		],
		borderWidth: 1
	},
	{
		label: 'Fixed Cost',
		data: [1519681, 1911658, 1155668, 1584441],
		backgroundColor: [
			'rgba(255, 206, 86, 0.2)',
		],
		borderColor: [
			'rgba(255, 206, 86, 1)',
		],
		borderWidth: 1
	},
	{
		label: 'Operations Cost',
		data: [1123456, 1159658, 1159228, 1159228],
		backgroundColor: [
			'rgba(75, 192, 192, 0.2)'
		],
		borderColor: [
			'rgba(75, 192, 192, 1)'
		],
		borderWidth: 1
	}
];

const genData = () => ({
	labels: ['Q1', 'Q2', 'Q3', 'Q4'],

	datasets: [myData[rand()]]
});

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: true
				}
			}
		]
	}
};

const Dynamic = () => {
	const [data, setData] = useState(genData());

	useEffect(() => {
		const interval = setInterval(() => setData(genData()), 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<Bar data={data} options={options} />
		</>
	);
};

export default Dynamic;
