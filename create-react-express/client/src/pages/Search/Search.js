import axios from "axios";
import cheerio from "cheerio";
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


class Search extends Component {

  // state
  state = {
    searchTerm: ""
  }

  // componentDidMount
  componentDidMount() {
    this.loadRecipes()
  }

  loadRecipes = () => {

    // =============================================================
    const corsURL = "https://cors-anywhere.herokuapp.com/";
    // Make a request via axios to grab the HTML body from the site
    axios.get(corsURL + "https://www.tasteofhome.com/collection/our-100-highest-rated-recipes-ever/").then(html => {

      const $ = cheerio.load(html.data);

      var scrapedRecipes = [];
      // console.log(scrapedRecipes);

      $(".listicle-page").each((i, e) => {

        var recipe = {};
        recipe.id = $(e).find(".listicle-page__count-current").text();
        recipe.title = $(e).find('h4 a').text();
        recipe.summary = $(e).find('.listicle-page__content').text();
        recipe.link = $(e).find('h4 a').attr('href');
        recipe.img = $(e).find('.image-wrapper a img').attr('src');

        // console.log(recipe);
        scrapedRecipes.push(recipe);
        console.log('recipe', recipe);
      });

    }).catch(err => console.log(err));
    // =============================================================

  }

  // handleInputChange
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { searchTerm, value} = event.target;

    // Set the state for the appropriate input field
    this.setState({
      searchTerm: value
    });
  };
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

            </ResultsCard>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default Search;
