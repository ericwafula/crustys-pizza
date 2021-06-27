// UI Logic
$(document).ready(function(){

    var pizzas = [
        {name: "Pepperoni", id: "pepperoni", img: "./images/pepperoni.png"}, 
        {name: "Hawaiian", id: "hawaiian", img: "./images/hawaiian.png"}, 
        {name: "Margherita", id: "margherita", img: "./images/margherita.png"},
        {name: "Chicken Tikka", id: "chicken", img: "./images/chicken.png"},
        {name: "Sausage & Kale", id: "sausage", img: "./images/sausage.png"},
        {name: "Bbq Beef", id: "bbq", img: "./images/bbq.png"}
    ];



    // Loops over each pizza and adds image to modal
    pizzas.forEach(function(pizza){
        $('#' + pizza.id + '-btn').click(function(){
            $('#pizza-img').prepend('<img src=' + pizza.img + ' id=' + pizza.id + '>');

            $('#pizza-name').prepend('<h2 id=pepperoni-title>' + pizza.name + '</h2>');
        });
        $("#myModal").on('hidden.bs.modal', function(){
            $('#' + pizza.id).remove();

            $('#' + pizza.id + '-title').remove();
        });
    });

    

});

// Append to div of id pizza-name