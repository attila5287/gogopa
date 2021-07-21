import React from "react";
import Table from '../components/Table';
// import Chart from '../components/Chart';
import Combined from '../components/Combined';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import Dynamic from '../components/Dynamic';
import DoughnutChart from '../components/DoughnutChart';
import { Col, Row, Container } from "../components/Grid";
// import PostsList from "../components/PostsList";

const Home = () => {
  return (
		<Container fluid>
			<div className='mini'>
				<Table />
				<Dynamic />
				<LineChart />
				<BarChart />
				<DoughnutChart />
				<Combined />
			</div>
		</Container>
	);
};

export default Home;
