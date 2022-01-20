console.log("yo")


//oppgave 1
//fjern denne teksten med knappen under
const btn1 = document.getElementById("remove-btn");

//kommentar
const p1 = document.getElementById("remove");


//Fjerne knapp 1
btn1.addEventListener("click",()=>{
p1.remove();
});

//oppgave 2
//endre teksten til noe selv valgt ved hjelp av knappen.
const btn2 = document.getElementById("change-btn");
const p2 = document.getElementById("change");

btn2.addEventListener("click", ()=>{
    p2.innerHTML = "Jeg elsker JavaScript :)"
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
    let myList = ["liste1", "liste2", "liste3"];
    
})

//Oppgave 5
