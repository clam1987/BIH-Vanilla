// Ingredients Page Results Generate Display
$(document).ready(() => {

  // Results row 1
  const ulEl = $("#listContainer");
  ingredients.map(ingredient => {
    // console.log(ingredient.styleBorder)
    // Creating elements
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
    });
  
// Pagination Logic 
const numberOfItems = $("#listContainer").children().length; // Get total number of items that will be paginated
// let numberOfItems = $("#listContainer li").length
// console.log(numberOfItems)
const limitPerPage = 9; // Limit of items per page
$("#listContainer li:gt(" + (limitPerPage - 1) + ")").hide(); // Hide all other items except the 9
const totalPages =Math.round(numberOfItems / limitPerPage); // Total number of pages
$(".pagination").append(`<li class="page-item current-page"><a class='page-link' href='#'>${1}</a></li>`); // Add first page marker

// Loop to insert page number for each sets of items equal to page limit
for (let i = 2; i <= totalPages; i++) {
  $(".pagination").append(`<li class="page-item next-page"><a class='page-link' href='#'>${i}</a></li>`); // Add the rest of the pages
};

// Adding the next button after the pages
$(".pagination").append(`<li class="page-item"><a class='page-link' href='#' aria-label=Next><span aria-hidden=true>Next &raquo;</span></a></li>`);

// Function to display based items based on page number that was clicked
$(".pagination li.current-page").on("click", () => {
  // console.log($(this).hasClass("active"));
  // console.log("hello world")
  if ($(this).hasClass("active")) {
    return false;
  } else {
    let currentPage = $(this).index(); // Get the current page number
    console.log(currentPage);
    $(".pagination li").removeClass("active"); // Remove class active to render new page
    $(this).addClass("active"); // Add active class to page that was click
    $("#listContainer li").hide() // Hide all items in loop
    let total = limitPerPage * currentPage // Get the total number of items up to the page number that was clicked on

    // Loop through total items, selecting a new set of items based on number of page
    for (let i = total - limitPerPage; i < total; i++) {
      $("#listContainer li:eq(" + i + ")").show(); // Show items from the new page that was selected
    }
  }
});

$(".next-page").on("click", () => {
  let currentPage = $(".pagination li.active").index();
  if (currentPage === totalPages) {
    return false;
  } else {
    currentPage++;
    $(".pagination li").removeClass("active");
    $("#listContainer li").hide();
    let total = limitPerPage * currentPage;

    for (let i = total - limitPerPage; i < total; i++) {
      $("#listContainer li:eq(" + i + ")").show();
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
  };
});

$(".previous-page").on("click", () => {
  let currentPage = $(".pagination li.active").index();
  if (currentPage === 1) {
    return false;
  } else {
    currentPage--;
    $(".pagination li").removeClass("active");
    $("#listContainer li").hide();
    let total = limitPerPage * currentPage;

    for (let i = total - limitPerPage; i < total; i++) {
      $("#listContainer li:eq(" + i + ")").show();
    }
    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
  }
});

});