import {Animated} from 'react-animated-css';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Col, Row, Container} from '../components/Grid';
import BackToHome from '../components/BackToHome';
import FinNotes from '../components/FinNotes';
import NavPills from '../components/NavPills';
import helpers from '../utils/helpers';
import API from '../utils/API';
import {useStoreContext} from '../utils/GlobalState';
import {SET_CURRENT_FINANCIAL} from '../utils/actions';
import {Doughnut, Bar} from '@iftek/react-chartjs-3';

const rand = () => Math.floor(Math.random() * 3) + 1;

const Charts = (props) => {
  const [state,
    dispatch] = useStoreContext();

  useEffect(() => {
    API
      .getFinancial(props.match.params.id)
      .then((res) => dispatch({type: SET_CURRENT_FINANCIAL, financial: res.data}))
      .catch((err) => console.log(err));
  }, []);

  return (
		<div className='mini'>
			<BackToHome />
			<NavPills />
			{state.currentFinancial ? (
				<Container fluid>
					<FinNotes />
					{state.currentFinancial.categories.map((c, i) => (
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
														{
															length: helpers.breakdownCategory(c, d).length
														},
														(v, i) => helpers.genColors(i)
													),
													borderColor: '#d9e3f1',
													borderWidth: 0
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
														top: 0,
														bottom: 0
													}
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
					<Link to='/'>
						<h6 className='text-right'>
							<i className='fas fa-home'></i>← Back to Home
						</h6>
					</Link>
				</Container>
			) : (
				<div>loading...</div>
			)}
		</div>
	);
};

export default Charts;
