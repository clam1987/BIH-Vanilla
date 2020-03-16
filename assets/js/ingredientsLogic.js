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
    $row.addClass("row fruitRow active");
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
$(".pagination").append(`<li class="page-item current-page active"><a class='page-link' href='#'>${1}</a></li>`); // Add first page marker

// Loop to insert page number for each sets of items equal to page limit
for (let i = 2; i <= totalPages; i++) {
  $(".pagination").append(`<li class="page-item current-page"><a class='page-link' href='#'>${i}</a></li>`); // Add the rest of the pages
};

// Adding the next button after the pages
$(".pagination").append(`<li class="page-item next-page"><a class='page-link' href='#' aria-label=Next><span aria-hidden=true>Next &raquo;</span></a></li>`);

// Function to display based items based on page number that was clicked
$(".pagination li.current-page").on("click", function() {
  // Check if page number that was clicked on is the current page that is being displayed
  if ($(this).hasClass('active')) {
    return false; // Return false (i.e., nothing to do, since user clicked on the page number that is already being displayed)
  } else {
    let currentPage = $(this).index(); // Get the current page number
    $(".pagination li").removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
    $(this).addClass('active'); // Add the 'active' class status to the page that was clicked on
    $("#listContainer li").hide(); // Hide all items in loop, this case, all the list groups
    let total = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on
    // Loop through total items, selecting a new set of items based on page number
    for (let i = total - limitPerPage; i < total; i++) {
      $("#listContainer li:eq(" + i + ")").show(); // Show items from the new page that was selected
    }
  }

});

// Function to navigate to the next page when users click on the next-page
$(".next-page").on("click", function() {
  let currentPage = $(".pagination li.active").index(); // Identify the current active page
  // Check to make sure that navigating to the next page will not exceed the total number of pages
  if (currentPage === totalPages) {
    return false; // Return false (i.e., cannot navigate any further, since it would exceed the maximum number of pages)
  } else {
    currentPage++; // Increment the page by one
    $(".pagination li").removeClass('active'); // Remove the 'active' class status from the current page
    $("#listContainer li").hide(); // Hide all items in the pagination loop
    let total = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // Loop through total items, selecting a new set of items based on page number
    for (let i = total - limitPerPage; i < total; i++) {
      $("#listContainer li:eq(" + i + ")").show(); // Show items from the new page that was selected
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
  }
});

// Function to navigate to the previous page when users click on the previous-page
$(".previous-page").on("click", function() {
  console.log("hello")
  let currentPage = $(".pagination li.active").index(); // Identify the current active page
  // Check to make sure that users is not on page 1 and attempting to navigating to a previous page
  if (currentPage === 1) {
    return false; // Return false (i.e., cannot navigate to a previous page because the current page is page 1)
  } else {
    currentPage--; // Decrement page by one
    $(".pagination li").removeClass('active'); // Remove the 'activate' status class from the previous active page number
    $("#listContainer li").hide(); // Hide all items in the pagination loop
    let total = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // Loop through total items, selecting a new set of items based on page number
    for (let i = total - limitPerPage; i < total; i++) {
      $("#listContainer li:eq(" + i + ")").show(); // Show items from the new page that was selected
    }

    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
  }
});

});