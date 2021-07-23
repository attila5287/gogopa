import React from "react";
import ProfitLoss from '../components/ProfitLoss';
import Table from '../components/Table';
import Dynamic from '../components/Dynamic';
import { Container } from "../components/Grid";

const Home = () => {
  return (
		<Container fluid>
			<div className='mini'>
				<ProfitLoss />
				<Table />
				<Dynamic />
			</div>
		</Container>
	);
};

export default Home;
