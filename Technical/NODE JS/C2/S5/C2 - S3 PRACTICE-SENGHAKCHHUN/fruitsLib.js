const FRUIT_FILE = "fruits.json";

// ---------- DEPENDANCIES ----------------------------------------------------------

/**
 * TODO
 * Import the library fs to be able to read/write files
 */
const fs = require('fs');
const { json } = require('stream/consumers');
// ---------- VARIABLES ----------------------------------------------------------



/**
 * TODO : manage a list of fruits
 *
 * Each fruit is an OBJECT composed of:
 * - the name of the fruit  (string)
 * - the color of the fruit  (string)
 * - the price of the fruit  (integer)
 */


let fruits = [];

// ---------- FUNCTIONS ----------------------------------------------------------

/**
 * Add a new fruit
 * @param fruit name
 * @param fruit color
 * @param fruit price
 */
function addFruit(fruitName, fruitColor, fruitPrice) {
  // TODO : complete this function
  let fruit = {};
  fruit.name = fruitName;
  fruit.fruitColor = fruitColor;
  fruit.fruitPrice = fruitPrice;
  fruits.push(fruit);
  console.log("fruit added:  " + fruitName);
}

function getColorOf(fruitName) {
  // TODO : complete this function
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].name == fruitName) {
      return fruits[i].fruitColor;
    }
  }
  return null;
}

function getPriceOf(fruitName) {
  // TODO : complete this function
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].name == fruitName) {
      return fruits[i].fruitPrice;
    }
  }
  return null;
}

function listFruits() {
  let toDisplay = "Here are the fruits:\n";
  // TODO : complete this function
  console.log(toDisplay);
  fruits.forEach(element => {
    console.log(element.name)
  }
  )
}
function save() {
  // TODO : complete this function to save list of fruit to file
  fs.writeFile(FRUIT_FILE, JSON.stringify(fruits), err => {
    if (err) {
      console.log(err)
    }
  })
}

function load() {
  // TODO : complete this function to get list of fruit from file
  fs.readFile(FRUIT_FILE, 'utf-8', (err, jsonString) => {
    console.log(jsonString);
  })
}

module.exports = { addFruit, getColorOf, getPriceOf, listFruits, save, load, fruits }