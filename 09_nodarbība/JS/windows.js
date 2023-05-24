// https://www.javascripttutorial.net/javascript-bom/

var counter = 1;
var showCounter = () => console.log(counter);

//let counter = 1;
//let showCounter = () => console.log(counter);

console.log(counter);
showCounter();

console.log(window.counter);
window.showCounter();

console.log("window.innerWidth: " + window.innerWidth);
console.log(
  "document.documentElement.clientWidth: " +
    document.documentElement.clientWidth
);
console.log("document.body.clientWidth: " + document.body.clientWidth);
const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
console.log(`window.outerWidth: ${window.outerWidth}`);

const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

let features = "height=600,width=800",
  //url = 'https://www.javascripttutorial.net/javascript-bom/javascript-window/';
  url = "http://127.0.0.1:5500";

//setTimeout(() => {
//window.open('https://www.javascripttutorial.net', 'about')
//window.open('http://127.0.0.1:5500', 'about')
//let jsWindow = window.open(url, 'about', features);
//}, 20000);

/*
setTimeout(() => {
    jsWindow.resizeTo(600, 300);
}, 3000);
*/
/*
setTimeout(() => {
    jsWindow.close();
}, 5000);
*/

/*
setTimeout(() => {
    alert('15 seconds has been passed!')
}, 15000);
*/

/*
let result = confirm('Are you sure you want to delete?');
let message = result ? 'You clicked the OK button' :
    'You clicked the Cancel button';
alert(message);
*/

/*
let lang = prompt('What is your favorite programming language?');
let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
    `It's ${lang}`;
alert(feedback);
*/

var timeoutID_1;
var timeoutID_2;

function showAlert() {
  timeoutID_1 = setTimeout(alert, 3000, "setTimeout Demo 1!");
  timeoutID_2 = setTimeout(alert, 5000, "setTimeout Demo 2!");
}

function cancelAlert_1() {
  console.log(timeoutID_1);
  console.log(clearTimeout(timeoutID_1));
  //console.log(timeoutID);
  //console.log(clearTimeout(timeoutID));
}

function cancelAlert_2() {
  console.log(timeoutID_2);
  console.log(clearTimeout(timeoutID_2));
}

var intervalID_1;
//intervalID_1 = setInterval(console.log, 1000,'Viena sekunde no mūsu dzīves ir pagājusi ...');
console.log(intervalID_1);

let intervalID;

function toggleColor() {
  let e = document.getElementById("flashtext");
  console.log(e);
  console.log(e.style);
  console.log(e.style.color);
  console.log(e.style.color == "red");
  console.log(e.style.color == "red" ? "blue" : "red");
  e.style.color = e.style.color == "red" ? "blue" : "red";
  console.log(e.style.color);
  console.log("\n");
}

function stop() {
  clearInterval(intervalID);
}

function start() {
  intervalID = setInterval(toggleColor, 1000);
}

urlParamsString = "?q=v%c4%81rds&s=0&g=5&r=1100"; //location.search;
urlParams = new URLSearchParams(urlParamsString);

for (const [key, value] of urlParams) {
  console.log(`${key}:${value}`);
}

for (const key of urlParams.keys()) {
  console.log(key);
}

for (const value of urlParams.values()) {
  console.log(value);
}

for (const entry of urlParams.entries()) {
  console.log(entry);
}
