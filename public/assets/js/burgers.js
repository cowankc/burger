$(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#enterBurger").val().trim(),
            devoured: false
        };
        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("created new burger");
            location.reload();
        });
    });
    $(".uneatenBurger").on("click", function(event) {
        event.preventDefault();

        let id = $(this).data("id");
        let eaten = {
            devoured: 1
        };

        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: eaten
        }).then(function() {
            console.log("burger has been eaten");
            location.reload();
        });
    });

})