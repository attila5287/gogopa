import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Outline from '../components/Outline';
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import {
	SET_CURRENT_FINANCIAL,
} from '../utils/actions';

const Financial = props => {
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getFinancial(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_FINANCIAL, financial: res.data }))
      .catch(err => console.log(err));
  }, []);

  return (
		<>
			{state.currentFinancial ? (
				<Container fluid>
					<Row>
						<Col size='md-12'>
							<h1>
								{' '}
								<i className='far fa-file'>{state.currentFinancial.title}</i>
							</h1>
							<h6>
								{' '}
								<i className='far fa-user mx-1'></i>{' '}
								{state.currentFinancial.company}
							</h6>
							<h6>
								{' '}
								<i className='far fa-calendar'></i>{' '}
								{state.currentFinancial.created}
							</h6>
						</Col>
					</Row>
					<Row>
						<Col size='md-10 md-offset-1'>
							<div className='table-responsive shadow rounded-xl'>
								<table className='table table-sm'>
									<thead className='table-dark text-light py-5'>
										<tr>
											<td className='text-center text-primary align-bottom'>
												{state.currentFinancial.title}
											</td>
											{state.currentFinancial.categories[0]?.accounts[0]?.items[0]?.values?.map(
												(v, i) => (
													<td></td>
												)
											)}
										</tr>
									</thead>
									<thead className='table-dark text-light py-5'>
										<tr>
											<td className='text-center text-primary align-top'>
												{state.currentFinancial.company}
											</td>
											{state.currentFinancial.categories[0]?.accounts[0]?.items[0]?.values?.map(
												(v) => (
													<td>{v.dated}</td>
												)
											)}
										</tr>
									</thead>
									<tbody>
										{state.currentFinancial.categories.map((c) => (
											<>
												<tr className='table-primary'>
													<td className=''>
														<i className='fas fa-caret-down'></i> 
                            <b> { c.name } </b>
													</td>
												</tr>
												{c.accounts.map((a) => (
													<>
														<tr>
															<td className='align-middle px-3'>
																<i className='fas fa-angle-down'></i>
																<i> {a.name}</i>
															</td>
														</tr>
														{a.items.map((i) => (
															<tr>
                                <td className='align-middle px-5'>
                                  <b>
                                  { i.name }
                                </b>
                                </td>
																{i.values.map((v) => (
																	<td className='align-middle'>
																		<i>{parseInt(v.amount).toLocaleString()}</i>
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
		</>
	);
};

export default Financial;
