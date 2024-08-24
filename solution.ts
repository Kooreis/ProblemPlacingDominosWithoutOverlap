Here is a simple TypeScript console application that solves the problem of placing dominos on a board without overlaps. This solution assumes that the board is a 2D grid and a domino is a 2x1 or 1x2 tile.

```typescript
class Board {
    private grid: boolean[][];

    constructor(private width: number, private height: number) {
        this.grid = Array(height).fill(0).map(() => Array(width).fill(false));
    }

    canPlaceDomino(x: number, y: number, isVertical: boolean): boolean {
        if (isVertical) {
            return y < this.height - 1 && !this.grid[y][x] && !this.grid[y + 1][x];
        } else {
            return x < this.width - 1 && !this.grid[y][x] && !this.grid[y][x + 1];
        }
    }

    placeDomino(x: number, y: number, isVertical: boolean): void {
        if (this.canPlaceDomino(x, y, isVertical)) {
            if (isVertical) {
                this.grid[y][x] = true;
                this.grid[y + 1][x] = true;
            } else {
                this.grid[y][x] = true;
                this.grid[y][x + 1] = true;
            }
        } else {
            throw new Error('Cannot place domino here');
        }
    }
}

let board = new Board(8, 8);

try {
    board.placeDomino(0, 0, false);
    board.placeDomino(0, 1, true);
    board.placeDomino(2, 0, false);
    board.placeDomino(4, 0, false);
    board.placeDomino(6, 0, false);
    board.placeDomino(1, 2, true);
    board.placeDomino(3, 2, true);
    board.placeDomino(5, 2, true);
    board.placeDomino(7, 2, true);
    board.placeDomino(0, 4, false);
    board.placeDomino(2, 4, false);
    board.placeDomino(4, 4, false);
    board.placeDomino(6, 4, false);
    board.placeDomino(1, 6, true);
    board.placeDomino(3, 6, true);
    board.placeDomino(5, 6, true);
    board.placeDomino(7, 6, true);
    console.log('All dominos placed successfully');
} catch (e) {
    console.error(e.message);
}
```

This program creates an 8x8 board and tries to place dominos on it. If a domino cannot be placed at a certain position (because it would go off the board or overlap with another domino), an error is thrown.