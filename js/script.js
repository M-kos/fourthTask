let boardSize = 10;
const letters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

const board = document.querySelector('.board');

boardDraw();

const squads = document.querySelectorAll('div[id]');

squads.forEach(el => {
    el.addEventListener('click', selected);
});

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
                if ((i + j) % 2 === 0) {
                    outStr += `<div class="row-${i + 1} col-${j + 1}" id = ${letters[j]}${numbers[k]}></div>`;
                } else {
                    outStr += `<div class="row-${i + 1} col-${j + 1} blackSquad" id = ${letters[j]}${numbers[k]}></div>`;
                }
            }
        }
        k--;
    }
    board.insertAdjacentHTML('beforeEnd', outStr);
}

function selected() {
    document.querySelectorAll('div[id]').forEach(el => {
        el.classList.remove('current-position');
        el.classList.remove('possible-moves');
    });

    this.classList.add('current-position');
    let idValue = this.getAttribute('id')

    const horizontalAcces = [2, 1, -1, -2, -2, -1, 1, 2];
    const verticalAcces = [-1, -2, -2, -1, 1, 2, 2, 1];

    let xIndex = letters.indexOf(idValue[0]) - 1;
    let yIndex = numbers.indexOf(idValue[1]);

    

    for (let i = 0; i < horizontalAcces.length; i++) {

        let xStep = xIndex + horizontalAcces[i];
        let yStep = yIndex + verticalAcces[i];

        if ((xStep >= 0) && (xStep <= (horizontalAcces.length - 1)) &&
            (yStep >= 0) && (yStep <= (verticalAcces.length - 1))) {
            let idStep = letters[xStep+1] + numbers[yStep];
            document.getElementById(idStep).classList.add('possible-moves');
        }
    }
}
