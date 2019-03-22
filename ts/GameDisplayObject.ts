import { Point } from "./Point.js";

export abstract class GameDisplayObject {
    protected position: Point;
    protected speed: Point;
    constructor() {
        this.position = new Point(0, 0);
        this.speed = new Point(0, 0);
    }
    get x(): number {
        return this.position.x;
    }
    set x(value: number) {
        this.position.x = value;
    }
    get y(): number {
        return this.position.y;
    }
    set y(value: number) {
        this.position.y = value;
    }

    get dx(): number {
        return this.speed.x;
    }
    set dx(value: number) {
        this.speed.x = value;
    }
    get dy(): number {
        return this.speed.y;
    }
    set dy(value: number) {
        this.speed.y = value;
    }

    public abstract draw(ctx: CanvasRenderingContext2D): void;
    public abstract reset(): void;
    public abstract move(): void;
}