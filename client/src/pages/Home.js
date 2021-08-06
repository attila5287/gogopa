import { Animated } from 'react-animated-css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Col, Row, Container } from '../components/Grid';
import CreateFinancial from '../components/CreateFinancial';
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
					</Col>
				</Row>
        <FinancialsList />
        <CreateFinancial />
        
			</div>
		</Container>
	);
};

export default Home;
