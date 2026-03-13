

const baslatici = (resource) => {
    return new Promise((resoble,reject) => {

        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            console.log(request.status,request.readyState);
            if(request.readyState === 4 && request.status === 200){
                // const data = JSON.parse(request.responseText);
                resoble("data");
            }
            else if(request.readyState === 4){
                reject("çalışmaz");
            }
        } )
        
        
        request.open('GET',resource);
        request.send();
        


    })
}

baslatici ('jsonlar/devir.json').then((x1) => {
    console.log("Promise 1 çalışır",x1);
    return baslatici ('jsonlar/getir.json');
}).then((x1) => {
    console.log("Promise 2 çalışır",x1);
    return baslatici ('jsonlar/gotussr.json');
}).then((x1) => {
    console.log("promise 3 çalışır",x1);
})
.catch((x2) => {
    console.log(x2);
    
})
console.log("ad")

