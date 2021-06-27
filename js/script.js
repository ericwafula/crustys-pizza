// UI Logic
$(document).ready(function(){

    var pizzas = [
        {id: "pepperoni", img: "./images/pepperoni.png"}, 
        {id: "hawaiian", img: "./images/hawaiian.png"}, 
        {id: "margherita", img: "./images/margherita.png"},
        {id: "chicken", img: "./images/chicken.png"},
        {id: "sausage", img: "./images/sausage.png"},
        {id: "bbq", img: "./images/bbq.png"}
    ];

    // Loops over each pizza and adds image to modal
    pizzas.forEach(function(pizza){
        $('#' + pizza.id + '-btn').click(function(){
            $('#pizza-img').prepend('<img src=' + pizza.img + ' id=' + pizza.id + '>');
        });
        $("#myModal").on('hidden.bs.modal', function(){
            $('#' + pizza.id).remove();
        });
    });

    

});

// $('#myModal').on('hidden.bs.modal', function () {
//     $('#pizza-img').hide();
// })

// $('#pizza-img').prepend($('<img>',{id:'pepperoni-img',src:'./images/Pepperoni.png'}));