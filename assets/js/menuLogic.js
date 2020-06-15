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
            imgEl.attr("src", "./assets/img/menu/red_menu.jpg");
            imgEl.attr("alt", "red_menu");
            break;
        case "green":
            buttonEl.css("background-color", "#9AB49D")
            currentButton.css("background-color", "#11AC4C");
            imgEl.attr("src", "./assets/img/menu/green_menu.jpg");
            imgEl.attr("alt", "green_menu");
            break;
        case "blue": 
            buttonEl.css("background-color", "#9AB49D")
            currentButton.css("background-color", "#0093D0");
            imgEl.attr("src", "./assets/img/menu/blue_menu.jpg");
            imgEl.attr("alt", "blue_menu");
            break;
        case "purple":
            buttonEl.css("background-color", "#9AB49D")
            currentButton.css("background-color", "#D0336A");
            imgEl.attr("src", "./assets/img/menu/purple_menu.jpg");
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
    // Print function
    $("#print").on("click", function() {
        const img = $("#menuImg").attr("src");
        const pageLink = "about:blank";
        const pwa = window.open(pageLink, "_new");
        pwa.document.open();
        pwa.document.write(imageToPrint(img));
        pwa.document.close();
    });

    // Download function
    $("#download").on("click", function() {
        const imgAlt = $("#menuImg").attr("alt");
        const imgSrc = $("#menuImg").attr("src");
        $("#dl").attr("download", `${imgAlt}.jpg`);
        $("#dl").attr("href", imgSrc)
    });

    // Modal Buttons
    // Facebook Icon
    $("#facebook").on("click", function() {
        window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblendityhealthy.com&quote=Blend%20It%20Healthy",
        "_blank",
        "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
        );
    });
    
    // Twitter Icon
    $("#twitter").on("click", function() {
        window.open("https://twitter.com/intent/tweet?url=https%3A%2F%2Fblendityhealthy.com&hashtags=&original_referer=https%3A%2F%2Fthawing-reef-17651.herokuapp.com%2Fmenu",
        "_blank",
        "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
        );
    });

    // Pinterest Icon
    $("#pininterest").on("click", function() {
        window.open("https://pinterest.com/pin/create/button/?url=http%3A//blendithealthy.com/images/FPSlides/ABO_MELOPPLE.jpg&media=Blend%20It%20Healthy&description=Blend%20It%20Healthy",
        "_blank",
        "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
        );
    });

    // Mail Icon
    $("#mail").on("click", function() {
        window.open("mailto:" + "arcadia@blendithealthy.com")
    });

    // Print function
    const imageToPrint = src => `<html><head><script>function step1(){\nsetTimeout('step2()', 10);}\nfunction step2(){window.print();window.close()}\n</script></head><body onload='step1()'>\n<img src=${src} /></body></html>`;

    // Open image in a new window
    imgEl.on("click", () => {
        const url = imgEl.attr("src");
        window.open(url, "Image")
    })
});