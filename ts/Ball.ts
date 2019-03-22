import { Point } from "./Point.js";
import { Paddle } from "./Paddle.js";
import { GameDisplayObject } from "./GameDisplayObject.js";
import { Brick } from "./Brick.js";

export class Ball extends GameDisplayObject {
    protected isCollided: boolean;
    public alive: boolean;
    constructor(protected canvas: HTMLCanvasElement, public radius: number) {
        super();
        // this.speed = new Point(20, -40);
        this.speed = new Point(6, -6);
        this.isCollided = false;
        this.alive = true;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "#0095DD";
        ctx.arc(this.x + 20, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    public reset(): void {
        this.position.set(this.canvas.width / 2, this.canvas.height - 30);
        this.speed.set(2, -4);
        this.alive = true;
    }
    public move(): void {
        if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y + this.dy < this.radius) {
            this.dy = -this.dy;
        } else if (this.y + this.dy > this.canvas.height - this.radius) {
            if (this.isCollided) {
                this.dy = -this.dy;
            } else {
                this.alive = false;
            }
        }
        this.x += this.dx;
        this.y += this.dy;
    }
    public collisionX(obj: Paddle | Brick): boolean {
        if (this.x > obj.x && this.x < obj.x + obj.width) {
            this.isCollided = true;
        } else {
            this.isCollided = false;
        }
        return this.isCollided;
    }

    public collisionY(obj: Paddle | Brick): boolean {
        if (this.y > obj.y && this.y < obj.y + obj.height) {
            this.isCollided = true;
        } else {
            this.isCollided = false;
        }
        return this.isCollided;
    }
}