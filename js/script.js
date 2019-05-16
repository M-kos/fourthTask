let boardSize = 10;
const letters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

const board = document.querySelector('.board');

boardDraw();

function boardDraw() {
    let outStr = '';
    let k = numbers.length;
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            if (i === 0 || i === 9) {
                outStr += `<div class="row-${i + 1} col-${j + 1}">${letters[j]}</div>`;
            } else if (j === 0 || j === 9) {
                outStr += `<div class="row-${i + 1} col-${j + 1}">${numbers[k]}</div>`;
            } else {
                outStr += `<div class="row-${i + 1} col-${j + 1}" id = ${letters[j]}${numbers[k]}></div>`;
            }
        }
        k--;
    }
    board.insertAdjacentHTML('beforeEnd', outStr);
}
