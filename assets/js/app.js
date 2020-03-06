// Ingredients Page Results Generate Display
$(document).ready(() => {
  const pagination = $(".pagination")
  pagination.on("click", () => {
    console.log($(this))
  })

  // Results row 1
  const ulEl = $("#listContainer");
  ingredients.map(ingredient => {
    // console.log(ingredient.styleBorder)
    const $li = $("<li>");
    const $img = $("<img>");
    const $row = $("<div>");
    const $col1 = $("<div>");
    const $col2 = $("<div>");
    const $col3 = $("<div>");
    const $col4 = $("<div>");
    const $a = $("<a>");

    // Image dynamic creation
    $img.addClass("fruitsCollection");
    $img.attr("src", ingredient.img);
    // $img.css("border", ingredient.styleBorder)
    $img.attr("style", `border: ${ingredient.styleBorder}`); 
    // Col1 Dynamic Creation
    $col1.addClass("col-sm-2 mx-0");
    // Col2 Dynamic Creation
    $col2.addClass("col-sm-3 fruitsText colBottom");
    $col2.attr("id", ingredient.id);
    $col2.text(ingredient.name);
    $col2.attr("style", `color: ${ingredient.styleTitle}`);
    // Col3 Dynamic Creation
    $col3.addClass("col-sm-3 fruitsDescription text-left align-self-center colBottom2");
    $col3.attr("id", ingredient.id2);
    $col3.attr("style", `color: ${ingredient.styleText}`);
    $col3.text(ingredient.description);
    // Col4 Dynamic Creation
    $col4.addClass("col-sm-4 px-0 align-self-end text-left colBottom3");
    // A class Dynamic Creation
    $a.addClass("colBottom4");
    $a.attr("id", ingredient.id3);
    $a.attr("href", ingredient.link);
    $a.text("Read More >>")
    // Row Dynamic Creation
    $row.addClass("row fruitRow");
    $row.attr("id", ingredient.name);

    // Appending
    $col1.append($img);
    $col4.append($a);
    $row.append($col1, $col2, $col3, $col4);
    // $row.append($col2);
    // $row.append($col3);
    $li.append($row);
    ulEl.append($li);
    })
    
    // Results Row 2
    const ulEl2 = $("#listContainer2");
    

  
  
})

