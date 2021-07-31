import { Animated } from 'react-animated-css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import Outline from '../components/Outline';
import helpers from '../utils/helpers';
import API from '../utils/API';
import { useStoreContext } from '../utils/GlobalState';
import { SET_CURRENT_FINANCIAL } from '../utils/actions';

const Financial = (props) => {
	const [state, dispatch] = useStoreContext();

	useEffect(() => {
		API.getFinancial(props.match.params.id)
			.then((res) =>
				dispatch({ type: SET_CURRENT_FINANCIAL, financial: res.data })
			)
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='mini'>
			{state.currentFinancial ? (
				<Container fluid>
					<Row>
						<Col size='md-12'>
							<Animated animationIn='slideInRight'>
								<Link
									to={'/charts/' + state.currentFinancial._id}
									className='btn btn-primary w-100 btn-sm'
								>
									<small className='text-lg fas fa-chart-pie mx-1'>
										Charts
									</small>
								</Link>
							</Animated>
							<Animated animationIn='slideInLeft'>
								<p className='text-right'>
									<i className='far fa-calendar mx-1'></i>
									<b>{'Created At: '}</b>
									{helpers.formatDate(state.currentFinancial.created)}
								</p>
							</Animated>
							<Animated animationIn='slideInRight'>
								<h1 className='text-center border-bottom mb-0'>
									<u>{state.currentFinancial.title}</u>
								</h1>
							</Animated>
							<Animated animationIn='slideInLeft'>
								<h4 className='text-center mb-0'>
									{' '}
									{state.currentFinancial.company}
								</h4>
							</Animated>
							{state.currentFinancial.notes.map((n) => (
								<p className='text-center mb-0'>
									<i className='far fa-sticky-note mx-1'></i>
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
						<Col size='md-10 md-offset-1'>
							<div className='table-responsive rounded-xl bg-light'>
								<table className='table table-sm table-light table-hover table-striped text-sm'>
									<thead className=''>
										<tr class='table-secondary table-inverse'>
											<th
												scope='column'
												className='py-0 text-center text-primary'
											></th>

											{state.currentFinancial?.categories[0]?.accounts[0]?.items[0]?.values?.map(
												(v) => (
													<th scope='column' className='py-0 text-center'>
														{v.dated}
													</th>
												)
											)}
										</tr>
									</thead>
									<tbody>
										{state.currentFinancial.categories.map((c) => (
											<>
												<tr className=''>
													<td>{c.name}</td>

													{c?.accounts
														? helpers
																.groupByCategory(c)
																.map((t) => (
																	<td className={helpers.styleAmount(c.sign)}>
																		{t}
																	</td>
																))
														: 0}
												</tr>
												{c.accounts.map((a) => (
													<>
														<tr>
															<td className='px-4'>{a.name}</td>
															<td className={helpers.styleAmount(c.sign)}>
																{'$ '}
																{helpers.formatAmount(
																	c.sign,
																	a.items
																		?.flatMap((i) => i.values)
																		?.flatMap((i) => i.amount).length
																		? a.items
																				?.flatMap((i) => i.values)
																				?.flatMap((v) => v.amount)
																				.reduce(
																					(accumulator, currentValue) =>
																						accumulator + currentValue
																				)
																		: 0
																)}
															</td>
														</tr>
														{a.items.map((i) => (
															<tr className=''>
																<td className='align-middle'>{i.name}</td>
																{i.values.map((v) => (
																	<td className='align-middle'>
																		{'$ '}
																		{helpers.formatAmount(c.sign, v.amount)}
																	</td>
																))}
															</tr>
														))}
													</>
												))}
											</>
										))}
									</tbody>
								</table>
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

export default Financial;
