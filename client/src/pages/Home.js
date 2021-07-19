import React from "react";
import Table from '../components/Table';
import { Col, Row, Container } from "../components/Grid";
// import PostsList from "../components/PostsList";

const Home = () => {
  return (
    
    <Container fluid>
      <div className='mini'>
        <p>
          <i className='fas fa-info-circle'></i>
          Edit table cells below</p>
        <Table />
      </div>    
    </Container>
  );
};

export default Home;
