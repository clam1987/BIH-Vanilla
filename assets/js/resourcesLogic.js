$(document).ready(() => {
    const cardListEl = $("#cardList");
    resourceCards1.map(resource => {
        const $li = $("<li>");
        const $divCard = $("<div>");
        const $divRow = $("<div>");
        const $divCol = $("<div>");
        const $divCol2 = $("<div>");
        const $img = $("<img>");
        const $divCardBody = $("<div>");
        const $h5 = $("<h5>");
        const $p = $("<p>");
        const $p1 = $("<p>");
        const $a = $("<a>");
        const $ulBold = $(`<strong><u>Read Article >>></u></strong>`)
        $p.addClass("card-text text-right");
        $p.append($ulBold);
        $a.attr("href", resource.link);
        $a.append($p);
        $p1.addClass("card-text");
        $p1.text(resource.p1)
        $p1.append($a);
        $h5.addClass("card-title");
        $h5.text(resource.title)
        $h5.append($p1);
        $divCardBody.addClass("card-body");
        $divCardBody.append($h5);
        $divCol.addClass("col-md-8");
        $divCol.append($divCardBody);
        $divRow.addClass("row no-gutters");
        $divRow.append($divCol);
        $img.addClass("card-img");
        $img.attr("src", resource.img);
        $img.attr("alt", resource.name);
        $divCol2.addClass("col-md-4");
        $divCol2.append($img);
        $divRow.append($divCol2);
        $divCard.addClass("card mb-3 cardTarget")
        $divCard.css("max-width", "720px");
        $divCard.append($divRow);
        $li.append($divCard);
        cardListEl.append($li);
    });
    $("#resourceBtn").on("click", () => {
        $("#resourceBtn").hide();
        resourceCards2.map(resource => {
            const $li = $("<li>");
            const $divCard = $("<div>");
            const $divRow = $("<div>");
            const $divCol = $("<div>");
            const $divCol2 = $("<div>");
            const $img = $("<img>");
            const $divCardBody = $("<div>");
            const $h5 = $("<h5>");
            const $p = $("<p>");
            const $p1 = $("<p>");
            const $a = $("<a>");
            const $ulBold = $(`<strong><u>Read Article >>></u></strong>`)
            $p.addClass("card-text text-right");
            $p.append($ulBold);
            $a.attr("href", resource.link);
            $a.append($p);
            $p1.addClass("card-text");
            $p1.text(resource.p1)
            $p1.append($a);
            $h5.addClass("card-title");
            $h5.text(resource.title)
            $h5.append($p1);
            $divCardBody.addClass("card-body");
            $divCardBody.append($h5);
            $divCol.addClass("col-md-8");
            $divCol.append($divCardBody);
            $divRow.addClass("row no-gutters");
            $divRow.append($divCol);
            $img.addClass("card-img");
            $img.attr("src", resource.img);
            $img.attr("alt", resource.name);
            $divCol2.addClass("col-md-4");
            $divCol2.append($img);
            $divRow.append($divCol2);
            $divCard.addClass("card mb-3 cardTarget")
            $divCard.css("max-width", "720px");
            $divCard.append($divRow);
            $li.append($divCard);
            cardListEl.append($li);
        });
    });
});