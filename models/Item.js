const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
    age: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// ​
// const ItemSchema = new Schema({
//   firstName: {
//     type: String,
//     required: true
//   }, // Required during sign-up, POST
// ​
//   lastName: {
//     type: String,
//     required: true
//   }, // Required during sign-up, POST
// ​
//   email: {
//     type: String,
//     required: true
//   }, // Required during sign-up, POST
// ​
//   password: {
//     type: String,
//     required: true
//   }, // Required during sign-up, POST
// ​
//   age: {
//     type: String,
//     required: false
//   },
// ​
//   linkedinURL: {
//     type: String,
//     required: false
//   },
// ​
//   githubURL: {
//     type: String,
//     required: false
//   },
// ​
//   employment: {
//     type: String,
//     required: false
//   },
// ​
//   bio: {
//     type: String,
//     required: false
//   },
// ​
//   skills: {
//     type: String,
//     required: false
//   },
// ​
//   matches: [{ type: [ObjectId], ref: "item" }]
// ​
// });
// ​
// module.exports = Item = mongoose.model("item", ItemSchema)