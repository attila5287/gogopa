import React from "react";
import Table from '../components/Table';
// import Chart from '../components/Chart';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import { Col, Row, Container } from "../components/Grid";
// import PostsList from "../components/PostsList";

const Home = () => {
  return (
		<Container fluid>
			<div className='mini'>
				<Table />
				<LineChart />
				<BarChart />
			</div>
		</Container>
	);
};

export default Home;
