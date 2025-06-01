export class Grid {
    constructor(rows, columns, cellSize) {
        this.rows = rows;
        this.columns = columns;
        this.cellsize = cellSize;
        this.cells = []

        for (let row = 0; row < rows; row++) {
            let newRow = [];
            for (let col = 0; col < columns; col++) {
                newRow.push(Math.random() > 0.8 ? 1 : 0);
            }
            this.cells.push(newRow);
        }
    }

    draw(ctx) {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.columns; col++) {
                let color = this.cells[row][col] ? "rgb(0, 255, 0)" : "rgb(55, 55, 55)";

                ctx.fillStyle = color;
                ctx.fillRect(
                    col * this.cellSize,
                    row * this.cellSize,
                    this.cellSize,
                    this.cellSize
                );
            }
        }
    }
}