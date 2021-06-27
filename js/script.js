// UI Logic
$(document).ready(function(){

    var pizzas = [
        {name: "Pepperoni", id: "pepperoni", img: "./images/pepperoni.png", price: 950}, 
        {name: "Hawaiian", id: "hawaiian", img: "./images/hawaiian.png", price: 550}, 
        {name: "Margherita", id: "margherita", img: "./images/margherita.png", price: 450},
        {name: "Chicken Tikka", id: "chicken", img: "./images/chicken.png", price: 850},
        {name: "Sausage & Kale", id: "sausage", img: "./images/sausage.png", price: 650},
        {name: "Bbq Beef", id: "bbq", img: "./images/bbq.png", price: 750}
    ];



    // Loops over each pizza and adds image to modal
    pizzas.forEach(function(pizza){
        $('#' + pizza.id + '-btn').click(function(){
            $('#pizza-img').prepend('<img src=' + pizza.img + ' id=' + pizza.id + '>');

            $('#pizza-name').prepend('<h2 id=pepperoni-title>' + pizza.name + '</h2>');

            $('#initial-price-pre-text').append('<h2 id="initial-price-text"> Ksh. ' + pizza.price + '</h2>');
        });
        $("#myModal").on('hidden.bs.modal', function(){
            $('#' + pizza.id).remove();

            $('#' + pizza.id + '-title').remove();

            $('#initial-price-text').remove();
        });
    });

    

});

// Append to div of id pizza-name