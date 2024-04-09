const scenes = {
    "play": function() {
        background(0, 150, 50);
        noStroke();
        textSize(50);
        textAlign(CENTER, TOP);
        fill(0);
        text("SchoolHomeRPG", 300, 80);
        textAlign(CENTER, BOTTOM);
        text("⬆︎\nPlay!", 300, 550);
        fill(255);
        circle(300, 300, 200);
        fill(128);
        triangle(270, 250, 270, 350, 350, 300);
        const colors = [color(255, 30, 0), color(255, 100, 0), color(255, 200, 0), color(0, 128, 0), color(0, 150, 255), color(150, 0, 255)];
        noFill();
        colors.forEach(function(col, rot) {
            stroke(col);
            strokeWeight(20);
            arc(300, 300, 200, 200, rot * 60 + frameCount * 3, rot * 60 + 60 + frameCount * 3);
        })
        if (hover(300, 300, 200)) {
            cursor(HAND);
            if (mouseIsPressed) {
                scene = "how";
            }
        } else {
            cursor(ARROW);
        }
    },
    "how": function() {
        background(0, 150, 50);
        cursor(ARROW);
        textSize(35);
        noStroke();
        instructions(10, 10, 600, 600);
    },
    "classroom": function() {
        background(150, 100, 50);
        document.getElementsByTagName("audio")[0].play();
        noStroke();
        if (player.x <= 0 || player.y <= 0 || player.y + player.h >= 600) {
            player.x = player.px;
            player.y = player.py;
        }
        fill(255);
        rect(500, 50, 60, 30);
        fill(220, 0, 0);
        rect(500, 80, 60, 80);
        fill(150, 50, 0);
        textAlign(RIGHT, CENTER);
        textSize(20);
        text("Principal's Office ➡︎", 580, 300);
        rect(270, 500, 60, 80);
        rect(265, 500, 70, 10);
        player.interact(270, 500, 60, 80, function() {
            period = "class";
        });
        npcs.forEach(function(npc, i) {
            npc.draw();
            npc.moveTo(npcsPos[period][i][0], npcsPos[period][i][1]);
        });
        if (period === "class") {
            dialog.showModal();
            npcs[0].qa();
        }
        player.draw();
        player.update();
        player.interact(500, 50, 60, 110, function() {
            sleeping = true;
            setTimeout(function() {
                sleeping = false;
                period = "line";
                responses = [];
                answers = [];
                answersGotCorrect = 0;
                npcs.forEach(function(npc) {
                    npc.equation = ceil(random(1000)) + " + " + ceil(random(1000));
                    npc.answer = Boolean(round(random())) ? eval(npc.equation) : ceil(random(2000));
                    npc.finished = false;
                });
            }, 3000);
        });
        if (sleeping) {
            background(0);
        }
        if (player.x > 600) {
            player.x = -50;
            scene = "office";
        }
    },
    "office": function() {
        background(150, 100, 50);
        noStroke();
        if (player.x + player.w >= 600 || player.y <= 0 || player.y + player.h >= 600) {
            player.x = player.px;
            player.y = player.py;
        }
        principal.draw();
        player.interact(250, 285, 100, 40, function() {
            dialog.showModal();
            principal.feed();
        });
        fill(150, 50, 0);
        textAlign(LEFT, CENTER);
        textSize(20);
        text("⬅︎ Classroom", 20, 300);
        rect(250, 285, 100, 40);
        player.draw();
        player.update();
        if (player.x < -50) {
            player.x = 600;
            scene = "classroom";
        }
    },
    "lose": function() {
        background(0);
        textFont("Impact", 100);
        textAlign(CENTER, CENTER);
        fill(255, 0, 0);
        push();
            translate(300, 300);
            rotate(sin(frameCount * 10) * 20);
            scale(sin(frameCount * 5) + 1);
            text("YOU LOST", 0, 0);
        pop();
    }
};
function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < 9; i++) {
        npcsPos.line.push([i * 50 + 75, 100]);
        npcsPos.out.push([-40, -80]);
        npcs.push(new NPC(npcsPos.line[i][0], npcsPos.line[i][1], i));
    }
}
function draw() {
    angleMode(DEGREES);
    textFont("Annai MN");
    scenes[scene]();
}