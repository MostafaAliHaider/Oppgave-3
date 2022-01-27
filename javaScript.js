console.log("yo")

//I denne oppgaven jobbet jeg med en medstudent Yaye

//oppgave 1
//fjern denne teksten med knappen under
const btn1 = document.getElementById("remove-btn");

//Henter id'en "remove" fra html filen
const p1 = document.getElementById("remove");


//Fjerne teksten over ved å klikke på knappen
btn1.addEventListener("click",()=>{
p1.remove();
});

//oppgave 2
//endre teksten til noe selv valgt ved hjelp av knappen.
const btn2 = document.getElementById("change-btn");
const p2 = document.getElementById("change");

btn2.addEventListener("click", ()=>{
    p2.innerHTML = "Jeg sliter med JavaScript "
})


//Oppgave 3
//skriv ut teksten i input 
const input = document.getElementById("input");
const p3 = document.getElementById("input-text");

input.addEventListener("input", function(){
    p3.innerHTML = input.value;
});

//oppgave 4
//Skrive ut elementene fra myList
const ul = document.getElementById("ul");
const btn4 = document.getElementById("write-list");
console.log(btn4, ul);

btn4.addEventListener("click", function(){
    let myList = ["hey", "how", "u", "doin"];//de ulike punktene

    let li = myList.map(function(liste){
        //liste parameteret som er i functionen over er den som vil bli plassert som et punkt mellom <li> taggene
        return `<li> ${liste}</li>`;
    });

    //under henter vi ul'en fra html og bruker deretter join('') for å ha mellomrom mellom de ulike punktene
    ul.innerHTML = li.join('');

    
});

//Oppgave 5
//hjelp fra https://www.w3schools.com/jsref/prop_element_children.asp
//nytt element
const div = document.getElementById("placeholder");
//Id'en over listen vi kan velge fra
const liste = document.getElementById("select");
//id for knappen
const btn5 = document.getElementById("create");
//id for inputen 
const innput = document.getElementById("text");

//Under har vi en funksjon som skal skrivve ut innput valuen mellom ulike attributter.
btn5.addEventListener('click', function(e){
    
    e.preventDefault();
    if(select.selectedIndex === 0){
        div.innerHTML += "<h2>" + innput.value + "</h2";
        innput.value = null;
    } else if (select.selectedIndex === 1){
        div.innerHTML += "<h3>" + innput.value + "</h3>";
        innput.value = null;
    } else if (select.selectedIndex === 2){
        div.innerHTML += "<span>" + innput.value + "</span>";
        innput.value = null;
    } else if (select.selectedIndex === 3){
        div.innerHTML += "<p>" + innput.value + "</p>";
        innput.value = null;
    }

});


//oppgave 6
//kilder https://stackoverflow.com/questions/34193751/js-remove-last-child
function myFunction(){
    let pick = document.getElementById("list");
    pick.removeChild(pick.lastChild)
};

//failed missions
/* let removePunkt = document.getElementById("remove-li");
let array = document.getElementById("list");

    removePunkt.addEventListener("click", function(event){
    li.removeChild(removePunkt);
    event.stopPropagation();
    }); */


/* function myFunction(){
    let nyListe = document.getElementById("list");
    nyListe.removeLastChild(nyListe.childNodes[0]);
}; */

//oppgave 7

let idName = document.getElementById("name");
let btn7 = document.getElementById("order");

idName.addEventListener("input", disablebtn);

function disablebtn(){
    if (idName.value.length > 4) {
        btn7.disabled = true;
        btn7.style.border = "5px dotted red";
    }else {
        btn7.disabled = false;
        btn7.style.border = '';
    }

}
disablebtn();

//oppgave 8
//velger ut classen children.
const ul8 = document.querySelector('.children');
//under henter jeg id'en color fra html'en
const btn8 = document.getElementById('color');

//Under brukte jeg evenListener for knappen, slik at den kjører funksjonen som skal endre fargene.
btn8.addEventListener('click', changeColor);

function changeColor() {

    let odd = ul8.querySelectorAll('li:nth-child(odd)');
    let even = ul8.querySelectorAll('li:nth-child(even)');
    
    odd.forEach(function(e){
        e.style.border = '5px solid green';
    });
    even.forEach(function(e){
        e.style.border = '5px solid pink';
    });


}






