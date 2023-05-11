let text = "";
let i = 0;
while (i < 20) {
  if (i % 2 == 0) text += "<br>" + i;
  i++;
}
document.getElementById("count").innerHTML = text;
