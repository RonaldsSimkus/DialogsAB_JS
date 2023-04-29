const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";

for (let i = 0; i < cars.length; i++) {
  //text += cars[i] + "<br>"; // -= *= /= %=
  console.log(i);
  console.log("text mainīgā saturs pirms izmaiņām:" + "\n" + text);
  if (i == 2) break;
  text = text + cars[i] + "<br>";
  console.log("text mainīgā saturs pēc izmaiņām:" + "\n" + text + "\n\n");
}

// console.log(i);

document.getElementById("demo_for").innerHTML = text;
