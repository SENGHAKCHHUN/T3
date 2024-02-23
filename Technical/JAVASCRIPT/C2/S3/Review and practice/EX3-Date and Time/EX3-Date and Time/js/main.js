function showDate() {
  let today = new Date();
  // create 6 variables to store Hours, Minutes, Seconds, Date, Months and Year.
  let hours = today.getHours();
  let Minutes = today.getMinutes();
  let seconds = today.getSeconds();
  
  Minutes = zero(Minutes)
  seconds = zero(seconds)
  if (hours > 12){
    hours = hours - 12
    hours = zero(hours)
  }
  let H = document.getElementById('hour');
  H.textContent = hours
  let M = document.getElementById("minute");
  M.textContent = Minutes
  let S = document.getElementById('second');
  S.textContent = seconds

  // check this website : https://www.w3schools.com/js/js_date_methods.asp
  // note:
  // the value of month is return us as number of index for each month so you can use it with array months to get value
  // the hours is return us as 0 - 23 (make sure it show us in 12-hour format)
  let D = today.getDate();
  let Mo = today.getMonth();
  let Y = today.getFullYear();
  let sting = D+"-"+ months[Mo]+"-" + Y;
  // add text content to hourElement, minElement, secElement 
  
  // add text content to dateElement as format(date month year)
  // ex: 01 January 2024 
  let daily = document.getElementById('date').textContent = sting;

}
function zero(data){
  return (data < 10 ? '0' :'') + data
}
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const hourElement = document.querySelector("#hour");
const minElement = document.querySelector("#minute");
const secElement = document.querySelector("#second");
const dateElement = document.querySelector("#date");

setInterval(showDate, 1000);
