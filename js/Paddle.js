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
    var Point_js_1, GameDisplayObject_js_1, Paddle;
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
            Paddle = /** @class */ (function (_super) {
                __extends(Paddle, _super);
                function Paddle(canvas, width, height) {
                    var _this = _super.call(this) || this;
                    _this.canvas = canvas;
                    _this.width = width;
                    _this.height = height;
                    _this.speed = new Point_js_1.Point(15, 0);
                    _this.left = false;
                    _this.right = false;
                    document.addEventListener("keydown", _this.keyDownHandler.bind(_this), false);
                    document.addEventListener("keyup", _this.keyUpHandler.bind(_this), false);
                    return _this;
                }
                Paddle.prototype.keyDownHandler = function (e) {
                    if (e.keyCode === 37) {
                        this.left = true;
                    }
                    else if (e.keyCode == 39) {
                        this.right = true;
                    }
                };
                Paddle.prototype.keyUpHandler = function (e) {
                    if (e.keyCode === 37) {
                        this.left = false;
                    }
                    else if (e.keyCode == 39) {
                        this.right = false;
                    }
                };
                Paddle.prototype.reset = function () {
                    this.position.set((this.canvas.width - this.width) / 2, this.canvas.height - this.height);
                };
                Paddle.prototype.draw = function (ctx) {
                    ctx.beginPath();
                    ctx.rect(this.position.x, this.canvas.height - this.height, this.width, this.height);
                    ctx.fillStyle = "#00DD95";
                    ctx.fill();
                    ctx.closePath();
                };
                Paddle.prototype.move = function () {
                    if (this.left && this.position.x > 0) {
                        this.position.x -= this.speed.x;
                    }
                    else if (this.right && this.position.x < this.canvas.width - this.width) {
                        this.position.x += this.speed.x;
                    }
                };
                return Paddle;
            }(GameDisplayObject_js_1.GameDisplayObject));
            exports_1("Paddle", Paddle);
        }
    };
});
