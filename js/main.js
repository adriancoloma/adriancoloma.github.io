let links = document.getElementsByClassName('link');
for(i = 0; i < links.length; i++) {
    let elemento = links[i];
    elemento.onmouseover = () =>{
        elemento.classList.replace('text-muted', 'text-dark');
    }

    elemento.onmouseout = () =>{
        elemento.classList.replace('text-dark', 'text-muted');
    }
}