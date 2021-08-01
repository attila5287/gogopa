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
						<Col size='xs-8 xs-offset-2'>
							<Animated
								animationIn='slideInRight'
								className='btn btn-group w-100 my-0'
							>
								<Link to='/' className='btn btn-outline-info w-100 rounded-2xl'>
									<span className='d-flex flex-row align-items-center'>
										<i className='text-xl far fa-list-alt mx-1'></i>
										Financials
									</span>
								</Link>
								<div className='btn btn-outline-dark border-0  w-100 disabled'>
									<i className='text-xl far fa-file mx-1'></i>
									Reports
								</div>
								<Link
									to={'/charts/' + state.currentFinancial._id}
									className='btn btn-outline-success w-100 rounded-2xl'
								>
									<i className='text-xl fas fa-chart-line mx-1'></i>
									Charts
								</Link>
							</Animated>

							<Animated animationIn='slideInLeft'>
								<div className=' mb-0'>
									<i className='far fa-calendar fa-fw mx-1'></i>
									<b>{'Created At: '}</b>
									{helpers.formatDate(state.currentFinancial.created)}

									{state.currentFinancial.notes.map((n, i) => (
										<>
											<span>
												<i className='far fa-sticky-note fa-fw mx-1'></i>
												<b>
													{n.about}
													{' : '}
												</b>
											</span>
											<i className='mb-0'>{n.text}</i>
										</>
									))}
								</div>
							</Animated>
							<hr/>
							<Animated animationInDelay={2000} animationIn='zoomIn'>
								<h5 className='text-dark text-center mb-0 border-bottom border-dark mx-5'>
									<b>{state.currentFinancial.title}</b>
								</h5>
								<p className='text-sm text-center mb-1'>
                  <b>
									{state.currentFinancial.company}
                  </b>
								</p>
							</Animated>
						</Col>
					</Row>
					<Row>
						<Col size='md-10 md-offset-1' className="text-center">
							<div className='table-responsive rounded-xl'>
								<table className='table table-sm table-light table-hover table-striped table-borderless text-sm'>
									<thead>
										<tr>
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
																<td className='px-5 align-middle'>{i.name}</td>
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
				</Container>
			) : (
				<div>loading...</div>
			)}
		</div>
	);
};

export default Financial;
