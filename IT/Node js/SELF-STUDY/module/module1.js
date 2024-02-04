let message = () => {
    console.log('Module 1 Message')
}
let alertMessage = () => console.log("Alert message")
const PI = 3.14;

// module.exports.message = message;
// module.exports.PI = PI;

module.exports = {message, PI, alertMessage}