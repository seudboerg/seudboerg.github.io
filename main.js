class Logo {
  constructor(logoClass, rowClass, columnClass, rows, cols) {
    this.logoClass = logoClass;
    this.rowClass = rowClass;
    this.columnClass = columnClass;
    this.rows = rows;
    this.cols = cols;
  }

  getRandomColorConfig() {
    const x = randomInt(1, this.rows);
    const y = randomInt(1, this.cols);

    const selector = this.logoClass + ' ' + this.rowClass + x + this.columnClass + y;
    const logoCell = document.querySelector(selector);
    const style = window.getComputedStyle(logoCell);

    const backgroundColorProperty = 'backgroundColor';
    return style[backgroundColorProperty] ? style[backgroundColorProperty] : null;
  }
}

function randomInt(rx, ry) {
  return Math.floor(Math.random() * ry) + rx;
}

function getColor(logo) {
  logo.getRandomColorConfig();
  setTimeout(getColor, 3000, logo);
}

// window.onload = () => {
//   const logo = new Logo('.site-logo', '.r', '.c', 8, 8);
//   getColor(logo);
// }
