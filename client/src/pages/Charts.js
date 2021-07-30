import { Animated } from 'react-animated-css';
import React, { useEffect } from 'react';
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
					beginAtZero: true
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

	return (
		<>
			{state.currentFinancial ? (
				<Container fluid>
					<Row>
						<Col size='md-12'>
							<Animated animationIn='slideInRight'>
								<Link
									to={'/financials/' + state.currentFinancial._id}
									className='btn btn-primary w-100 btn-sm'
								>
									<small className='text-lg fas fa-donate mx-1'>Report</small>
								</Link>
							</Animated>
							<p className='text-right'>
								<i className='far fa-calendar mx-1'></i>
								<b>{'Created At: '}</b>
								{helpers.formatDate(state.currentFinancial.created)}
							</p>
						</Col>
					</Row>
					<Row>
						<Col size='md-12'>
							<h1 className='border-bottom mb-0'>
								<i className='far fa-file mx-1'></i>
								{state.currentFinancial.title}
							</h1>
							<h4 className='mb-0'>
								<i className='fas fa-users mx-1'></i>
								{state.currentFinancial.company}
							</h4>
							{state.currentFinancial.notes.map((n) => (
								<p className='mb-0'>
									<i className='fas fa-sticky-note mx-1'></i>
									<b>
										{n.about}
										{': '}
									</b>
									{n.text}
								</p>
							))}
						</Col>
					</Row>

					<Row>
            <Col size='md-12'>
              <Dynamic/> 
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
		</>
	);
};

export default Charts;
