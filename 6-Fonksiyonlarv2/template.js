// const bura = lacin => {
//     console.log("İlk Fonksiyon");
//     let sayilar = [1,2,3];
//     lacin(sayilar);
// }
// bura(saran => {
//     for(let i=0;i<saran.length;i++){
//         console.log(saran[i]);
//     }
// })

// let sarallar = [13,14,15];

// const dengeler = (numara,index) => {
//     console.log(`İndexim:${numara} Adım:${index}`);
// }
// sarallar.forEach((sayi1,sayi2) => {
//     dengeler(sayi2,sayi1);
// });

// const adam = aran => {
//     console.log("Başladık.");
//     let i = "gazilik";
//     return i;
// }
// let kemal = adam();
// console.log(kemal);

// const kemalettin = xw => {
//     return xw;
// }
// console.log(kemalettin(12));


const ulak=document.querySelector('.main');

let ogrenciler = ["ahmet","karakas","ali"]
let html = ``;

ogrenciler.forEach(x =>{
    html += `<li>${x}</li>`
})
console.log(html);

ulak.innerHTML=html;