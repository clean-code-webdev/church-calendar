import * as cm from "./convert-month.js";

// set color
function setMonth() {
  let p = document.querySelectorAll("p");

  for (let i = 0; i < p.length; i++) {
    let el = p[0].innerText.split("-");

    // get day
    let d = el[2];
    // get month number
    let m = el[1];
    // get year
    let y = el[0];

    // convert month number to month name
    let month = cm.convertMonth(m);

    p[i].innerHTML = `     
          <p>${month} ${d} ${y}</p>
      `;

    return;
  }
}

export { setMonth };
