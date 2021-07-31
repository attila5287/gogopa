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
	// number (pixels) or 'flex'
	barThickness: '11',

	datasets: [myData[0], myData[rand()]]
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

	useEffect(() => {
		const interval = setInterval(() => setData(genData()), 1000);

		return () => clearInterval(interval);
  }, [] );
  
	return (
		<div className='mini'>
			{state.currentFinancial ? (
				<Container fluid>
					<Row>
						<Col size='md-12'>
							<Animated animationIn='slideInRight' className='mb-2'>
								<Link
									to={'/financials/' + state.currentFinancial._id}
									className='btn btn-primary w-100 btn-sm'
								>
									<small className='text-lg fas fa-donate mx-1'>Report</small>
								</Link>
							</Animated>

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

					<Row>
						<Col size='md-12'>
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
													text: data.datasets[0].label
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
						</Col>
					</Row>

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
