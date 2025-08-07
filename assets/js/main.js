let table = document.querySelector(".table");
console.log("Table element:", table);

const showTable = (rows, cols) => {
  table.innerHTML = "";
  let td = "";
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      console.log(i, j);

      if (i - j >= 0) {
        td = `<td>*</td>`;
      } else {
        td = `<td></td>`;
      }
      tr.innerHTML += td;
    }
    table.innerHTML += tr.outerHTML;
  }
};
showTable(5, 5);
