import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import React, { useEffect } from 'react';
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
							<nav className='nav nav-pills nav-fill navbar-dark bg-dark border-0 px-1 py-1 shadow-lg rounded mb-2'>
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
									className='nav-link active'
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
									className='nav-link'
								>
									<i className='fas fa-chart-line mx-1'></i>
									Charts
								</Link>
							</nav>

							<Animated animationIn='slideInLeft'>
								<div className='text-sm  mb-0'>
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
							<Animated animationInDelay={0} animationIn='zoomIn'>
								<h5 className='text-dark text-center mb-0 mx-5'>
									<b>{state.currentFinancial.title}</b>
								</h5>
								<hr className='bg-primary my-0 mx-5 pt-0 pb-1 rounded-lg' />
								<p className='text-sm text-center mb-1'>
									{state.currentFinancial.company}{' '}
								</p>
							</Animated>
						</Col>
					</Row>
					<Row>
						<Col size='md-10 md-offset-1' className='text-center'>
							<div className='table-responsive rounded-xl'>
								<table className='table table-sm table-light table-hover table-striped text-sm'>
									<thead>
										<tr>
											<th
												scope='column'
												className='text-center text-primary'
											></th>

											{state.currentFinancial?.categories[0]?.accounts[0]?.items[0]?.values?.map(
												(v) => (
													<th scope='column' className='text-center'>
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
															{helpers.groupByAccount(c.sign, a).map((a) => (
																<td className={helpers.styleAmount(c.sign)}>
																	{'$ '}
																	{a}
																</td>
															))}
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
