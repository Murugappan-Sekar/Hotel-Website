
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
    if (!confirm("closing destroys unsaved changes.Do you want to continue?"))
        return false;
    deleteallfood();
    document.getElementById("myNav").style.height = "0%";
    //document.getElementById("searchhotel").style.zIndex=5;
    //document.getElementById("searchbutton").style.zIndex=5;
}

var current;
function updateCount() {

    current = parseInt(JSON.parse(localStorage.getItem("counter")));
    //alert("updating count : "+current);
    return true;
}
function add() {
    var dishArea = document.getElementById("disharea");
    //creating outer div
    var parentDiv = document.createElement("div");
    parentDiv.id = "parent"+current;
    parentDiv.title = "parent area";
    alert("adding "+parentDiv.id);
    parentDiv.className = "form-group";
    dishArea.appendChild(parentDiv);

    //creating div for food
    var fDiv = document.createElement("div");
    fDiv.className = "row";
    parentDiv.appendChild(fDiv);

    //foodname column
    var nCol = document.createElement("div");
    nCol.className = "col-xs-4";

    //foodprice column
    var pCol = document.createElement("div");
    pCol.className = "col-xs-4";

    //button column
    var bCol=document.createElement("div");
    bCol.className="col-xs-4";
    //appending columns
    fDiv.appendChild(nCol);
    fDiv.appendChild(pCol);
    fDiv.appendChild(bCol);
    //foodname
    var foodName = document.createElement("input");
    foodName.type = "text";
    foodName.id = "foodName" + current;
    foodName.className = "form-control";
    foodName.name = "foodName";
    foodName.title = "foodname";
    foodName.placeholder = "enter food name"
    foodName.required = true;
    nCol.appendChild(foodName);

    //foodprice
    var foodPrice = document.createElement("input");
    foodPrice.type = "number";
    foodPrice.id = "foodPrice" + current;
    foodPrice.className = "form-control";
    foodPrice.name = "foodPrice";
    foodPrice.placeholder = "Enter price"
    foodPrice.required = true;
    foodPrice.title = "foodprice";
    pCol.appendChild(foodPrice);
    //alert("end of adding "+foodName.id+"   "+foodPrice.id);
    localStorage.setItem("lastfood", JSON.stringify(foodName.id));
    localStorage.setItem("lastcost", JSON.stringify(foodPrice.id));

    //delete button
    var delButton=document.createElement("input");
    delButton.type="button";
    delButton.id="del"+current;
    delButton.className="btn btn-danger";
    delButton.value="Delete";
    delButton.onclick=function(){deletefood(this.id);};
    bCol.appendChild(delButton);
    return true;
}
function checked(pos) {
    //alert("Checking "+pos);
    var foodname = document.getElementById(JSON.parse(localStorage.getItem("lastfood")));
    var foodprice = document.getElementById(JSON.parse(localStorage.getItem("lastcost")));
    if (foodname.value == "" || foodprice.value == "") {
        return false;
    }

    return true;
}
function addDish() {

    updateCount();
    //alert("enter");
    var prev = current - 1;
    if (current == 0)
    { add(current); setCount(1); }
    else if (checked(prev))
    { add(current); setCount(1); }
    else
        alert("Previous textboxes must be filled before adding new dish");
    return true;
}
function setCount(change) {

    localStorage.setItem("counter", JSON.stringify(current + change));
    return true;
}
function deleteallfood() {
    localStorage.setItem("counter", JSON.stringify(0));
    var range = document.getElementById("disharea");
    while (range.firstChild) {
        range.removeChild(range.firstChild);
    }
    document.getElementById("hotelform").reset();
    return true;
}
function resetall() {
    if (confirm("Do you want to reset?This step cannot be undone.")) {
        deleteallfood();
    }
}
function deletefood(cur)
{
    cur=parseInt(cur.slice(-1));
    alert("delete food");
    var curRow="parent"+cur;
    var range=document.getElementById(curRow);
   // while (range.firstChild) {
     //   alert("dele1");
       // range.removeChild(range.firstChild);
    //}
    range.remove();
    updateId(cur);
    alert("del over");
    return true;

}
function updateId(cur)
{

    updateCount();
    for(i=(cur+1);i<current;i++)
    {
        var prev=i-1;
        document.getElementById("del"+i)="del"+prev;
        document.getElementById("foodPrice"+i)="foodPrice"+prev;
        document.getElementById("foodName"+i)="foodName"+prev;
        document.getElementById("parent"+i)="parent"+prev;
    }
    setCount(-1);
    updateCount();
    alert("update over "+current);
    return true;
}