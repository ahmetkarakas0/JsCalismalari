const formum = document.querySelector('.formum');

// const username = document.querySelector('#username')

// username.addEventListener("input", () => {
//     console.log(username.value)
// })

const hatas=document.querySelector('.hatas');
const reggex=/^[a-z]{6,12}$/;

formum.addEventListener('submit', (e) => {

    e.preventDefault();
    const tester = reggex.test(username.value)
    if(tester){
        hatas.textContent="BAŞARILII";
    }
    else{
        hatas.textContent="BAŞARISIZZ"
        
    }
    console.log(username.value.length)
    
})

