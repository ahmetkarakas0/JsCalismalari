const dikdortgen = (a1,b1) => {
    let alani = a1*b1;
    alani = String(alani);
    return alani;
}
const newBytes = dikdortgen(2,3);
console.log(newBytes);

// EĞER TEK VERİ VARSA YANİ PARAMETRE VARSA PARANTEZE GEREK YOK !!!

const kareAlani = a1 => {
    let alani = a1**2;
    alani = String(alani);
    return alani;
}

const kareAlanim = kareAlani(3);
console.log(kareAlanim);


const karesi = any => any**2;

console.log(karesi(3));

const vergiGirisi = (urunler,vergiOrani) => {
    let total = 0;
    for(let i=0;i<urunler.length;i++){
        if(typeof(urunler[i]) == "string"){
            break;
        }
        total += urunler[i] + urunler[i]*vergiOrani;
    }
    return total;
}

urunler = [10,20,30,"ahmet"];
console.log(vergiGirisi(urunler,0.1));

const ahmetkarassss = a => console.log(a);
ahmetkarassss("ss");

const a = (callBacka) => {
    let yas=40;
    callBacka(yas);
};

a((value) => {
    console.log(value);
}); 
 
let ogrencilerim = ["ahmet","ali","boris"];
// ogrencilerim.forEach(function(kisi){
//     console.log(kisi);
// })


const ogrencindex = (isim,indrex) => {
    console.log(`Adı:${isim} İndexi:${indrex}`)

}

ogrencilerim.forEach((zar,kar) =>{
    ogrencindex(zar,kar);
    console.log("Öğrenci Geldi.")
})


