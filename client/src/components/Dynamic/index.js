import React, { useEffect, useState } from 'react';
import {  Doughnut, Bar } from '@iftek/react-chartjs-3';

const rand = () => Math.floor(Math.random() *3)+1;

const myData = [
	{
		type: 'line',
		label: 'Profit/Loss',
		data: [1311751, 40140, 842227, 797652],
		backgroundColor: ['rgba(255, 99, 132, 0.2)'],
		borderColor: ['rgba(255, 99, 132, 1)'],
		borderWidth: 1
	},
	{
		label: 'Gross Sales',
		data: [3954888, 3111456, 3157123, 3541321],
		backgroundColor: ['rgba(54, 162, 235, 0.2)'],
		borderColor: ['rgba(54, 162, 235, 1)'],
		borderWidth: 1
	},
	{
		label: 'Fixed Cost',
		data: [1519681, 1911658, 1155668, 1584441],
		backgroundColor: ['rgba(255, 206, 86, 0.2)'],
		borderColor: ['rgba(255, 206, 86, 1)'],
		borderWidth: 1
	},
	{
		label: 'Operations Cost',
		data: [1123456, 1159658, 1159228, 1159228],
		backgroundColor: ['rgba(75, 192, 192, 0.2)'],
		borderColor: ['rgba(75, 192, 192, 1)'],
		borderWidth: 1
	}
];

const genData = () => ({
	labels: ['Q1', 'Q2', 'Q3', 'Q4'],

  datasets: [
    myData[ 0],
    myData[ rand() ]
  ]
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
			<div className='row'>
				<div className='col-6'>
					<Doughnut
						data={{
							title: data.datasets[1].label,
							labels: ['Q1', 'Q2', 'Q3', 'Q4'],

							datasets: [
								{
									data: data.datasets[1].data,
									backgroundColor: [
										'rgba(225, 122, 192, 0.50)',
										'rgba(54, 162, 235, 0.50)',
										'rgba(91,98,244,0.5)',
										'rgba(155, 206, 186, 0.50)'
									],
									borderColor: ['rgba(217,227,241,1)'],
									borderWidth: 4
								}
							]
						}}
						options={{
							plugins: {
								title: {
									position: 'top',
									align: 'center',
									display: true,
									text: data.datasets[1].label
								},
								legend: {
									position: 'bottom',
									display: true
								}
							}
						}}
					/>
				</div>
				<div className='col-6'>
					<Doughnut
						data={{
							title: data.datasets[0].label,
							labels: ['Q1', 'Q2', 'Q3', 'Q4'],

							datasets: [
								{
									data: data.datasets[0].data,
									backgroundColor: [
										'rgba(225, 122, 192, 0.50)',
										'rgba(54, 162, 235, 0.50)',
										'rgba(91,98,244,0.5)',
										'rgba(155, 206, 186, 0.50)'
									],
									borderColor: ['rgba(217,227,241,1)'],
									borderWidth: 4
								}
							]
						}}
						options={{
							plugins: {
								title: {
									position: 'top',
									align: 'center',
									display: true,
									text: 'vs ' + data.datasets[0].label
								},
								legend: {
									position: 'bottom',
									display: true
								}
							}
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default Dynamic;
