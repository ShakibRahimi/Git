function getStuff() {
    var list = document.querySelectorAll('#tuna'); // arraye entekhabe id ya class ro bar migardoonad, selector ast
    // list[0].onclick = talk;  evente onclick ro be tabye talk nesbat midim
   // list[1].onclick = talk;
    for(var i=0; i<list.length; i++)
    {
        list[i].onclick = talk;
    }
}
function talk() {
    alert("Salam");
}
window.onload = getStuff;