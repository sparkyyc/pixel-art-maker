document.addEventListener('DOMContentLoaded', (event) => {
  let container = document.createElement('div');
  container.classList.add('maker');
  container.classList.add('container');
  container.classList.add('mt-4');
  document.body.appendChild(container);
  const rowNum = 26;
  for (let j = 0; j < rowNum; j++) {
    container.appendChild(createRow(j));
  }

  function createRow(j) {
    // create a row
    let row = document.createElement('div');
    row.classList.add('row');
    row.classList.add('no-gutters');
    createColumns(row, j);
    return row;
  }

  function createColumns(row, j) {
    // loop to create columns
    const colNum = 50;
    for (let i = 0; i < colNum; i++) {
      // make the bootstrap column
      let col = document.createElement('div');
      col.classList.add('col');
      col.appendChild(createSquare((i + j) % 2));
      row.appendChild(col);
    }
  }

  function createSquare() {
    let div = document.createElement('div');
    div.classList.add('square');
    div.setAttribute('style', 'background-color: white');
    return div;
  }



  let colorOptions = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

  let palette = document.createElement('div');
  palette.classList.add('palette');
  palette.classList.add('center');
  palette.classList.add('container');
  document.body.appendChild(palette);

  let picker = document.createElement('div');
  picker.classList.add('row');
  palette.appendChild(picker);

  let colorShower = document.createElement('p');
  colorShower.innerText = 'Color Picked: ';
  colorShower.classList.add('col');
  colorShower.classList.add('bold');
  colorShower.classList.add('align-self-center');
  picker.appendChild(colorShower);

  let currentColor = document.createElement('span');
  currentColor.classList.add('rectangle');
  currentColor.classList.add('col');
  picker.appendChild(currentColor);

  let options = document.createElement('div');
  options.classList.add('row');
  palette.appendChild(options);

  for (let x = 0; x < colorOptions.length; x++) {
    let colors = document.createElement('span');
    colors.setAttribute('style', 'background-color: ' + colorOptions[x]);
    colors.setAttribute('value', colorOptions[x]);
    colors.classList.add('circle');
    palette.appendChild(colors);
  }



  let squareClicked = document.querySelector('.maker')

  let colorPicked = document.querySelector('.palette');
  let color = [];
  colorPicked.addEventListener('click', (e) => {
    color.unshift(e.target.getAttribute('value'));
    currentColor.removeAttribute("style")
    currentColor.setAttribute('style', 'background-color: ' + color[0]);
  })




  squareClicked.addEventListener('click', (evt) => {
    evt.target.setAttribute('style', 'background-color: ' + color[0]);
  });
});
