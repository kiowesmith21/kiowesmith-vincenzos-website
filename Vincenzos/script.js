
//cart total
var cartTotal = 0;
var itemPrice;

//add item to cart when clicking the add button
function newElement(name, price, priceNumber) {

    var li = document.createElement("li");

    var n = document.createTextNode(name);
    var p = document.createTextNode(price);
    var space = document.createTextNode(" ..... ");

    li.appendChild(n);
    li.appendChild(space);
    li.appendChild(p);

    //add a remove function to the list item
    li.onclick = function() {

        itemPrice = priceNumber;
        //decrease the price
        cartTotal -= itemPrice;

        //display new price
        var newTotal = cartTotal.toFixed(2);
        console.log(newTotal);
        document.getElementById("price-total").innerHTML = "$" + newTotal;

        //remove the list item
        li.parentNode.removeChild(li);
    };

    //adding up cart total
    cartTotal += priceNumber;
    
    var fixedTotal = cartTotal.toFixed(2);
    console.log(fixedTotal);

    //add the list item to the list
    document.getElementById("cart-list").appendChild(li);

    //display cart total
    document.getElementById("price-total").innerHTML = "$" + fixedTotal;
}

