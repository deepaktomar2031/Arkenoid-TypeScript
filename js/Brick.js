System.register(["./GameDisplayObject.js"], function (exports_1, context_1) {
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
    var GameDisplayObject_js_1, Brick;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (GameDisplayObject_js_1_1) {
                GameDisplayObject_js_1 = GameDisplayObject_js_1_1;
            }
        ],
        execute: function () {
            Brick = /** @class */ (function (_super) {
                __extends(Brick, _super);
                function Brick(width, height, color) {
                    var _this = _super.call(this) || this;
                    _this.width = width;
                    _this.height = height;
                    _this.color = color;
                    _this.alive = true;
                    return _this;
                }
                Brick.prototype.move = function () {
                    // do nothing;
                };
                Brick.prototype.draw = function (ctx) {
                    ctx.beginPath();
                    ctx.rect(this.x, this.y, this.width, this.height);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                    ctx.closePath();
                };
                Brick.prototype.reset = function () {
                    // do nothing
                };
                return Brick;
            }(GameDisplayObject_js_1.GameDisplayObject));
            exports_1("Brick", Brick);
        }
    };
});
