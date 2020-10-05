function deleted(){
    alert("item removed from cart successfully");
}
function validate(){
    var itemName = document.getElementById("food-name").value;
    var itemPrice =document.getElementById("price").value;
    var itemdate = document.getElementById("date-of-launch").value;
    var itemCategory = document.getElementById("category").value;
    if (itemName == ""){
        alert("name is required");
        return false;
    }
    else if (itemPrice == ""){
        alert("price is required");
        return false;
    }
    else if (itemdate == ""){
        alert("date of launch is required");
        return false;
    }
    else if (itemCategory == "0"){
        alert("category is required");
        return false;
    }
    alert(completed);
}