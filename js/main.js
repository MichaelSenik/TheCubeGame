'use strict'

var gBoard
var gNums
var currNum
var size

function onInit() {
    size = +prompt('What size do you want every side of the cube to be?')
    currNum = 1
    const elNum = document.querySelector('.num')
    elNum.innerText = currNum
    document.querySelector('.timer').innerText = '0.000'
    gNums = resetNums(size)
    gBoard = createBoard(size)
    renderBoard(gBoard)
}

function createBoard(size) {
    const board = []
    for (var i = 0; i < size; i++) {
        board.push([])
        for (var j = 0; j < size; j++) {
            board[i][j] = drawNum()
        }
    }
    return board
}

function renderBoard(board) {
    var strHtml = ''
    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            strHtml += `<td onclick="onCellClicked(this)">${board[i][j]}</td>`
        }
        strHtml += '</tr>'
    }
    const elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHtml
}

function onCellClicked(clickedNum) {
    if (clickedNum.innerText === currNum + '') {
        clickedNum.style.backgroundColor = 'red'
        if (currNum === 1) {
            var startTime = Date.now();
            var gInterval = setInterval(function(){
                var elapsedTime = Date.now() - startTime;
                document.querySelector('.timer').innerText = (elapsedTime / 1000).toFixed(3) +' s';
                if (currNum === size * size + 1) clearInterval(gInterval)
            }, 100);
        }
        currNum++
        if (currNum <= size * size) {
        const elNum = document.querySelector('.num')
        elNum.innerText = currNum
        }
        else theEnd()
    }
}

function theEnd() {
    const elBtn = document.querySelector('.restart')
    elBtn.style.display = 'inline'
}

function restart(elBtn) {
    elBtn.style.display = 'none'
    onInit()
}