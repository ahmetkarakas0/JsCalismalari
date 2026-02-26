// console.log("ahmet");
// console.log(15);
// var x=5;
// var y=4;
// console.log(x+y);

// let gun=11;
// let ay=10;
// let year=2001;
// console.log(gun,ay,year);
// console.log(gun+"."+ay+"."+year);
// console.log("Ahmet Karakaş: "+gun+".günde "+ay+".ayda "+year+" yılında doğmuştur."); -ü-


//*****STRING İFADELER****

let fname = "Ahmet";
let sName = "Karakas";
let nameSname= fname + " " + sName ;
console.log(nameSname);

//Karakaterleri Çekme 
console.log(nameSname[2]);
console.log(nameSname.length);
console.log(nameSname.toUpperCase());
console.log(nameSname);

let smallfnameSname=nameSname.toLowerCase();
console.log(smallfnameSname);

let index=nameSname.indexOf('e');
console.log("'e' harfinin bulunduğu index:"+index);

let firstToEnd=nameSname.slice(2,7);
console.log(firstToEnd);

let yerDegistir=nameSname.replaceAll(' ',31);
console.log(yerDegistir);

let yukseklik=5;
const piSayisi=3.14;
console.log(yukseklik,piSayisi);
let koniAlani=piSayisi*yukseklik**2/3;
console.log(koniAlani);

let kalan =yukseklik %4;
console.log(kalan);

let sonuc = yukseklik**2*(yukseklik-10 + (yukseklik*2));
console.log(sonuc);

console.log(nameSname+" "+yukseklik);
console.log(nameSname*yukseklik);
