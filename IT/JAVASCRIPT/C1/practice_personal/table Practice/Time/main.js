function gettext(num) {
    let arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return arr[num]

}
function clock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    minutes = padZero(minutes);
    seconds = padZero(seconds);

    if (hours >12){
        hours = hours -12
        hours = padZero(hours)
    }else if(hours <10){
        hours = padZero(hours)
    }
    let time = String(hours) + '  :  ' + String(minutes) + '  :  ' + String(seconds)
    document.getElementById("clock").textContent = time;

    // let x = document.createElement('p');
    
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    
    let daily = String(day) + " - " + gettext(month) + " - " + String(year);
    document.getElementById("date").textContent = daily;

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }
}
setInterval(clock, 1000)