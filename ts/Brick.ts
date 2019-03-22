import { GameDisplayObject } from "./GameDisplayObject.js";

export class Brick extends GameDisplayObject {
    public alive: boolean;
    constructor(public width: number, public height: number, protected color: string) {
        super();
        this.alive = true;
    }

    public move(): void {
        // do nothing;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    public reset(): void {
        // do nothing
    }
}