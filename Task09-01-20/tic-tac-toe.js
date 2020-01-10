var box = /** @class */ (function () {
    function box(id) {
        this.id = id;
        var box = document.createElement("div");
        box.style.width = "50px";
        box.style.height = "50px";
        box.style.border = "1px solid black";
        box.style.backgroundColor = "#2E4B51";
        box.style.display = "inline-block";
        box.id = id;
        box.style.margin = "0px 3px 3px 3px";
        box.innerHTML = "*";
        box.style.textAlign = "center";
        box.addEventListener("click", this.boxMark);
        document.body.appendChild(box);
    }
    box.prototype.boxMark = function (cuBox) {
        var currBox = document.getElementById(this.id);
        var boxValue = document.getElementById(currBox.id);
        if (currPlayer % 2 == 0) {
            if (boxValue.innerHTML != "X") {
                currBox.innerHTML = "O";
                player2.push(currBox.id);
                //alert(currPlayer);
                currPlayer += 1;
                winner("p2");
            }
        }
        else {
            if (boxValue.innerHTML != "O") {
                currBox.innerText = "X";
                player1.push(currBox.id);
                //alert(currPlayer);
                currPlayer += 1;
                winner("p1");
            }
        }
    };
    return box;
}());
var currPlayer = 1;
var player1 = [];
var player2 = [];
var p1WinCount = 0;
var p2WinCount = 0;
var draw = 0;
var boxArr = [];
for (var i = 1; i <= 9; i++) {
    boxArr[i] = new box(i);
    if (i % 3 == 0) {
        var br = document.createElement("br");
        document.body.appendChild(br);
    }
}
function rowCheck(currUser, pWinCount, winner) {
    var rowWin = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];
    for (var i = 0; i < 3; i++) {
        console.log(JSON.stringify(rowWin[i]) + " " + JSON.stringify(currUser));
        pWinCount = 0;
        for (var j = 0; j < 3; j++) {
            if (currUser.includes(rowWin[i][j])) {
                //alert(rowWin[i][j]);
                pWinCount += 1;
                if (pWinCount == 3) {
                    alert(winner + " wins");
                    location.reload();
                }
            }
        }
    }
    draw += 1;
    //alert("draw count "+draw);
}
function colCheck(currUser, pWinCount, winner) {
    var colWin = [["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"]];
    for (var i = 0; i < 3; i++) {
        console.log(JSON.stringify(colWin[i]) + " " + JSON.stringify(currUser));
        pWinCount = 0;
        for (var j = 0; j < 3; j++) {
            if (currUser.includes(colWin[i][j])) {
                //alert(colWin[i][j]);
                pWinCount += 1;
                if (pWinCount == 3) {
                    alert(winner + " wins");
                    location.reload();
                }
            }
        }
    }
    draw += 1;
    //alert("draw count "+draw);
}
function diagCheck(currUser, pWinCount, winner) {
    var diagWin = [["1", "5", "9"], ["3", "5", "7"]];
    for (var i = 0; i < 2; i++) {
        console.log(JSON.stringify(diagWin[i]) + " " + JSON.stringify(currUser));
        pWinCount = 0;
        for (var j = 0; j < 3; j++) {
            if (currUser.includes(diagWin[i][j])) {
                //alert(diagWin[i][j]);
                pWinCount += 1;
                if (pWinCount == 3) {
                    alert(winner + " wins");
                    location.reload();
                }
            }
        }
    }
    draw += 1;
    //alert("draw count "+draw);
}
function drawCheck() {
    var completeBoard = player1.length + player2.length;
    if (draw == 3 && completeBoard == 9) {
        alert("Game draw");
        location.reload();
    }
    else {
        draw = 0;
    }
}
function winner(who) {
    if (who == "p1") {
        if (player1.length >= 3) {
            rowCheck(player1, p1WinCount, "Player 1");
            colCheck(player1, p1WinCount, "Player 1");
            diagCheck(player1, p1WinCount, "Player 1");
            drawCheck();
        }
    }
    else {
        if (player2.length >= 3) {
            rowCheck(player2, p2WinCount, "Player 2");
            colCheck(player2, p2WinCount, "Player 2");
            diagCheck(player2, p2WinCount, "Player 2");
            drawCheck();
        }
    }
}
