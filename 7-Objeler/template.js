let users = {
    ad:'Ahmet',
    surname:'Karakas',
    mail:"karakasahmet.5@gmail.com",
    alanlar:["javascript","node.js"]
}

console.log(users);

let anan = users.ad;
console.log(anan);

users.mail = "hertzarts@gmail.com";

console.log(users['mail']);
console.log(typeof users);

let usewrs = {
    ad:'Ahmet',
    surname:'Karakas',
    mail:"karakasahmet.5@gmail.com",
    alanlar:["javascript","node.js"],
    login () {
        console.log("Ogrenci Giriş yaptı.")
    },
    logout(){
        console.log("Öğrenci çıkış yaptı.")
    },
    winter(){
        console.log(this.mail);
    }
}

usewrs.login();
usewrs.logout();
usewrs.alanlar.forEach(deger => {
    console.log(deger);
});
usewrs.winter();

const stack = [
    ["bmw","audi","mercedes"],
    ["musatti","altai","yamaha"]
]

const [cars,[a1,,a2]] = stack; //ÇİFT VİRGÜL ELEMAN ATLATIR.
console.log(cars);
console.log(a2);

//DİZİDE VİRDÜLDEN SONRA KALANLARI BİR DİZİYE ATAMA
const [,...rem] = cars;
console.log(rem);

const myArray = ['ali','veli','hamdi','yasin'];
const [,...sam] = myArray;
console.log(sam);
// for(const adlar of myArray) {
//     console.log(adlar,myArray.indexOf(adlar));
// }

let racord = {
    ad:'Ahmet',
    surname:'Karakas',
    mail:"karakasahmet.5@gmail.com",
    alanlar:["javascript","node.js"],
    pets: {
        cats:'rex',
        dogs:'sem'
    }
}
const {ad:isim,pets:{cats:kediler,dogs}} = racord;
console.log(kediler);

const getwhile = ({ad,mail}) => {
    console.log(ad,mail);
}
getwhile(racord);

const getWhen = (rac,dest,dest2) => {
    getRam = [rac[dest],rac[dest2]];
    return getRam;
}
console.log(getWhen(racord,"ad","mail"));
