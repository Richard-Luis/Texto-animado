const el = document.querySelector('#text');
const text = "Só queria agradecer por fazer parte da minha vida, EU TE AMO! Feliz dia dos namorados amor!";
const interval = 50

function showText(el, text, interval){

    const char = text.split("").reverse()

    const typer = setInterval(() =>{
        if(!char.length){
            return clearInterval(typer);
        }

        const next = char.pop();

        el.innerHTML += next

    }, interval);
}

showText(el, text, interval)