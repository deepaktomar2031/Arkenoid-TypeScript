export class Point {
    constructor(public x: number, public y: number) {

    }
    public set(x: number, y: number): void;
    public set(x: number): void {
        if (arguments.length === 1) {
            this.x = x;
            this.y = x;
        } else if (arguments.length === 2) {
            this.x = arguments[0];
            this.y = arguments[1];
        }
    }
}