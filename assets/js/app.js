// Ingredients Page Results Generate Display
$(document).ready(() => {
  const ulEl = $("#listContainer");
  ingredients.map(ingredient => {
    const $li = $("<li>");
    const $img = $("<img>");
    const $row = $("<row>");
    const $col1 = $("<col>");
    const $col2 = $("<col>");
    const $col3 = $("<col>");
    const $col4 = $("<col>");
    const $a = $("<a>");

    // Image dynamic creation
    $img.addClass("fruitsCollection")
    $img.attr("src", ingredient.img)
    // Col1 Dynamic Creation
    $col1.addClass("col-sm-2 mx-0");
    // Col2 Dynamic Creation
    $col2.addClass("col-sm-3 fruitsText align-self-center colBottom")
    $col2.attr("id", ingredient.id);
    // Row Dynamic Creation
    $row.addClass("row fruitRow")
    $row.attr("id", ingredient.name);

    // Appending
    $col1.append($img);
    $row.append($col1);
    $li.append($row);
    ulEl.append($li);
    })
    

  
  
})

