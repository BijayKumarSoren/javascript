//on Click
function myFunction(){
    var btn = document.getElementById("demo");

    btn.innerHTML = "Hello My Name is Bijay Kumar Soren";
    btn.style.color = "Blue"; 
}

// function myButton(){
//     document.getElementById("bijay").value = "Closed"; 
// }


function myButton() {

    var btn = document.getElementById("bijay");

    if (btn.value == "Opened") {
        btn.value = "Closed";
        btn.style.color = "red";
        //btn.innerHTML = "Close Curtain";
    }
    else {
        btn.value = "Opened";
        btn.style.color = "green"
        //btn.innerHTML = "Open Curtain";
    }

}