var pop = document.getElementById("popup");
var fil = document.getElementById("filter");
var head = document.getElementById("head");
var button = document.getElementById("button");
var ff = document.getElementById("fill-form");
var ta = document.getElementById("ta0");
ta.addEventListener("focus", function() {
    var dsec = document.getElementById("dsec");
    dsec.style.borderStyle = "solid";
});


function home() {
    window.open("https://dtthon.deepthought.education/monitor");
}

function explore() {
    window.open("https://dtthon.deepthought.education/myassets/explore");
}

function explore() {
    window.open("https://dtthon.deepthought.education/myassets/explore");
}

function noti() {
    window.open("https://dtthon.deepthought.education/notifications");
}

function profile() {
    window.open("https://dtthon.deepthought.education/user");
}

function tribut() {
    if (pop.style.display == "flex") {
        pop.style.display = "none";
    } else {
        pop.style.display = "flex";
    }
}

function filter() {
    if (fil.style.width === "8%") {
        fil.style.width = "26%";
        head.style.visibility = "visible";
        button.classList.remove("fa-circle-arrow-right");
        button.classList.add("fa-circle-arrow-left");
        ff.style.display = "flex";

    } else {
        fil.style.width = "8%";
        head.style.visibility = "hidden";
        button.classList.remove("fa-circle-arrow-left");
        button.classList.add("fa-circle-arrow-right");
        ff.style.display = "none";
    }
}

function parentdash() {
    window.open("https://dtthon.deepthought.education/parentDashboard");
}

function batches() {
    window.open("https://dtthon.deepthought.education/batches");
}

function cohorts() {
    window.open("https://dtthon.deepthought.education/cohort");
}

function sess() {
    window.open("https://dtthon.deepthought.education/");
}

function art() {
    window.open("https://dtthon.deepthought.education/articles");
}

function qui() {
    window.open("https://dtthon.deepthought.education/quizzes");
}

function side_button1() {
    window.open("https://dtthon.deepthought.education/dtthon/applicant/storyboard/2085");
}

function side_button2() {
    window.open("https://chat.whatsapp.com/LIB71r0lKWBHehHaOqzBf5");
}

function side_button3() {
    window.open("https://dtthon.deepthought.education/toc/calendar/2023/07/15");
}

function side_button4() {
    window.open("https://dtthon.deepthought.education/toc/contact");
}

function apply_now() {
    window.open("https://dtthon.deepthought.education/");
}

function view() {
    window.open("https://dtthon.deepthought.education/");
}

function json() {
    fetch('C:\Users\hp\Desktop\DT\json.json')
        .then(response => response.json())
        .then(jsonData => {
            for (var i = 0; i < jsonData.length; i++) {

            }
        });
}