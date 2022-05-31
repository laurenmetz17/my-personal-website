const headshot = document.getElementById("headshot");


function thatsMe() {
    alert("That's me!")
}

//headshot.setAttribute("onclick",thatsMe());

headshot.addEventListener("click",thatsMe);