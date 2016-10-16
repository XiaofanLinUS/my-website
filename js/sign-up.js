$("#sign-up").click(function(event) {
    event.preventDefault();
    $("#overlay").fadeIn();
});

$("#sign-up-form .exit-close").click(function(event) {
    $("#overlay").fadeOut();
});
