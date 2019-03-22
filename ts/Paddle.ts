import { Point } from "./Point.js";
import { GameDisplayObject } from "./GameDisplayObject.js";

export class Paddle extends GameDisplayObject {
    protected left: boolean;
    protected right: boolean;
    constructor(protected canvas: HTMLCanvasElement, public width: number, public height: number) {
        super();
        this.speed = new Point(15, 0);
        this.left = false;
        this.right = false;
        document.addEventListener("keydown", this.keyDownHandler.bind(this), false);
        document.addEventListener("keyup", this.keyUpHandler.bind(this), false);
    }

    protected keyDownHandler(e: KeyboardEvent) {
        if (e.keyCode === 37) {
            this.left = true;
        } else if (e.keyCode == 39) {
            this.right = true;
        }
    }
    protected keyUpHandler(e: KeyboardEvent) {
        if (e.keyCode === 37) {
            this.left = false;
        } else if (e.keyCode == 39) {
            this.right = false;
        }
    }
    public reset(): void {
        this.position.set((this.canvas.width - this.width) / 2, this.canvas.height - this.height);
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.rect(this.position.x, this.canvas.height - this.height, this.width, this.height);
        ctx.fillStyle = "#00DD95";
        ctx.fill();
        ctx.closePath();
    }
    public move(): void {
        if (this.left && this.position.x > 0) {
            this.position.x -= this.speed.x;
        } else if (this.right && this.position.x < this.canvas.width - this.width) {
            this.position.x += this.speed.x;
        }
    }
}