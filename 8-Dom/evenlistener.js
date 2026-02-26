const button = document.querySelector('button');
button.addEventListener('click',() => {
     document.querySelector('li:last-child').remove();

    }
)

const defineAura = document.querySelectorAll('li');

defineAura.forEach( (x,a) => {
    x.addEventListener('click',(b) =>{
        console.log(b)
        b.target.style.color = "blue"
        x.textContent += " "+(a+1);
    })
})

