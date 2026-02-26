const hata=document.querySelectorAll("p");
console.log(hata);
console.log(hata[0]);

const fraw = document.getElementById("rawa");
console.log(fraw)

const geta = document.getElementsByClassName("error");
console.log(geta);

const salma = document.querySelectorAll(".adam p");
// salma.innerText += "Ahmettt"
salma.forEach(x=>{
    console.log(x.innerText);
})

const remzi = document.querySelector(".adam")
console.log(remzi.innerHTML);
console.log(remzi.innerText)
remzi.innerHTML += "<h1>Ne ara?</h1>";

console.log(remzi.innerHTML);

const getsabri = document.querySelector(".adam p:nth-child(2)");
getsabri.innerText="Jan Karakaş";