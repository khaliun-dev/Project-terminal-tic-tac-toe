import {
    checkRow,
    checkColumn,
    checkDiagonal
} from '../status-checker.js';

test('checkRow returns true when player has three in a row', () => {
    const board = [
        ['X', 'X', 'X'],
        ['O', '*', 'O'],
        ['*', '*', '*']
    ];

    expect(checkRow(board, 'X', 0)).toBe(true);
});

test('checkRow returns false when player does not have three in a row', () => {
    const board = [
        ['X', 'X', 'O'],
        ['O', '*', 'O'],
        ['*', '*', '*']
    ];

    expect(checkRow(board, 'X', 0)).toBe(false);
});

test('checkColumn returns true when player has three in a column', () => {
    const board = [
        ['X', 'O', '*'],
        ['X', 'O', '*'],
        ['X', '*', '*']
    ];

    expect(checkColumn(board, 'X', 0)).toBe(true);
});

test('checkColumn returns false when player does not have three in a column', () => {
    const board = [
        ['X', 'O', '*'],
        ['X', 'O', '*'],
        ['O', '*', '*']
    ];

    expect(checkColumn(board, 'X', 0)).toBe(false);
});

test('checkDiagonal returns true for top-left to bottom-right', () => {
    const board = [
        ['X', 'O', '*'],
        ['O', 'X', '*'],
        ['*', '*', 'X']
    ];

    expect(checkDiagonal(board, 'X')).toBe(true);
});

test('checkDiagonal returns true for top-right to bottom-left', () => {
    const board = [
        ['O', '*', 'X'],
        ['O', 'X', '*'],
        ['X', '*', '*']
    ];

    expect(checkDiagonal(board, 'X')).toBe(true);
});

test('checkDiagonal returns false when there is no winning diagonal', () => {
    const board = [
        ['X', 'O', '*'],
        ['O', '*', 'X'],
        ['*', 'X', 'O']
    ];

    expect(checkDiagonal(board, 'X')).toBe(false);
});