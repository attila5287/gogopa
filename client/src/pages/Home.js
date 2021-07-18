import React from "react";
import Table from '../components/Table';
import { Col, Row, Container } from "../components/Grid";
// import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Table />
        </Col>
        <Col size="md-6 sm-12">
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
