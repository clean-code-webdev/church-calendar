function createParagraph(a, b) {
  let info = document.querySelector("#info");

  info.innerHTML += `
  <div class="box">
    <h3>${a}</h3>
    <p>${b}</p>
  </div>
  `;
}

export { createParagraph };
