$(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#burgerBox").val().trim(),
            devoured: false
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("created new burger");
            location.reload();
        })
    })
})