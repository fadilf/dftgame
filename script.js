function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

var totalImages = 61;
var rows = document.getElementsByClassName("row");
var spacialOrder, freqOrder;

function newGame() {
    spacialOrder = [];
    for (var i = 0; i < 4; i++) {
        var newImage = -1;
        while ((newImage == -1) && !(newImage in spacialOrder)) {
            newImage = Math.floor(Math.random() * (totalImages - 1));
        }
        spacialOrder.push(newImage);
    }
    freqOrder = [...spacialOrder];
    shuffleArray(freqOrder)
    
    var row1HTML = "",
        row2HTML = "",
        row3HTML = "";
    for (var i = 0; i < 4; i++) {
        row1HTML += 
        `<div 
            class="row-img" 
            style="background-image:url(spacials/${spacialOrder[i]}.jpg)">
        </div>`;
        row2HTML += 
        `<div 
            class="row-img" 
            style="background-image:url(freqs/${freqOrder[i]}.jpg)">
        </div>`;
        row3HTML += 
        `<div class="row-match">
            <select name="match-${i}">
                <option value="${spacialOrder[0]}">A</option>
                <option value="${spacialOrder[1]}">B</option>
                <option value="${spacialOrder[2]}">C</option>
                <option value="${spacialOrder[3]}">D</option>
            </select>
        </div>`;
    }
    rows[0].innerHTML = row1HTML;
    rows[1].innerHTML = row2HTML;
    rows[2].innerHTML = row3HTML;
}

window.addEventListener('DOMContentLoaded', (event) => {
    newGame();
});

function check() {
    var matchBG = document.getElementsByClassName('row-match');
    for (var i = 0; i < 4; i++) {
        var elem = document.getElementsByName(`match-${i}`)[0];
        var correct = elem.value == freqOrder[i];
        matchBG[i].style.backgroundColor = correct ? "#82db82" : "#e86f6f";
    }
}