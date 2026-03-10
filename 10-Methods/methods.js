const sayilar = [21,97,86,65,54,50];
//JAVASCRİPT FİLTER METHODU
//BURADA FİLTRELEYEREK SEÇİM YAPIYORUM
const demirler = sayilar.filter(number => {
    return number > 53;
})
console.log(demirler);

const student = [
    {name:"ahmet",age:21,point:72,passed:true},
    {name:"veli",age:22,point:62,passed:true},
    {name:"ali",age:22,point:90,passed:false},
    {name:"hamdi",age:22,point:82,passed:false}

]

const gecenler = student.filter(gecenim => {
    return gecenim.passed;
})
console.log(gecenler);

// JS MAP METHODU 
//BURADA DİZİNİN HER ELEMANINA BİR İŞLEM YAPARAK YENİ BİR DİZİ OLUŞTURUYORUM

const mapler = sayilar.map(sayi => {
    return sayi += 10;
})
console.log(mapler);

const maparttir = student.map(stu => {
    if(stu.age > 21 ){
        stu.age += 2;
        return stu;
    }
    else{
        return stu;
    }
})
console.log(maparttir);

//REDUCE METHOD
// BURADA KONDSİYONLARA GÖRE GENEL BİR DEĞER VEYA SAYI ALIYORUM
const stunters = [
    {name:"ahmet",age:21,point:72,passed:true},
    {name:"veli",age:22,point:62,passed:true},
    {name:"ali",age:24,point:90,passed:false},
    {name:"hamdi",age:27,point:82,passed:false}

]

const totalbul = stunters.reduce((value,key) => {
    if(key.age > 22){
        value += key.age;
    }
    return value;
},0) //buradaki sıfır value değerine attığımız başlangıç

console.log(totalbul);

// FIND METHODU
//KONDİSYONU SAĞLAYAN İLK DEĞERİ ALIR YANİ TEK BİR DEĞER ALIR.

const findbul = stunters.find(finder => {
    return finder.age > 21;
})
console.log(findbul);

// FINDINDEX İLE VERİ GÜNCELLEME

const classroom = [
    {name:"ahmet",age:21,point:72,passed:true},
    {name:"veli",age:22,point:62,passed:true},
    {name:"ali",age:24,point:90,passed:false},
    {name:"hamdi",age:27,point:82,passed:false}

]

const indexOfAli= classroom.findIndex(ali => ali.name == "ali");
classroom[indexOfAli].name = "rahim";
console.log(classroom);

//BURADA 65 PUAN ALTI ALANI BULUYORUM VE 12 PUAN VERİYORUM
const indexOfPoint = classroom.findIndex(p50 => p50.point < 65);

classroom[indexOfPoint].point += 12;
console.log(classroom);

// REVERSE VE SORT METHODLARI

const kisilerim= ["ali","ahmet","hamza","cem"];
kisilerim.sort();
kisilerim.reverse();
console.log(kisilerim);

const puanlar = [21,97,86,65,54,5];
puanlar.sort((a,b) => b - a);
console.log(puanlar);

//SIRALAMA YAPIYORUZ
const ogrenciler = [
    {name:"ahmet",age:21,point:72,passed:true},
    {name:"veli",age:22,point:62,passed:true},
    {name:"ali",age:24,point:90,passed:false},
    {name:"hamdi",age:27,point:82,passed:false}

]

// ogrenciler.sort((a,b) => {
//     if(a.point > b.point){
//         return 1;
//     }
//     else if(b.point > a.point){
//         return -1;
//     }
//     else {
//         return 0;
//     }
// })
// console.log(ogrenciler);

// A -B KÜÖÜKTEN BÜYÜĞE B-A BÜYÜKTEN KÜÇÜĞE;

ogrenciler.sort((a,b) => a.point - b.point);
console.log(ogrenciler);

// İÇ İÇE KULLANIM 

const yenileri = [
    {name:"ahmet",age:21,point:72,passed:true},
    {name:"veli",age:22,point:62,passed:true},
    {name:"ali",age:24,point:90,passed:false},
    {name:"hamdi",age:27,point:82,passed:false}

]

const basarililar = yenileri.filter(gecen => gecen.point > 70).sort((a,b) => b.point-a.point).map(gecmis => `Dersi Geçen Öğrenci Adı:${gecmis.name.toUpperCase()} Puanı:${gecmis.point}`);

basarililar.forEach(x => {
    console.log(x);
})
