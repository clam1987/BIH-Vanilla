$(document).ready(() => {
    // HTML DOM elements
    const buttonEl = $(".menuBtn");
    const imgEl = $("#menuImg")
    // Button Event for displaying menu logic
    $("#startButton").css("background-color", "#E55538");
    buttonEl.on("click", function() {
    let currentButton = $(this)
    let color = $(this).data("color")
    switch (color) {
        case "red" :
            buttonEl.css("background-color", "#9AB49D")
            currentButton.css("background-color", "#E55538");
            imgEl.attr("src", "./assets/img/menu/red_menu.png");
            imgEl.attr("alt", "red_menu");
            break;
        case "green":
            buttonEl.css("background-color", "#9AB49D")
            currentButton.css("background-color", "#11AC4C");
            imgEl.attr("src", "./assets/img/menu/green_menu.png");
            imgEl.attr("alt", "green_menu");
            break;
        case "blue": 
            buttonEl.css("background-color", "#9AB49D")
            currentButton.css("background-color", "#0093D0");
            imgEl.attr("src", "./assets/img/menu/blue_menu.png");
            imgEl.attr("alt", "blue_menu");
            break;
        case "purple":
            buttonEl.css("background-color", "#9AB49D")
            currentButton.css("background-color", "#D0336A");
            imgEl.attr("src", "./assets/img/menu/purple_menu.png");
            imgEl.attr("alt", "purple_menu");
            break;
        case "yellow":
            buttonEl.css("background-color", "#9AB49D")
            currentButton.css("background-color", "#FEB600");
            imgEl.attr("src", "./assets/img/menu/BYO.jpg");
            imgEl.attr("alt", "BYO");
            break;
        default: 
            return;
    };
    });

    // Button Function for page utility
    // Share function
    $("#share").on("click", function() {
        console.log("hello")
    });

    // Print function
    $("#print").on("click", function() {
        console.log("world");
    });

    // Download function
    $("#download").on("click", function() {
        console.log("hello world");
    });
});