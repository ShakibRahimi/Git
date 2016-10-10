function getStuff()
{
    document.querySelector('#tuna').onclick = talk; // ba in mishe select kard ba id ya class
}
function talk()
{
    alert("Salam");
}
window.onload = getStuff;