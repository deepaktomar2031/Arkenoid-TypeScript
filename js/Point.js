System.register([], function (exports_1, context_1) {
    "use strict";
    var Point;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Point = /** @class */ (function () {
                function Point(x, y) {
                    this.x = x;
                    this.y = y;
                }
                Point.prototype.set = function (x) {
                    if (arguments.length === 1) {
                        this.x = x;
                        this.y = x;
                    }
                    else if (arguments.length === 2) {
                        this.x = arguments[0];
                        this.y = arguments[1];
                    }
                };
                return Point;
            }());
            exports_1("Point", Point);
        }
    };
});
