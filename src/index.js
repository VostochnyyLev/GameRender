const array = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 3, 0, 1, 0],
  [0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0],
];

function render(cells) {
  let markup = '';
  cells.forEach((row) => {
    markup += '<div class="row">';
    row.forEach((item) => {
      let block;

      if (item === 0) {
        block = 'ploscha';
      } else if (item === 1) {
        block = 'derevo';
      } else if (item === 3) {
        block = 'man';
      }
      markup = `${markup}<div class=${block}></div>`;
    });
    markup += '</div>';
  });
  return markup;
}

document.getElementById('wrapper').innerHTML = render(array);
