System.register(["./Point.js"], function (exports_1, context_1) {
    "use strict";
    var Point_js_1, GameDisplayObject;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Point_js_1_1) {
                Point_js_1 = Point_js_1_1;
            }
        ],
        execute: function () {
            GameDisplayObject = /** @class */ (function () {
                function GameDisplayObject() {
                    this.position = new Point_js_1.Point(0, 0);
                    this.speed = new Point_js_1.Point(0, 0);
                }
                Object.defineProperty(GameDisplayObject.prototype, "x", {
                    get: function () {
                        return this.position.x;
                    },
                    set: function (value) {
                        this.position.x = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GameDisplayObject.prototype, "y", {
                    get: function () {
                        return this.position.y;
                    },
                    set: function (value) {
                        this.position.y = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GameDisplayObject.prototype, "dx", {
                    get: function () {
                        return this.speed.x;
                    },
                    set: function (value) {
                        this.speed.x = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GameDisplayObject.prototype, "dy", {
                    get: function () {
                        return this.speed.y;
                    },
                    set: function (value) {
                        this.speed.y = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return GameDisplayObject;
            }());
            exports_1("GameDisplayObject", GameDisplayObject);
        }
    };
});
