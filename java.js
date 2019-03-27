function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 55) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label").innerHTML = width * 1 + '%';
        }
    }
}

function move1() {
    var elem = document.getElementById("myBar1");
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 30) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label1").innerHTML = width * 1 + '%';
        }
    }
}
function move2() {
    var elem = document.getElementById("myBar2");
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label2").innerHTML = width * 1 + '%';
        }
    }
}
function move3() {
    var elem = document.getElementById("myBar3");
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 48) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label3").innerHTML = width * 1 + '%';
        }
    }
}
function move4() {
    var elem = document.getElementById("myBar4");
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 25) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label4").innerHTML = width * 1 + '%';
        }
    }
}