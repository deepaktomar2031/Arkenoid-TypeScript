import { Ball } from "./Ball.js";
import { Paddle } from "./Paddle.js";
import { BrickGrid } from "./BrickGrid.js";

window.addEventListener("load", () => {
    let delta: number = 0;
    let isGameOVer: boolean = false;
    let lives: number = 30;
    let liveScore: number = 0;
    const canvas: HTMLCanvasElement = document.getElementById("game") as HTMLCanvasElement;
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;

    const ball: Ball = new Ball(canvas, 10);
    ball.reset();
    const paddle: Paddle = new Paddle(canvas, 75, 10);
    // const paddle: Paddle = new Paddle(canvas, 800, 10);
    paddle.reset();

    const brickGrid: BrickGrid = new BrickGrid(canvas);
    
    function showScore() {
        ctx.font = "20px Georgia";
        ctx.fillText("Your Score is : " + (brickGrid.totalBricks - brickGrid.bricksAlive())*100, canvas.width - 200, canvas.height - 100);
    }

    function showLives() {
        ctx.font = "20px Georgia";
        ctx.fillText("Your Life : " + lives, 50, canvas.height - 100);
    }

    function gameOver() {
        if (isGameOVer) {
            if ((brickGrid.totalBricks-brickGrid.bricksAlive()) === brickGrid.totalBricks) {
                ctx.font = "50px Georgia";
                ctx.fillText("You Won ", (canvas.width / 2) - 100, canvas.height / 2);
            }
            else {
                ctx.font = "50px Georgia";
                ctx.fillText("You Lose ", (canvas.width / 2) - 100, canvas.height / 2);
            }
        }
    }

    

    function render(dt: number) {
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
            } else {
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