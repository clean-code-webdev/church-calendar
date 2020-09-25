import * as init from "./module/init.js";

let today = "today";

let newDate = document.querySelector("#birthday");

/* --- display info of the day on page load --- */
window.onload = init.init(today);

/* --- display info of the chosen day --- */
newDate.addEventListener("change", () => {
  // get chosen date value
  let date = newDate.value.toString();

  // change '-' into '/'
  date = date.split("-").join("/");
  // display info of the chosen day
  init.init(date);
});
