import axios from "axios";
import cheerio from "cheerio";
import $ from "jquery";
import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import Header from "../../Components/Header";
import { SearchCard, ResultsCard, ScrapedCard } from "../../Components/Card";
import { Input, TextArea, FormBtn } from "../../Components/Form";
import { List, ListItem } from "../../Components/List";
import { SaveBtn, DeleteBtn } from "../../Components/Button"


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

  saveRecipe = x => {
    console.log("...saving recipe", x);
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
        <Col size="md-3">
        <ScrapedCard />
        </Col>
        <Col size="md-9">
        <Row>
          <Col size="lg-10 md-6 sm-12">
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
          <Col size="lg-10 md-6 sm-12">
            <ResultsCard>
              {this.state.recipes.length ? (
                <List>
                  {this.state.recipes.map(recipe => (
                    <ListItem
                      key={recipe.recipe_id}
                      img={recipe.image_url}
                      link={recipe.source_url}
                      title={recipe.title}>
                      <SaveBtn onClick={ () => this.saveRecipe(recipe.recipe_id)}/>
                    </ListItem>
                  ))}
                </List>
              ) : (
                  <h4>No results to display</h4>
                )}
            </ResultsCard>
          </Col>
        </Row>
        </Col>
      </Row>
        
      </Container>
    );
  }
}

export default Search;
