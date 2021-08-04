import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Col, Row, Container } from '../components/Grid';
import Table from '../components/Table';
import Dynamic from '../components/Dynamic';
import PostsList from '../components/PostsList';
import FinancialsList from '../components/FinancialsList';
import { useStoreContext } from '../utils/GlobalState';
import { SET_CURRENT_FINANCIAL } from '../utils/actions';
import helpers from '../utils/helpers';


const Home = () => {
	const [state, dispatch] = useStoreContext();


	return (
		<Container fluid>
			<div className='mini'>
				<Row>
					<Col size='sm-12'>
						<nav className='nav nav-pills nav-fill navbar-dark bg-dark border-0 px-1 py-1 shadow-lg rounded mb-2'>
							<Link
								to='/home'
								title='(create a new one or select from existing)'
								data-toggle='tooltip'
								className='nav-link active disabled rounded-2xl'
							>
								<i className='fas fa-file-invoice mx-1 fa-fw'></i>
								Financials
							</Link>
							<a
								className='nav-item text-secondary'
								data-toggle='tooltip'
								title='select a financial from below menu'
							>
								<i className='fas fa-file-invoice-dollar mx-1 fa-fw'></i>Reports
							</a>
							<a
								to={'/charts/' + state.currentFinancial._id}
								className='nav-item text-secondary'
								title='select a financial from below menu'
							>
								<i className='fas fa-chart-line mx-1'></i>
								Charts
							</a>
						</nav>
					</Col>
				</Row>
				<FinancialsList />
			</div>
		</Container>
	);
};

export default Home;
