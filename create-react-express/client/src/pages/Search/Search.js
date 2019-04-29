import axios from "axios";
import cheerio from "cheerio";
import $ from "jquery";
import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import Header from "../../Components/Header";
import { SearchCard, ResultsCard, ScrapedCard } from "../../Components/Card";
import { Input, TextArea, FormBtn } from "../../Components/Form";
import { List } from "../../Components/List";


class Search extends Component {

  // state
  state = {
    recipes: [],
    searchTerm: ""
  };

  // componentDidMount
  componentDidMount() {
    console.log("Mounted");
  };

  // handleInputChange
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { searchTerm, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      searchTerm: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadRecipes();
  }

  loadRecipes = event => {
    console.log('searchterm', this.state.searchTerm)
    const corsURL = 'https://cors-anywhere.herokuapp.com/'
    const apiURL = 'https://www.food2fork.com/api/search?key=f4f40279aca7dd14a4df19d4902cae70&q='

    $.ajax({
      url: corsURL + apiURL + this.state.searchTerm,
      method: 'GET'
    }).then(JSONresponse => {
      var response = JSON.parse(JSONresponse);
      this.setState({
        recipes: response.recipes
      })
      console.log("Recipe State", this.state.recipes)
    }
    )
  }

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
              <form>
                <Input
                  type="text"
                  required="true"
                  id="recipeTitle"
                  name="searchBar"
                  placeholder="Keto Cupcakes"
                  onChange={this.handleInputChange}
                  value={this.state.searchTerm}
                />
                <FormBtn
                  disabled={!(this.state.searchTerm)}
                  onClick={this.handleFormSubmit}
                >
                  Find Recipes!
              </FormBtn>
              </form>
            </SearchCard>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            <ResultsCard>
              {this.state.recipes.length ? (
                this.state.recipes.map(recipe => (
                <List>
                   {recipe.title}
                  
                </List>
                )) 
              ) : (
                  <h4>No results to display</h4>
                )}
            </ResultsCard>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
