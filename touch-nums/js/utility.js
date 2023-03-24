'use strict'

var gNums = []

// gNums = resetNums()
// var x = drawNum()
// console.log('drawNum :>> ', drawNum());
function resetNums(size) {
    gNums = []
    size *= size 
    for (var i = 0; i < size; i++) {
        gNums.push(i + 1)
    }
    gNums = shuffle(gNums)
    return gNums
}

function drawNum() {
    return gNums.pop()
}

function shuffle(items) {
    for (var i = items.length - 1; i > 0; i--) {
        var randIdx = getRandomInt(0, items.length);
        var keep = items[i];
        items[i] = items[randIdx];
        items[randIdx] = keep;
    }
    return items;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

