function getStuff()
{
    document.querySelector('#tuba').onclick = talk;
}
function talk()
{
    alert("Salam");
}
window.onload = getStuff;