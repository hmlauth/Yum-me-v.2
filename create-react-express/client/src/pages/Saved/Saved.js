import axios from "axios";
import $ from "jquery";
import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../Components/Grid";
import Header from "../../Components/Header";
import {ResultsCard} from "../../Components/Card";
// import { Input, TextArea, FormBtn } from "../../Components/Form";
import { List, ListItem } from "../../Components/List";
import { ViewBtn, DeleteBtn } from "../../Components/Button"


class Saved extends Component {

  // state
  state = {
    recipes: [],
    title: "",
    // img: "",
    // link: "",
    // publisher: "",
    // social_rank: ""
  };

  // componentDidMount
  componentDidMount() {
    console.log("Mounted");
    this.loadSavedRecipes();
  };

  loadSavedRecipes = () => {
    console.log("loading saved recipes")
    API.getSavedRecipes()
    .then(res =>
      this.setState({ recipes: res.data, title: "" })
    )
    .catch(err => console.log("ERR", err));
  }

  deleteRecipe = recipeTitle => {
  
    console.log("...deleting recipe", recipeTitle);

      API.deleteRecipe({
        title: recipeTitle
      })
        .then(res => this.loadSavedRecipes())
        .catch(err => console.log(err));
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
        <Col size="md-9">
        <Row>
          <Col size="lg-10 md-6 sm-12">
            <ResultsCard>
              {this.state.recipes.length ? (
                <List>
                  {this.state.recipes.map(recipe => (
                    <ListItem>
                      <DeleteBtn 
                      onClick={this.deleteRecipe}/>
                      <ViewBtn link={recipe.source_url} />
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

export default Saved;
