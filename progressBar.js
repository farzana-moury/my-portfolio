window.addEventListener("load", move1);
window.addEventListener("load", move2);
window.addEventListener("load", move3);
window.addEventListener("load", move4);
window.addEventListener("load", move5);
window.addEventListener("load", move6);
window.addEventListener("load", move7);
window.addEventListener("load", move8);

function move1() {
    var bars = document.getElementsByClassName("progressBar1");

    for (var i = 0; i < bars.length; i++) {
        var elem = bars[i];
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 95) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
}

function move2() {
    var bars = document.getElementsByClassName("progressBar2");

    for (var i = 0; i < bars.length; i++) {
        var elem = bars[i];
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 90) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
}

function move3() {
    var bars = document.getElementsByClassName("progressBar3");

    for (var i = 0; i < bars.length; i++) {
        var elem = bars[i];
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 90) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
}

function move4() {
    var bars = document.getElementsByClassName("progressBar4");

    for (var i = 0; i < bars.length; i++) {
        var elem = bars[i];
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 85) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
}

function move5() {
    var bars = document.getElementsByClassName("progressBar5");

    for (var i = 0; i < bars.length; i++) {
        var elem = bars[i];
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
}

function move6() {
    var bars = document.getElementsByClassName("progressBar6");

    for (var i = 0; i < bars.length; i++) {
        var elem = bars[i];
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
}

function move7() {
    var bars = document.getElementsByClassName("progressBar7");

    for (var i = 0; i < bars.length; i++) {
        var elem = bars[i];
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 95) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
}

function move8() {
    var bars = document.getElementsByClassName("progressBar8");

    for (var i = 0; i < bars.length; i++) {
        var elem = bars[i];
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width >= 90) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    }
}