let table = document.querySelector(".table");

const showTable = (rows, cols) => {
  table.innerHTML = "";
  let td = "";
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      if ((j >= i && j < rows - i) || (j >= rows - 1 - i && j <= i)) {
        td = `<td class="green"></td>`;
      } else {
        td = `<td></td>`;
      }
      tr.innerHTML += td;
    }
    table.innerHTML += tr.outerHTML;
  }
};
showTable(15, 15);
