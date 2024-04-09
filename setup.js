let npcs = [];
let npcsPos = {
    "class": [
        [130, 160], [280, 160], [430, 160],
        [130, 260], [280, 260], [430, 260],
        [130, 360], [280, 360], [430, 360]
    ],
    "line": [],
    "out": []
};
let responses = [];
let answers = [];
let answersGotCorrect = 0;
const dialog = document.getElementsByTagName("dialog")[0];
const div = document.getElementsByTagName("div")[0];
const span = document.getElementsByTagName("span");
const strips = [];
let keys = {};
function keyPressed() {
    keys[key] = true;
}
function keyReleased() {
    keys[key] = false;
}
let scene = "play";
function autoType(string, event) {
    let time = 0;
    let index = 0;
    let thing;
    return function(x, y, w, h) {
        time++;
        fill(0);
        textAlign(LEFT, TOP);
        text(string.substr(0, index) + thing, x, y, w, h);
        if (time % 5 === 4) {
            index++;
        }
        if (time % 70 <= 35) {
            thing = "|";
        } else {
            thing = "";
        }
        if (index >= string.length) {
            event();
        }
    };
}
const instructions = autoType("Use the keys WASD to control the teacher's movement and Enter to interact with elements. Your goal is to survive through teaching your class and not getting fired by the principal. Every day, the principal will check on you. If you did not do well, he will fire you. Good luck!\n\n\n\n3....... 2....... 1....... ", function() {
    scene = "classroom";
});
function hover(x, y, d) {
    return dist(x, y, mouseX, mouseY) <= d / 2;
}
let sleeping = false;
let period = "line";