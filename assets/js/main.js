let table = document.querySelector(".table");
console.log("Table element:", table);

const showTable = (rows, cols) => {
  table.innerHTML = "";
  let td = "";
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      console.log(i, j);

      if (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) {
        td = `<td class="green"></td>`;
      } else {
        td = `<td></td>`;
      }
      tr.innerHTML += td;
    }
    table.innerHTML += tr.outerHTML;
  }
};
showTable(8, 8);
