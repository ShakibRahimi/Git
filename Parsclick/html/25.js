function getStuff()
{
    document.querySelector('#tuna').onclick = talk;
}
function talk()
{
    alert("Salam");
}
window.onload = getStuff;