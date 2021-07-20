import React from "react";
import Chart from '../components/Chart';
import Table from '../components/Table';
import { Col, Row, Container } from "../components/Grid";
// import PostsList from "../components/PostsList";

const Home = () => {
  return (
		<Container fluid>
			<div className='mini'>
				<Chart />
				<Table />
			</div>
		</Container>
	);
};

export default Home;
