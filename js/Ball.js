System.register(["./Point.js", "./GameDisplayObject.js"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        }
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Point_js_1, GameDisplayObject_js_1, Ball;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Point_js_1_1) {
                Point_js_1 = Point_js_1_1;
            },
            function (GameDisplayObject_js_1_1) {
                GameDisplayObject_js_1 = GameDisplayObject_js_1_1;
            }
        ],
        execute: function () {
            Ball = /** @class */ (function (_super) {
                __extends(Ball, _super);
                function Ball(canvas, radius) {
                    var _this = _super.call(this) || this;
                    _this.canvas = canvas;
                    _this.radius = radius;
                    // this.speed = new Point(20, -40);
                    _this.speed = new Point_js_1.Point(6, -6);
                    _this.isCollided = false;
                    _this.alive = true;
                    return _this;
                }
                Ball.prototype.draw = function (ctx) {
                    ctx.beginPath();
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = "black";
                    ctx.fillStyle = "#0095DD";
                    ctx.arc(this.x + 20, this.y, this.radius, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.fill();
                    ctx.closePath();
                };
                Ball.prototype.reset = function () {
                    this.position.set(this.canvas.width / 2, this.canvas.height - 30);
                    this.speed.set(2, -4);
                    this.alive = true;
                };
                Ball.prototype.move = function () {
                    if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {
                        this.dx = -this.dx;
                    }
                    if (this.y + this.dy < this.radius) {
                        this.dy = -this.dy;
                    }
                    else if (this.y + this.dy > this.canvas.height - this.radius) {
                        if (this.isCollided) {
                            this.dy = -this.dy;
                        }
                        else {
                            this.alive = false;
                        }
                    }
                    this.x += this.dx;
                    this.y += this.dy;
                };
                Ball.prototype.collisionX = function (obj) {
                    if (this.x > obj.x && this.x < obj.x + obj.width) {
                        this.isCollided = true;
                    }
                    else {
                        this.isCollided = false;
                    }
                    return this.isCollided;
                };
                Ball.prototype.collisionY = function (obj) {
                    if (this.y > obj.y && this.y < obj.y + obj.height) {
                        this.isCollided = true;
                    }
                    else {
                        this.isCollided = false;
                    }
                    return this.isCollided;
                };
                return Ball;
            }(GameDisplayObject_js_1.GameDisplayObject));
            exports_1("Ball", Ball);
        }
    };
});
