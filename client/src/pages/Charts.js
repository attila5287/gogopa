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
