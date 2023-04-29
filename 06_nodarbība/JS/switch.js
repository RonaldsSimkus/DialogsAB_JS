let day;
let day_ = new Date().getDay();

switch (day_) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    console.log(day);
    //day_ = 7;
    break;
  case 7:
    day = "Saturdayyyyyy";
    console.log(day);
}

document.getElementById("demo_switch").innerHTML = "Today is " + day;

switch (day_) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  //    case  6:
  //        day = "Saturday";
  //        console.log(day);
  //        break;
  default:
    text = " (looking forward to the Working day!)";
}

document.getElementById("demo_switch").innerHTML =
  document.getElementById("demo_switch").innerHTML + text;

let a = 15;
switch (true) {
  case a > 5:
    console.log("a (" + a + ") is bigger than 5");
    break;
  case a > 10:
    console.log("a (" + a + ") is bigger than 10");
    break;
  default:
    console.log("a (" + a + ") is smaller or equal to 5");
}

// 15
// > 5
// > 10
// > 15
