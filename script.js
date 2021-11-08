const names = ["Happy","Nkosiphandule","Sithembiso","Andiswe","Sophie","Mduduzi","Wandile","Vusi","Precious","Selina","Kagisho","Mhlompheni","Lucky","Lebo","Khumbulani"]
const display = document.getElementById("display");

for (let i= 0; i < names.length; i++ ) {
    display.innerHTML += "<li>" + names[i];
}