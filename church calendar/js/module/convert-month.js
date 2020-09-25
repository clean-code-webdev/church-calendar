function convertMonth(m) {
  let ar = [
    ["01", "january"],
    ["02", "february"],
    ["03", "march"],
    ["04", "april"],
    ["05", "may"],
    ["06", "june"],
    ["07", "july"],
    ["08", "august"],
    ["09", "september"],
    ["10", "october"],
    ["11", "novermber"],
    ["12", "december"],
  ];

  for (let i = 0; i < ar.length; i++) {
    if (m === ar[i][0]) {
      return ar[i][1];
    }
  }
}

export { convertMonth };
