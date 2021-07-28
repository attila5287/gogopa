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
							<div>
								<h1>Content:</h1>
								<div>
									{state.currentFinancial.categories.map((c) => (
										<>
											<h1>
												<i className='far fa-caret-square-down mx-1'></i>
												{c.name}
											</h1>
											<div>
												{c.accounts.map((a) => (
													<>
														{' '}
														<h5 className='mx-3'>
															<i className='fas fa-caret-down mx-1'></i>
															{a.name}
														</h5>
														<div className='mx-5'>
															{a.items.map((i) => (
																<h6>
																	<i className='fas fa-caret-right mx-1'></i>
                                  { i.name } :
                                  { i.values.map(v=>(<i>{v.amount}</i>)) }
																</h6>
															))}
														</div>
													</>
												))}
											</div>
										</>
									))}
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col size='md-2'>
							<Link to='/'>
								← Back to
								<h1 className='fas fa-home'>Home</h1>
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
