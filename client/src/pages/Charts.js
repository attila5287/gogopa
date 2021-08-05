import { Animated } from 'react-animated-css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import Dynamic from '../components/Dynamic';
import Outline from '../components/Outline';
import helpers from '../utils/helpers';
import API from '../utils/API';
import { useStoreContext } from '../utils/GlobalState';
import { SET_CURRENT_FINANCIAL } from '../utils/actions';
import { Doughnut, Bar } from '@iftek/react-chartjs-3';


const rand = () => Math.floor(Math.random() * 3) + 1;


const myData =()=> [
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
	// number (pixels) or 'flex'
	barThickness: '11',

	datasets: [myData()[0], myData()[rand()]]
});

const options = {
	scales: {
		yAxes: [
			{
				ticks: {
					beginAtZero: false
				}
			}
		]
	}
};
const Charts = (props) => {
	const [state, dispatch] = useStoreContext();

	useEffect(() => {
		API.getFinancial(props.match.params.id)
			.then((res) =>
				dispatch({ type: SET_CURRENT_FINANCIAL, financial: res.data })
			)
			.catch((err) => console.log(err));
	}, []);
	const [data, setData] = useState(genData());

	// useEffect(() => {
	// 	const interval = setInterval(() => setData(genData()), 1000);

	// 	return () => clearInterval(interval);
  // }, [] );
  
	return (
		<div className='mini'>
			{state.currentFinancial ? (
				<Container fluid>
					<Row>
						<Col size='md-12'>
							<nav className='nav nav-pills nav-fill navbar-dark bg-dark border-0 px-1 py-1 shadow-lg roundedmb-5'>
								<Link
									to='/home'
									title='(create a new one or select from existing)'
									data-toggle='tooltip'
									className='nav-link rounded-2xl'
								>
									<i className='fas fa-file-invoice mx-1 fa-fw'></i>
									Financials
								</Link>
								<Link
									className='nav-link'
									data-toggle='tooltip'
									title='(generates a
									statement-style financial)'
									to={'/financials/' + state.currentFinancial._id}
								>
									<i className='fas fa-file-invoice-dollar mx-1 fa-fw'></i>
									Reports
								</Link>
								<Link
									to={'/charts/' + state.currentFinancial._id}
									className='nav-link active'
								>
									<i className='fas fa-chart-line mx-1'></i>
									Charts
								</Link>
							</nav>

							<div className='row'>
								<Animated animationIn='slideInLeft' className='col'>
									<ul className='w-100 bg-secondary list-group text-sm shadow-none'>
										<li className='list-group-item py-0'>
											<i className='far fa-calendar mx-1'></i>
											{'Created At: '}
											{helpers.formatDate(state.currentFinancial.created)}
										</li>
										<li className='list-group-item py-0'>
											<i className='far fa-file mx-1'></i>
											{state.currentFinancial.title}
										</li>
										<li className='list-group-item py-0'>
											<i className='far fa-user mx-1'></i>
											{state.currentFinancial.company}
										</li>
									</ul>
								</Animated>

								<Animated animationIn='slideInRight' className='col'>
									<ul className='w-100 bg-secondary list-group text-sm shadow-none'>
										{state.currentFinancial.notes.map((n, i) => (
											<>
												<li className='list-group-item' key={i}>
													<i className='far fa-sticky-note mx-1'></i>
													{n.about}
													{': '}
													{n.text}
												</li>
											</>
										))}
									</ul>
								</Animated>
							</div>
						</Col>
					</Row>
					{state.currentFinancial.categories.map((c, i) => (
						<>
							<Bar
								data={{
									labels: helpers.datesArray(c),
									datasets: [
										{
											label: c.name,
											data: helpers.groupByCategory(c),
											backgroundColor: helpers.genColors(i)
										},
										{
											type: 'line',
											label:
												state.currentFinancial?.title +
												' ' +
												helpers.datesArray(c).join(' ') +
												' Totals',
											backgroundColor: 'rgba(54, 162, 235, 0.8)',
											borderColor: 'rgba(54, 162, 235, 0.7)',
											pointRadius: 8,
											data: helpers.finalSum(state.currentFinancial?.categories)
										}
									]
								}}
								options={{
									plugins: {}
								}}
							/>
						</>
					))}
					<div className='row no-gutters'>
						{state.currentFinancial.categories.reverse().map((c, i) =>
							helpers.datesArray(c).map((d) => (
								<div className='col-6 p-0'>
									<Doughnut
										data={{
											labels: c?.accounts?.flatMap((a) => a.name),
											datasets: [
												{
													data: helpers.breakdownCategory(c, d),
													backgroundColor: Array.from(
														{ length: helpers.breakdownCategory(c, d).length },
														(v, i) => helpers.genColors(i)
													),
													borderWidth: 1
												}
											]
										}}
										options={{
											plugins: {
												title: {
													position: 'top',
													align: 'center',
													display: true,
                          text: c?.name + ' ' + d,
                          padding: {
                            top:0,
                            bottom:0,
                          },
												},
												legend: {
													position: 'left',
													display: true
												}
											}
										}}
									/>
								</div>
							))
						)}
					</div>

					<Row>
						<Col size='md-2'>
							<Link to='/'>
								<h6 className='fas fa-home'>← Back to Home</h6>
							</Link>
						</Col>
					</Row>
				</Container>
			) : (
				<div>loading...</div>
			)}
		</div>
	);
};

export default Charts;
