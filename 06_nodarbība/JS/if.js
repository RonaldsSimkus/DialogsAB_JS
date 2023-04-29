if (new Date().getHours() < 20) {
  document.getElementById("demo").innerHTML = "Good day!";
  document.getElementById("demo").innerHTML =
    document.getElementById("demo").innerHTML + " Good day one more time!";
}

if (new Date().getHours() < 20) console.log("Good day!");
console.log("Good day one more time");
