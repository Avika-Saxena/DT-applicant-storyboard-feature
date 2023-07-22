var car1 = document.querySelector(".carousel");
var count = 0;


function forw() {
    if (count < 9) {
        move_for(count);
        count++;
    } else {
        count = 0;
        move_for(count);
    }
}

function move_for(num) {
    let margin = (33 + (num * 33));
    car1.style.marginLeft = "-" + margin + "%";
}

function back() {
    let margin;
    if (count != 0) {
        count--;
        move_back(count);
    } else {
        count = 9;
        move_back(count);
    }
}

function move_back(num) {
    let margin = ((num * 33) - 33);
    car1.style.marginLeft = "-" + margin + "%";
}