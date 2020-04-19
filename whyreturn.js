/**
 * Turn off every section of code to see the difference and use of return
 * */

function getRandom() {
    var randomNum = Math.random();
    console.log(randomNum);
}

var array = [getRandom(), getRandom(), getRandom(), getRandom()]

console.log(array)

/************************************** */

function getRandom() {
    var randomNum = Math.random();
    console.log(randomNum)
    return randomNum;
}

var array = [getRandom(), getRandom(), getRandom(), getRandom()]

console.log(array)

/************************************** */

function getRandom() {
    var randomNum = Math.random();
    console.log(randomNum);
    return Math.random()
}

var array = [getRandom(), getRandom(), getRandom(), getRandom()]

console.log(array)

/************************************** */

function getRandom() {
    var randomNum = Math.random();
    console.log(randomNum);
    return;
}

var array = [getRandom(), getRandom(), getRandom(), getRandom()]

console.log(array)

/************************************** */

function getRandom() {
    var randomNum = Math.random();
    console.log(randomNum);
    return randomNum < 1;
}

var array = [getRandom(), getRandom(), getRandom(), getRandom()]

console.log(array)

/************************************** */

const getRandom = () => {
    let randomNum = Math.random();
    console.log(randomNum)
}

var array = [getRandom(), getRandom(), getRandom(), getRandom()]

console.log(array)

/************************************** */

const getRandom = () => Math.random();

var array = [getRandom(), getRandom(), getRandom(), getRandom()]

console.log(array)