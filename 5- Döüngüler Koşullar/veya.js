// const newPaskey = "ahmetkaraka!";

// if(!(newPaskey.length > 12) && newPaskey.includes("!")) {
//     console.log(`Girdiğiniz şifre ${newPaskey.length} karakterli olduğu için baya güçlü !`);
// }
// else{
//     console.log("Girdiğiniz şifre yetersiz.");
// }

// console.log(newPaskey.includes("!"));

const numbers = [12,14,16,178,11];

for(let i = 0;i<numbers.length;i++){
    
    if(numbers[i] === 14){
        continue;
    }

    console.log(numbers[i]);

    if(i == 2){
        console.log(`Limite ulaşıldı. Sayımız:${numbers[i]}`);
        break;
    }
}

