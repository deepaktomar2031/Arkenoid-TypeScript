import { Brick } from "./Brick.js";
import { Point } from "./Point.js";
import { Ball } from "./Ball.js";

export class BrickGrid {
    protected rows: number = 2;
    protected columns: number = 9;
    protected brickWidth: number = 75;
    protected brickHeight: number = 20;
    protected padding: number = 10;
    protected offset: Point = new Point(30, 25);
    protected brickColor = "#ff0000";
    protected bricks: Brick[][];
    constructor(protected canvas: HTMLCanvasElement) {
        this.bricks = [];
        for (let col = 0; col < this.columns; col++) {
            this.bricks[col] = [];
            for (let row = 0; row < this.rows; row++) {
                const brick = new Brick(this.brickWidth, this.brickHeight, this.brickColor);
                brick.x = (col * (this.brickWidth + this.padding)) + this.offset.x;
                brick.y = (row * (this.brickHeight + this.padding)) + this.offset.y;
                this.bricks[col][row] = brick;
            }
        }
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        for (var col = 0; col < this.columns; col++) {
            for (var row = 0; row < this.rows; row++) {
                const brick = this.bricks[col][row];
                if (brick.alive) {
                    brick.draw(ctx);
                }
            }
        }
    }

    public collision(ball: Ball): void {
        for (let col = 0; col < this.columns; col++) {
            for (let row = 0; row < this.rows; row++) {
                const brick = this.bricks[col][row];
                if (brick.alive && ball.collisionX(brick) && ball.collisionY(brick)) {
                    ball.dy *= -1.1;
                    ball.dx *= 1.1;
                    brick.alive = false;
                }
            }
        }
    }

    public bricksAlive(): number {
        let count: number = 0;
        for (let col = 0; col < this.columns; col++) {
            for (let row = 0; row < this.rows; row++) {
                if (this.bricks[col][row].alive) {
                    count++;
                }
            }
        }
        return count;
    }

    get totalBricks(): number {
        return this.columns * this.rows;
    }

}