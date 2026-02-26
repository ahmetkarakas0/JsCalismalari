const arem = document.querySelector('a');

arem.innerText = "Ahmet Karakas"
arem.setAttribute("href","https:/ahmetkarakas.com") //belirtilen attributea hangi içeriğin geleceğini belirtir.
console.log(arem.getAttribute("href"))
arem.style.backgroundColor = "yellow"
arem.setAttribute("href","google.com")
const secici = document.querySelectorAll(".ranam p");

secici.forEach( x => {
    if(x.textContent.includes("ahmet")) {
        x.classList.add("ahmet");
    }
    else if(x.textContent.includes("locker")) {
        x.classList.add("locker");
    }
    else if(x.textContent.includes("error")) {
        x.classList.add("error");
    }
    else{
        console.log(x.textContent);
    }
})