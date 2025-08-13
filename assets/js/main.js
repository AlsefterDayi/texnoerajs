let table = document.querySelector(".table");
let firsTime = sessionStorage.getItem("firstTime");

const showTable = (rows, cols) => {
  table.innerHTML = "";
  let td = "";
  const center = Math.floor(rows / 2);
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const differ = j - i + 1;
      const differ2 = cols - i + 1;

      if ((j >= i && j < rows - i) || (j >= rows - 1 - i && j <= i)) {
        let distance = Math.abs(center - j);
        td.textContent = center - distance + 1;
        td = `<td class="green">${center - distance + 1}</td>`;
      } else {
        td = `<td></td>`;
      }
      tr.innerHTML += td;
    }
    table.innerHTML += tr.outerHTML;
  }
};
showTable(9, 9);

if (!firsTime) {
  let preloader = document.querySelector(".preloader");
  preloader.style.display = "flex";
  sessionStorage.setItem("firstTime", "true");
} else {
  document.querySelector(".preloader").remove();
  document.body.style.overflow = "auto";
}
