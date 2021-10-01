import BackToHome from '../components/BackToHome';
import { Animated } from 'react-animated-css';
import React, { useEffect } from 'react';
import { Col, Row, Container } from '../components/Grid';
import CreateFinancial from '../components/CreateFinancial';
import NavPills from '../components/NavPills';
import helpers from '../utils/helpers';
import API from '../utils/API';
import { useStoreContext } from '../utils/GlobalState';
import { SET_CURRENT_FINANCIAL } from '../utils/actions';


const FinEdit = (props) => {
	const [state, dispatch] = useStoreContext();

	useEffect(() => {
		API.getFinancial(props.match.params.id)
			.then((res) =>
				dispatch({ type: SET_CURRENT_FINANCIAL, financial: res.data })
			)
			.catch((err) => console.log(err));
	}, []);

  const  handleChange= (e) => {
		console.log('--------------');
		console.log(`val:`, e.target.value);
		console.log(`fin:`, e.target.dataset['fin']);
		console.log(`cat:`, e.target.dataset['cat']);
		console.log(`acct:`, e.target.dataset['acct']);
		console.log(`item:`, e.target.dataset['item']);
		console.log(`date:`, e.target.dataset['date']);
		console.log('--------------');
  };
  
	return (
		<div className='mini'>
			<BackToHome />
			{state.currentFinancial ? (
				<Container fluid>
					<Row>
						<Col size='xs-8 xs-offset-2'>
							<NavPills />
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
								<table className='table table-sm table-bordered'>
									<thead>
										<tr>
											<th
												scope='column'
												className='text-center text-primary'
											></th>

											{state.currentFinancial?.categories[0]?.accounts[0]?.items[0]?.values?.map(
												(v, i) => (
													<th
														key={'th' + i}
														scope='column'
														className='text-center'
													>
														{v.dated}
													</th>
												)
											)}
										</tr>
									</thead>
									<tbody>
										{state.currentFinancial.categories.map((c, i) => (
											<>
												<tr key={'trc' + i} className=''>
													<td className='align-middle'>
														<input
															onChange={() => console.log('on change')}
															type='text'
															name=''
															defaultValue={c.name}
															className='form-control form-control-sm py-0 shadow-none bg-transparent border-0'
														/>
													</td>

													{c?.accounts
														? helpers
																.groupByCategory(c)
																.map((t) => (
																	<td
																		className={
																			'align-middle text-sm ' +
																			helpers.styleAmount(c.sign)
																		}
																	>
																		{helpers.formatAmount(c.sign, t)}
																	</td>
																))
														: 0}
												</tr>
												{c.accounts.map((a, ia) => (
													<>
														<tr key={'trc' + i + 'tra' + ia}>
															<td className='align-middle px-4'>
																<input
																	onChange={() => console.log('on change')}
																	type='text'
																	name=''
																	defaultValue={a.name}
																	className='form-control form-control-sm py-0 shadow-none bg-transparent border-0'
																/>
															</td>
															{helpers.groupByAccount(a).map((a) => (
																<td
																	className={
																		'text-sm align-middle ' +
																		helpers.styleAmount(c.sign)
																	}
																>
																	{helpers.formatAmount(c.sign, a)}
																</td>
															))}
														</tr>
														{a.items.map((i, ii) => (
															<tr
																className=''
																key={'trc' + i + 'tra' + ia + 'tri' + ii}
															>
																<td className='px-5 align-middle'>
																	<input
																		onChange={() =>
																			console.log(
																				'on change ' +
																					state.currentFinancial._id
																			)
																		}
																		type='text'
																		name=''
																		defaultValue={i.name}
																		className='form-control form-control-sm py-0 shadow-none bg-transparent border-0'
																	/>
																</td>
																{i.values.map((v) => (
																	<td className='text-sm align-middle'>
                                    <div className='shadow-none border-0 bg-transparent input-group align-items-center mb-3 py-0'>
                                      
																			<div className='input-group-prepend p-0'>
																				<span className='input-group-text text-sm py-0 px-2'>
																					<i
																						className={helpers.currencyIcons(
																							state.currentFinancial.currency
																						)}
																					></i>
																				</span>
																			</div>
																			<input
																				onChange={(e) => handleChange(e)}
																				type='number'
																				data-fin={state.currentFinancial._id}
																				data-cat={c.name}
																				data-acct={a.name}
																				data-item={i.name}
																				data-date={v.dated}
                                        name={ v.dated + i.name }
																				defaultValue={v.amount}
																				className='form-control form-control-sm'
																			/>
																		</div>
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
					<CreateFinancial />
				</Container>
			) : (
				<div>loading...</div>
			)}
		</div>
	);
};

export default FinEdit;
