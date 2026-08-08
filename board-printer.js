/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
    for (let i = 0; i < board.length; i++) {
        if (i == 0) {
             console.log(`  ${board[i][0]}  |  ${board[i][1]}  |  ${board[i][2]}  `);
            console.log(`=================`);
            }

        if (i == 1) {
             console.log(`  ${board[i][0]}  |  ${board[i][1]}  |  ${board[i][2]}  `);
            console.log(`=================`);
            }

        if (i == 2) {
             console.log(`  ${board[i][0]}  |  ${board[i][1]}  |  ${board[i][2]}  `);
            console.log(`=================`);
            }     
    
/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '_') {
                return false;
            }
        }
    }
    return true;
}
