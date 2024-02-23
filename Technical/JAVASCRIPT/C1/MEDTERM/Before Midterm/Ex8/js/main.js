function showDate() {
  let go = new Date();
  let hour = go.getHours();
  let minute = go.getMinutes();
  let second = go.getSeconds();
  hour = zero(hour)
  minute = get(minute);
  second = get(second)
  hourElement.textContent = hour;
  minElement.textContent = minute;
  secElement.textContent = second;
  let day = go.getDate();
  let month = go.getMonth();
  let year = go.getFullYear();
  dateElement.textContent = day +'|'+ months[month] + '|' + year
  function get(time){
    if (time < 10){
      return '0' + time
    }
    return time
  }
  function zero(time){
    if (time > 12){
      time = time -12;
      return  '0' + time
    }
  }
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