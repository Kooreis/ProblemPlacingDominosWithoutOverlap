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