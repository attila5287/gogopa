import React from "react";
import Table from '../components/Table';
import Dynamic from '../components/Dynamic';
import { Container } from "../components/Grid";
import PostsList from "../components/PostsList";
import FinancialsList from '../components/FinancialsList';

const Home = () => {
  return (
		<Container fluid>
			<div className='mini'>
				<FinancialsList />
				<Table />
				<Dynamic />
			</div>
		</Container>
	);
};

export default Home;
