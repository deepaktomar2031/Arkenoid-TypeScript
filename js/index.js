System.register(["./Ball.js", "./Paddle.js", "./BrickGrid.js"], function (exports_1, context_1) {
    "use strict";
    var Ball_js_1, Paddle_js_1, BrickGrid_js_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Ball_js_1_1) {
                Ball_js_1 = Ball_js_1_1;
            },
            function (Paddle_js_1_1) {
                Paddle_js_1 = Paddle_js_1_1;
            },
            function (BrickGrid_js_1_1) {
                BrickGrid_js_1 = BrickGrid_js_1_1;
            }
        ],
        execute: function () {
            window.addEventListener("load", function () {
                var delta = 0;
                var isGameOVer = false;
                var lives = 30;
                var liveScore = 0;
                var canvas = document.getElementById("game");
                var ctx = canvas.getContext("2d");
                var ball = new Ball_js_1.Ball(canvas, 10);
                ball.reset();
                var paddle = new Paddle_js_1.Paddle(canvas, 75, 10);
                // const paddle: Paddle = new Paddle(canvas, 800, 10);
                paddle.reset();
                var brickGrid = new BrickGrid_js_1.BrickGrid(canvas);
                function showScore() {
                    ctx.font = "20px Georgia";
                    ctx.fillText("Your Score is : " + (brickGrid.totalBricks - brickGrid.bricksAlive()) * 100, canvas.width - 200, canvas.height - 100);
                }
                function showLives() {
                    ctx.font = "20px Georgia";
                    ctx.fillText("Your Life : " + lives, 50, canvas.height - 100);
                }
                function gameOver() {
                    if (isGameOVer) {
                        if ((brickGrid.totalBricks - brickGrid.bricksAlive()) === brickGrid.totalBricks) {
                            ctx.font = "50px Georgia";
                            ctx.fillText("You Won ", (canvas.width / 2) - 100, canvas.height / 2);
                        }
                        else {
                            ctx.font = "50px Georgia";
                            ctx.fillText("You Lose ", (canvas.width / 2) - 100, canvas.height / 2);
                        }
                    }
                }
                function render(dt) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ball.draw(ctx);
                    paddle.draw(ctx);
                    brickGrid.draw(ctx);
                    showScore();
                    showLives();
                    brickGrid.collision(ball);
                    if (!ball.alive) {
                        if (lives > 0) {
                            lives--;
                            ball.reset();
                            paddle.reset();
                        }
                        else {
                            isGameOVer = true;
                            gameOver();
                        }
                    }
                    if (brickGrid.bricksAlive() === 0) {
                        isGameOVer = true;
                        gameOver();
                    }
                    if (!isGameOVer) {
                        requestAnimationFrame(render);
                    }
                    ball.collisionX(paddle);
                    ball.move();
                    paddle.move();
                }
                render(delta);
            });
        }
    };
});
