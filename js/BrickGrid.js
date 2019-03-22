System.register(["./Brick.js", "./Point.js"], function (exports_1, context_1) {
    "use strict";
    var Brick_js_1, Point_js_1, BrickGrid;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Brick_js_1_1) {
                Brick_js_1 = Brick_js_1_1;
            },
            function (Point_js_1_1) {
                Point_js_1 = Point_js_1_1;
            }
        ],
        execute: function () {
            BrickGrid = /** @class */ (function () {
                function BrickGrid(canvas) {
                    this.canvas = canvas;
                    this.rows = 2;
                    this.columns = 9;
                    this.brickWidth = 75;
                    this.brickHeight = 20;
                    this.padding = 10;
                    this.offset = new Point_js_1.Point(30, 25);
                    this.brickColor = "#ff0000";
                    this.bricks = [];
                    for (var col = 0; col < this.columns; col++) {
                        this.bricks[col] = [];
                        for (var row = 0; row < this.rows; row++) {
                            var brick = new Brick_js_1.Brick(this.brickWidth, this.brickHeight, this.brickColor);
                            brick.x = (col * (this.brickWidth + this.padding)) + this.offset.x;
                            brick.y = (row * (this.brickHeight + this.padding)) + this.offset.y;
                            this.bricks[col][row] = brick;
                        }
                    }
                }
                BrickGrid.prototype.draw = function (ctx) {
                    for (var col = 0; col < this.columns; col++) {
                        for (var row = 0; row < this.rows; row++) {
                            var brick = this.bricks[col][row];
                            if (brick.alive) {
                                brick.draw(ctx);
                            }
                        }
                    }
                };
                BrickGrid.prototype.collision = function (ball) {
                    for (var col = 0; col < this.columns; col++) {
                        for (var row = 0; row < this.rows; row++) {
                            var brick = this.bricks[col][row];
                            if (brick.alive && ball.collisionX(brick) && ball.collisionY(brick)) {
                                ball.dy *= -1.1;
                                ball.dx *= 1.1;
                                brick.alive = false;
                            }
                        }
                    }
                };
                BrickGrid.prototype.bricksAlive = function () {
                    var count = 0;
                    for (var col = 0; col < this.columns; col++) {
                        for (var row = 0; row < this.rows; row++) {
                            if (this.bricks[col][row].alive) {
                                count++;
                            }
                        }
                    }
                    return count;
                };
                Object.defineProperty(BrickGrid.prototype, "totalBricks", {
                    get: function () {
                        return this.columns * this.rows;
                    },
                    enumerable: true,
                    configurable: true
                });
                return BrickGrid;
            }());
            exports_1("BrickGrid", BrickGrid);
        }
    };
});
