const days_h2 = document.getElementById('days')
const hours_h2 = document.getElementById('hours');
const minutes_h2= document.getElementById('minutes');
const seconds_h2 = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 2022 00:00:00`);

function updateCountdownTime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24 );
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24 ;
    const minutes = Math.floor(diff / 1000 / 60 ) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    days_h2.innerHTML = days;
    hours_h2.innerHTML = hours < 10 ? '0' + hours : hours;
    minutes_h2.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    seconds_h2.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountdownTime, 1000)