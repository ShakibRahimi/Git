function getStuff()
{
    document.querySelector('#tuna').ondblclick = talk; // ba in mishe select kard ba id ya class
}
function talk()
{
    alert("Salam");
}
window.onload = getStuff;