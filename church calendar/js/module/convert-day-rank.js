function convertImportance() {
  let h3 = document.querySelectorAll("h3");

  for (let i = 0; i < h3.length; i++) {
    let el = h3[i].innerText;

    if (el.toLowerCase() === "importance") {
      let p = h3[i].parentElement.querySelector("p");
      let rank = p.innerText;

      rank = parseInt(100 / rank);
      p.innerText = rank + "/100";

      return;
    }
  }
}

export { convertImportance };
