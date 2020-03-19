// Submit Button
$(".subBtn").on("click", function() {
    const footerInputVal = $(".footerInput").val();
    if (validateEmail(footerInputVal)) {
        $(".footerInput").hide();
        $(".subBtn").hide();
        console.log("Thank you for signing up")
        $(".col-md-6").append($(`<h3 style="text-align: center;">Thank you for subscribing</h3>`))
        // In the future, this will be logic to log into the database
    } else {
        console.log("you must enter a valid email")
    }
});

// Validation Function
const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };