function strings()
{
var str1 = document.getElementById("initString").value;
var str2 = document.getElementById("secondString").value;

var cat = str1 + str2; //Adds together 
document.getElementById("updateString").innerHTML = "concatenated str = " + cat;
var repJC  = str1.replace(/ina/, "now");

var splitStr = str1.split(""); //splits and breaks into individual letters

var revStr = splitStr.reverse(); //Makes the letters go in reverse order

var joinStr = revStr.join(""); //Joins the letters back together while still backwards 
alert(joinStr); //Shows the results 
}
