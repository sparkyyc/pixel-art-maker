document.addEventListener('DOMContentLoaded', (event) => {
  let container = document.createElement('div')
  container.classList.add('maker')
  container.classList.add('container')
  document.body.appendChild(container)
  const rowNum = 12
  for (let j = 0; j < rowNum; j++) {
    container.appendChild(createRow(j))
  }

  function createRow(j) {
    // create a row
    let row = document.createElement('div')
    row.classList.add('row')
    row.classList.add('no-gutters')
    createColumns(row, j)
    return row
  }

  function createColumns(row, j) {
    // loop to create columns
    const colNum = 12
    for (let i = 0; i < colNum; i++) {
      // make the bootstrap column
      let col = document.createElement('div')
      col.classList.add('col')
      col.appendChild(createSquare((i + j) % 2))
      row.appendChild(col)
    }
  }

  function createSquare() {
    let div = document.createElement('div')
    div.classList.add('square')
    return div
  }

// Look into creating inline styles

  let colorOptions = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'black', 'brown', 'gray'];
  let palette = document.createElement('div');
  palette.classList.add('palette');
  palette.classList.add('center');
  document.body.appendChild(palette);
  for (let x = 0; x < colorOptions.length; x++) {
    let colors = document.createElement('span');
    colors.setAttribute('value', colorOptions[x]);
    colors.classList.add(colorOptions[x]);
    colors.classList.add('circle');
    palette.appendChild(colors);
  }

  let colorShower = document.createElement('p');
  colorShower.innerText = 'Color Picked: ';
  palette.appendChild(colorShower);

  let currentColor = document.createElement('span');
  currentColor.classList.add('rectangle');
  palette.appendChild(currentColor);


  let squareClicked = document.querySelector('.maker')

  let colorPicked = document.querySelector('.palette');
  let color = [];
  colorPicked.addEventListener('click', (e) => {
    color.unshift(e.target.getAttribute('value'));
    currentColor.className = '';
    currentColor.classList.add('rectangle');
    currentColor.classList.add(color[0]);
  })



  squareClicked.addEventListener('click', (evt) => {
    evt.target.classList.add(color[0]);
  });
});

// when color clicked on, remember color clicked and change class to that color
