// 1- Run this main.js :
// ==> why we have the error : Error: Cannot find module 'axios'
// because can find module in folder activity 1." MODULE_NOT_FOUND".


// 2- Check the package.json :   how many dependancies do you see ?
// there is one dependancies that I can see.

// 3- Run  : npm install		to install all dependancies

// 4 - Check now the node_modules contains the axios dependancy

// 5 - Run the program again :
// ==> check it work

const axios = require("axios");

let url = "http://www.omdbapi.com/?apikey=fab8d88e&s=jedi";

axios.get(url).then((response) => {
  console.log(response.data);
});
