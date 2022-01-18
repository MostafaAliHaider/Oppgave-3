console.log("yo")


//oppgave 1
//fjern denne teksten med knappen under
const btn1 = document.getElementById("remove-btn");
console.log(btn1);
//kommentar
const p1 = document.getElementById("remove");
console.log(p1);

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
console.log(btn2, p2);

//Oppgave 3
//skriv ut teksten i input 
const input = document.getElementById("input");
const p3 = document.getElementById("input-text");
console.log(input,p3);
input.addEventListener("input", function(){
    p3.innerHTML = input.value;
});

