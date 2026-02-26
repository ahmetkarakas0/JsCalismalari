const language1 = 'Python';
const language2 = 'Java';
const language3 = 'Javascript';

let sonuc = `Ahmet Karakaş'ın bildiği yazılım dilleri: ${language1} ${language2} ${language3}`;
console.log(sonuc);

let names = ['araba','motor','vapur'];
console.log(names[1]);

names[1] = 'traktör';
console.log(names[1]);

let mixed = ['ahmet',21,32,'karakas'];
console.log(mixed);

let tireliler = mixed.join(' ');
console.log(tireliler);

names.push('rahmi','tren');
console.log(names);

names = names.concat(['hakki','hakiki']);
console.log(names.join(" "));

names.pop();
console.log(names);

names.push('excavator');
console.log(names);

let fruits = ['apple','banana','cherry'];
let lazt = fruits.pop();
console.log(lazt);
console.log(fruits);

