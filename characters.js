let player = {
    x: 275,
    y: 480,
    px: this.x,
    py: this.y,
    w: 50,
    h: 100,
    xv: 0,
    yv: 0,
    costume: 1,
    draw: function() {
        switch(this.costume) {
            case 1:
                fill(255, 200, 0);
                rect(this.x - this.w / 4, this.y + this.h / 2.5, this.w + this.w / 2, this.h / 8);
                fill(255, 200, 150);
                ellipse(this.x + this.w / 6, this.y + this.h / 2.3, this.w / 3, this.h / 6);
                ellipse(this.x + this.w - this.w / 6, this.y + this.h / 2.3, this.w / 3, this.h / 6);
                fill(0, 150, 255);
                quad(this.x, this.y + this.h, this.x + this.w, this.y + this.h, this.x + this.w / 1.5, this.y + this.h / 3.2, this.x + this.w / 3, this.y + this.h / 3.2);
                fill(255, 200, 150);
                ellipse(this.x + this.w / 2, this.y + this.w / 3, this.w / 1.5, this.w / 1.5);
                fill(70, 30, 0);
                arc(this.x + this.w / 2, this.y + this.h / 2.7, this.w / 1.1, this.h / 1.3, 180, 360);
            break;
            case 2:
                fill(0, 150, 255);
                quad(this.x, this.y + this.h, this.x + this.w, this.y + this.h, this.x + this.w / 1.5, this.y + this.h / 3.2, this.x + this.w / 3, this.y + this.h / 3.2);
                fill(255, 200, 150);
                ellipse(this.x + this.w / 2, this.y + this.w / 3, this.w / 1.5, this.w / 1.5);
                ellipse(this.x + this.w / 2.5, this.y + this.h / 2.3, this.w / 3, this.h / 6);
                fill(200, 230, 255);
                ellipse(this.x + this.w / 2.7, this.y + this.w / 3, this.w / 4, this.h / 8);
                fill(70, 30, 0);
                arc(this.x + this.w / 2, this.y + this.h / 9, this.w / 1.6, this.h / 4, 180, 360);
                arc(this.x + this.w - this.w / 2.3, this.y + this.h / 2.6, this.w / 1.3, this.h / 1.3, 270, 360);
                fill(255, 200, 0);
                rect(this.x + this.w / 8, this.y + this.h / 2.5, this.w / 8, this.h / 8);
            break;
            case 3:
                fill(70, 30, 0);
                arc(this.x + this.w / 2, this.y + this.h / 2.7, this.w / 1.1, this.h / 1.3, 180, 360);
                fill(0, 150, 255);
                quad(this.x, this.y + this.h, this.x + this.w, this.y + this.h, this.x + this.w / 1.5, this.y + this.h / 3.2, this.x + this.w / 3, this.y + this.h / 3.2);
                fill(255, 200, 150);
                ellipse(this.x + this.w / 2, this.y + this.w / 3, this.w / 1.5, this.w / 1.5);
                ellipse(this.x + this.w / 6, this.y + this.h / 2.3, this.w / 3, this.h / 6);
                ellipse(this.x + this.w - this.w / 6, this.y + this.h / 2.3, this.w / 3, this.h / 6);
                fill(70, 30, 0);
                arc(this.x + this.w / 2, this.y + this.h / 9, this.w / 1.6, this.h / 4, 180, 360);
                fill(200, 230, 255);
                ellipse(this.x + this.w / 2.7, this.y + this.w / 3, this.w / 4, this.h / 8);
                ellipse(this.x + this.w - this.w / 2.7, this.y + this.w / 3, this.w / 4, this.h / 8);
                fill(255, 200, 0);
                rect(this.x - this.w / 4, this.y + this.h / 2.5, this.w + this.w / 2, this.h / 8);
            break;
            case 4:
                fill(0, 150, 255);
                quad(this.x, this.y + this.h, this.x + this.w, this.y + this.h, this.x + this.w / 1.5, this.y + this.h / 3.2, this.x + this.w / 3, this.y + this.h / 3.2);
                fill(255, 200, 150);
                ellipse(this.x + this.w / 2, this.y + this.w / 3, this.w / 1.5, this.w / 1.5);
                ellipse(this.x + this.w / 1.75, this.y + this.h / 2.3, this.w / 3, this.h / 6);
                fill(200, 230, 255);
                ellipse(this.x + this.w - this.w / 2.7, this.y + this.w / 3, this.w / 4, this.h / 8);
                fill(70, 30, 0);
                arc(this.x + this.w / 2, this.y + this.h / 9, this.w / 1.6, this.h / 4, 180, 360);
                arc(this.x + this.w / 2.3, this.y + this.h / 2.6, this.w / 1.3, this.h / 1.3, 180, 270);
                fill(255, 200, 0);
                rect(this.x + this.w / 1.4, this.y + this.h / 2.5, this.w / 8, this.h / 8);
            break;
        }
    },
    update: function() {
        this.px = this.x;
        this.py = this.y;
        this.x += this.xv;
        this.xv = 0;
        this.y += this.yv;
        this.yv = 0;
        if (keys["w"]) {
            this.yv = -3;
            this.costume = 1;
        } else if (keys["a"]) {
            this.xv = -3;
            this.costume = 2;
        } else if (keys["s"]) {
            this.yv = 3;
            this.costume = 3;
        } else if (keys["d"]) {
            this.xv = 3;
            this.costume = 4;
        }
    },
    interact: function(x, y, w, h, event) {
        if (this.x + this.w >= x && this.x <= x + w && this.y + this.h >= y && this.y + this.h <= y + h && keys["Enter"]) {
            event();
        }
    }
};
class NPC {
    constructor(x, y, id) {
        this.x = x;
        this.y = y;
        this.w = 40;
        this.h = 80;
        this.id = id;
        this.equation = ceil(random(1000)) + " + " + ceil(random(1000));
        this.answer = Boolean(round(random())) ? eval(this.equation) : ceil(random(2000));
        this.finished = false;
        this.gender = (round(random(1)) === 1) ? "boy" : "girl";
        this.color = color(random(255), random(255), random(255));
    }
    draw() {
        if (this.gender === "girl") {
            fill(70, 30, 0);
            arc(this.x + this.w / 2, this.y + this.h / 2.7, this.w / 1.1, this.h / 1.3, 180, 360);
        }
        fill(this.color);
        quad(this.x, this.y + this.h, this.x + this.w, this.y + this.h, this.x + this.w / 1.5, this.y + this.h / 3.2, this.x + this.w / 3, this.y + this.h / 3.2);
        fill(255, 200, 150);
        ellipse(this.x + this.w / 2, this.y + this.w / 3, this.w / 1.5, this.w / 1.5);
        ellipse(this.x + this.w / 6, this.y + this.h / 2.3, this.w / 3, this.h / 6);
        ellipse(this.x + this.w - this.w / 6, this.y + this.h / 2.3, this.w / 3, this.h / 6);
        fill(70, 30, 0);
        arc(this.x + this.w / 2, this.y + this.h / 9, this.w / 1.6, this.h / 4, 180, 360);
        fill(0);
        ellipse(this.x + this.w / 2.7, this.y + this.w / 3, this.w / 8, this.h / 16);
        ellipse(this.x + this.w - this.w / 2.7, this.y + this.w / 3, this.w / 8, this.h / 16);
    }
    moveTo(x, y) {
        this.x = lerp(this.x, x, 0.07);
        this.y = lerp(this.y, y, 0.07);
    }
    qa() {
        if (this.finished) {
            if (this.id < 8) {
                npcs[this.id + 1].qa();
            } else {
                period = "out";
                dialog.close();
                setTimeout(function() {
                    scene = "office";
                    player.x = 275;
                    player.y = 300;
                    player.costume = 1;
                }, 1000);
            }
        } else {
            const id = this.id;
            div.innerHTML = "Teacher: " + this.equation + "<br>Student " + (this.id + 1) + ": " + this.answer;
            span[0].onclick = function() {
                responses.push(true);
                answers.push(eval(npcs[id].equation) === npcs[id].answer);
                answersGotCorrect += Number(eval(npcs[id].equation) === npcs[id].answer);
                npcs[id].finished = true;
            };
            span[1].onclick = function() {
                responses.push(false);
                answers.push(eval(npcs[id].equation) === npcs[id].answer);
                answersGotCorrect += Number(!(eval(npcs[id].equation) === npcs[id].answer));
                npcs[id].finished = true;
            };
        }
    }
}
let principal = {
    x: 275,
    y: 220,
    w: 50,
    h: 100,
    draw: function() {
        fill(0);
        rect(this.x + this.w / 3.3, this.y + this.h / 3.2, this.w / 2.5, this.h / 1.45);
        fill(240, 200, 100);
        ellipse(this.x + this.w / 2, this.y + this.w / 3, this.w / 1.5, this.w / 1.5);
        ellipse(this.x + this.w / 6, this.y + this.h / 2.3, this.w / 3, this.h / 6);
        ellipse(this.x + this.w - this.w / 6, this.y + this.h / 2.3, this.w / 3, this.h / 6);
        fill(0);
        ellipse(this.x + this.w / 2.7, this.y + this.w / 3, this.w / 8, this.h / 16);
        ellipse(this.x + this.w - this.w / 2.7, this.y + this.w / 3, this.w / 8, this.h / 16);
        fill(220);
        triangle(this.x + this.w / 2, this.y + this.h / 2, this.x + this.w / 3, this.y + this.h / 4, this.x + this.w - this.w / 3, this.y + this.h / 4);
    },
    feed: function() {
        if(period === "out") {
            if (answersGotCorrect < 5) {
                span[0].onclick = span[1].onclick = function() {
                    dialog.close();
                    scene = "lose";
                };
                div.innerHTML = "Principal: What a bad, bad teacher you've been, my dear.";
            } else {
                span[0].onclick = function() {
                    dialog.close();
                };
                span[1].onclick = function() {
                    dialog.close();
                    scene = "lose";
                };
                div.innerHTML = "Principal: You've done well today, would you like to continue?";
            }
        } else {
            span[0].onclick = span[1].onclick = function() {
                dialog.close();
            };
            div.innerHTML = "Principal: Don't you see I'm busy here?";
        }
    }
};