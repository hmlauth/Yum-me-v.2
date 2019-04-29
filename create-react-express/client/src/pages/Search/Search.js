import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import Header from "../../Components/Header";
import { SearchCard, ResultsCard } from "../../Components/Card";

class Search extends Component {
  
  // state
  // componentDidMount
  // api call
  // delete
  // handleInputChange
  //handleFormSubmit

  render() {
    return (
      <Container fluid>
        <Row>
            <Col size="md-6">
                <Header />
            </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <SearchCard>
            </SearchCard>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <ResultsCard>

            </ResultsCard>
          </Col>
        </Row>
      </Container>
    );
  }
  
}

export default Search;
