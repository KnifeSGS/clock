'use strict';

const calculateTime = () => {
    const dateNow = new Date();
    const hour = dateNow.getHours();
    const min = dateNow.getMinutes();
    const sec = dateNow.getSeconds();
    const hourNow = dualDigitNumbers(hour);
    const minNow = dualDigitNumbers(min);
    const secNow = dualDigitNumbers(sec);
    updateTime();
    displayTime(hourNow, minNow, secNow);
};

const dualDigitNumbers = (digit) => {
    const dualDigit = digit < 10 ? `0${digit}` : digit
    return dualDigit;
}

const updateTime = () => {
    let t = setTimeout(function(){ calculateTime() }, 1000);
};

const displayTime = (hourNow, minNow, secNow) => {
    document.querySelector('.clock').textContent = `${hourNow}:${minNow}:${secNow}`;
}
  
calculateTime();