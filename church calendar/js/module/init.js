import * as sd from "./set-date.js";
import * as cht from "./create-html-element.js";
import * as cri from "./convert-day-rank.js";

function init(date) {
  let targetUrl =
    "http://calapi.inadiutorium.cz/api/v0/en/calendars/default/" + date;

  fetch(targetUrl)
    .then((response) => response.json())
    .then((data) => {
      // create html elements
      cht.createHtmlElement(data);

      // set date
      sd.setMonth();

      // convert rank rank
      cri.convertImportance();
    });
}

export { init };
