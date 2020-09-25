import * as cp from "./create-paragraph.js";

// create html elements
function createHtmlElement(data) {
  let info = document.querySelector("#info");
  info.innerHTML = "";

  let arr = [
    ["date", "date"],
    ["season", "season"],
    // ["season week", "season_week"],
    ["weekday", "weekday"],
    ["title", "celebrations", "title"],
    ["importance", "celebrations", "rank_num"],
    ["colour", "celebrations", "colour"],
  ];

  // start printing
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === "celebrations") {
      // create celebration info
      cp.createParagraph(arr[i][0], data["celebrations"][0][arr[i][2]]);
      continue;
    }

    // create regular info
    cp.createParagraph(arr[i][0], data[arr[i][1]]);
  }
}

export { createHtmlElement };
