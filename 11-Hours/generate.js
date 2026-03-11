const sayac = document.querySelector('.sayac');

sayac.style.textSize = "25px";
sayac.style.color = "red";
// sayac.style.backgroundColor = "blue";
sayac.style.margin = "0 auto";
sayac.style.width = "50%";
const yet = new Date('12/10/1952 9:23:14');
const now = new Date();
console.log(now);
console.log(typeof(now));
console.log(yet);

const farkimillis = now.getTime() - yet.getTime();
console.log(new Date(-farkimillis ));


console.log(now.getSeconds());
console.log(now.getMinutes());
console.log(now.getHours());
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getTime());
console.log(now.getMonth());
console.log(now.getFullYear());

console.log(now.toDateString());
console.log(now.toTimeString());

const zamanlar = () => {
    const yemi = new Date();
    const gun = yemi.getDate();
    const ay = yemi.getMonth();
    const yil = yemi.getFullYear();
    const saat = yemi.getHours();
    const dakika = yemi.getMinutes();
    const salise = yemi.getSeconds();
    sayac.textContent = gun+""+ " "+ay +" "+ yil + "        "+"      Saat:"+" "+saat+":"+dakika+":"+salise;

}

setInterval(zamanlar,1000)