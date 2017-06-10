
function resetForm() {
    var x = document.getElementById("hotelform");
    x.reset();
    localStorage.clear();
    localStorage.setItem("counter", JSON.stringify(0));
    openNav();
    return true;
}
function openNav() {
    //document.getElementById("searchhotel").style.zIndex=-1;
    //document.getElementById("searchbutton").style.zIndex=-1;
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    //document.getElementById("searchhotel").style.zIndex=5;
    //document.getElementById("searchbutton").style.zIndex=5;
}

var current;
function updateCount() {
    current = parseInt(JSON.parse(localStorage.getItem("counter")));
    return true;
}
function add(identity) {
    var dishArea = document.getElementById("disharea");
    //creating outer div
    var parentDiv = document.createElement("div");
    parentDiv.id = "" + identity;
    parentDiv.className = "form-group";
    dishArea.appendChild(parentDiv);

    //creating div for food
    var fDiv = document.createElement("div");
    fDiv.className = "row";
    parentDiv.appendChild(fDiv);

    //foodname column
    var nCol = document.createElement("div");
    nCol.className = "col-xs-6";

    //foodprice column
    var pCol = document.createElement("div");
    pCol.className = "col-xs-6";

    //appending columns
    parentDiv.appendChild(nCol);
    parentDiv.appendChild(pCol);

    //foodname
    var foodName = document.createElement("input");
    foodName.type = "text";
    foodName.id = "foodName";
    foodName.className = "form-control";
    foodName.name = "foodName";
    foodName.placeholder = "enter food name"
    foodName.required = true;
    nCol.appendChild(foodName);

    //foodprice
    var foodPrice = document.createElement("input");
    foodPrice.type = "number";
    foodPrice.id = "foodPrice";
    foodPrice.className = "form-control";
    foodPrice.name = "foodPrice";
    foodPrice.placeholder = "Enter price"
    foodPrice.required = true;
    pCol.appendChild(foodPrice);
    return true;
}
function addDish() {

    updateCount();
    //alert("enter");
    alert("count is " + current);
    current++;
    add(current);
    setCount(1);

    return true;
}
function setCount(change) {
    localStorage.setItem("counter", JSON.stringify(current + 1));
    return true;
}