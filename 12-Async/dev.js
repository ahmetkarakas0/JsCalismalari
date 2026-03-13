

const getVariable = (callback) => {
    
    const reques = new XMLHttpRequest();
    reques.addEventListener('readystatechange',() => {
        if(reques.readyState === 4 && reques.status === 200){
            const getir = JSON.parse(reques.responseText);
            callback(getir.forEach(element => {
                console.log(element);
            }),undefined);
        
        }
        else if (reques.readyState === 4){
            callback(undefined,'Datamız  Çalışmadı ');
        }
        else{
            console.log(reques,reques.readyState);
        } 

    })
    reques.open('GET','https://jsonplaceholder.typicode.com/todos');
    reques.send();
}


getVariable((x1,x2) => {
    if(x1){
        console.log(x1);
    }
    else{
        console.log(x2);
    }
    console.log("ad");
})
console.log("ad");



