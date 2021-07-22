import React from "react";
import Table from '../components/Table';
import Combined from '../components/Combined';
import BarChart from '../components/BarChart';
import LineChart from '../components/LineChart';
import Dynamic from '../components/Dynamic';
import DoughnutChart from '../components/DoughnutChart';
import { Col, Row, Container } from "../components/Grid";

const Home = () => {
  return (
		<Container fluid>
			<div className='mini'>
				<Table />
				<Dynamic />
				<LineChart />
				<BarChart />
			</div>
		</Container>
	);
};

export default Home;
