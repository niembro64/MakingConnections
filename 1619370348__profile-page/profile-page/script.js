console.log("page loaded...");

var pn = document.querySelector("#profileName")
function changeUserName(){
    // alert("HI THERE")

    pn.innerHTML = "Aeon Flux"
}

var numConnection = 418
var numReq = 2;
function removeCardY(ele){
    // alert("Card")
    var e = document.querySelector(".card-list")
    e.removeChild(ele.parentNode.parentNode)
    
    var b1 = document.querySelector(".badge1")
    var b2 = document.querySelector(".badge2")
    numConnection++;
    numReq--;
    b1.innerHTML = numReq
    b2.innerHTML = numConnection

}

function removeCardX(ele){
    // alert("Card")
    var e = document.querySelector(".card-list")
    e.removeChild(ele.parentNode.parentNode)
    
    var b1 = document.querySelector(".badge1")
    var b2 = document.querySelector(".badge2")
    numReq--;
    b1.innerHTML = numReq
    b2.innerHTML = numConnection

}