document.body.style.backgroundColor="white";
let toggle_state="light";
function toggler()
{
    if(toggle_state=="light")
    {
        document.body.style.backgroundColor="black";
        document.querySelector(".mybutton").innerHTML="Toggle Light Mode";
        toggle_state="dark";
        console.log("Successfully toggled to dark mode.");
    }
    else
    {
        document.body.style.backgroundColor="white";
        document.querySelector(".mybutton").innerHTML="Toggle Dark Mode";
        toggle_state="light";
        console.log("Successfully toggled to light mode.");
    }
}
function clear_func()
{
    document.getElementById("#namebar").innerHTML="";
    document.getElementById("#numbar").innerHTML="";
    document.getElementById("#emailbar").innerHTML="";
    document.getElementById("#address").innerHTML="";
}
function submit_func()
{
    alert("Data successfully entered!");
}