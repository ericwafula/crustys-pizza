// Business Logic
// Name constructor
function Contact(first, last, phone, email){
    this.firstName = first;
    this.lastName = last;
    this.phoneNumber = phone;
    this.emailAddress = email;
    this.address = [];
}

// Name prototype
Contact.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

// pizza constructor
function Pizza(size, quantity, crust, orderType){
    this.size = size;
    this.quantity = quantity;
    this.crust = crust;
    this.orderType = orderType;
}

Pizza.prototype.total = function(price){
    return price * this.quantity;
}


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

    var pizzaPrice;


    // Loops over each pizza and adds image to modal
    pizzas.forEach(function(pizza){
        $('#' + pizza.id + '-btn').click(function(){
            $('#pizza-img').prepend('<img src=' + pizza.img + ' id=' + pizza.id + '>');

            $('#pizza-name').prepend('<h2 id=pepperoni-title>' + pizza.name + '</h2>');

            $('#initial-price-pre-text').append('<h2 id="initial-price-text"> Ksh. ' + pizza.price + '</h2>');

            pizzaPrice = pizza.price;
        });
        $("#myModal").on('hidden.bs.modal', function(){
            $('#' + pizza.id).remove();

            $('#' + pizza.id + '-title').remove();

            $('#initial-price-text').remove();

        });

    });


    $("form").submit(function(event){
        event.preventDefault();

        var size = $("input:radio[name=size]:checked").val();
        var crust = $("#select-crust").val();
        var quantity = $("#quantity").val();
        var orderType = $("#order-type").val();
        var firstName = $("#first-name").val();
        var lastName = $("#last-name").val();
        var emailAddress = $("#email-address").val();
        var phoneNumber = $("#phone").val();
        var county = $("#county").val();
        var address = $("#address").val();

        var newName = new Contact(firstName, lastName, phoneNumber, emailAddress);

        var newPizza = new Pizza(size, quantity, crust, orderType);


        if (newPizza.size === "large"){
            if (newPizza.crust === "cryspy"){
                $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300));
            }else if (newPizza.crust === "stuffed"){
                $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + 100));
            }else if (newPizza.crust === "gluten-free"){
                $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + 200));
            }
        }else if (newPizza.size === "medium"){
            if (newPizza.crust === "cryspy"){
                $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150));
            }else if(newPizza.crust === "stuffed"){
                $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150 + 100));
            }else if (newPizza.crust === "gluten-free"){
                $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150 + 150));
            }
        }else{
            if (newPizza.crust === "cryspy"){
                $("#total-output").text("Total: " + newPizza.total(pizzaPrice));
            }else if(newPizza.crust === "stuffed"){
                $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 50));
            }else if(newPizza.crust === "gluten-free"){
                $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 100));
            }
        }
        
        var url = "ft-checkout.html";

        $("#checkout").click(function(){
            $(location).attr('href',url);
        });

    });

});

// create name, contact, address and pizza constructors
// Cryspy, Stuffed, Gluten-free
