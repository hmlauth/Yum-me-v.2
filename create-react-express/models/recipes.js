const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  }
  // img: { 
  //   type: String, 
  //   required: true 
  // },
  // link: {
  //   type: String,
  //   required: true,
  // },
  // social_rank: {
  //   type: String,
  //   required: true
  // },
  // publisher: String,
  // dateSaved: { 
  //   type: Date, 
  //   default: Date.now 
  // }
});

const Recipe = mongoose.model("recipe", recipeSchema);

module.exports = Recipe;