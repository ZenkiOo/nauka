"use strict";
function checkAge(){
    return (check > 18) ? true : false;
}
let check = prompt ("Сколько вам лет?","");
if (checkAge() == true) {
    alert("nice");
}else{
    alert("suck");
}