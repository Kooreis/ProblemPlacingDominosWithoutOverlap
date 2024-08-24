Here is a simple JavaScript console application that solves the problem of placing dominos on a board without overlaps. This solution assumes that the board is a 2D array and a domino is represented as a 2x1 or 1x2 array. The program will print the board with the placed dominos.

```javascript
function placeDominos(board, domino) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 0) {
                if (j + 1 < board[i].length && board[i][j + 1] === 0) {
                    board[i][j] = domino;
                    board[i][j + 1] = domino;
                    return true;
                } else if (i + 1 < board.length && board[i + 1][j] === 0) {
                    board[i][j] = domino;
                    board[i + 1][j] = domino;
                    return true;
                }
            }
        }
    }
    return false;
}

function printBoard(board) {
    for (let i = 0; i < board.length; i++) {
        console.log(board[i].join(' '));
    }
}

let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

let domino = 1;

while (placeDominos(board, domino)) {
    printBoard(board);
    console.log('\n');
    domino++;
}
```

This program will place dominos on the board from left to right, top to bottom. When a domino is placed, the function `placeDominos` will return `true` and the board will be printed. The domino number will then be incremented. The program will stop when there are no more places to put a domino, at which point `placeDominos` will return `false`.