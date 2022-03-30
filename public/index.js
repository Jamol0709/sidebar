let aside = document.querySelector('aside');
let icon = aside.querySelector('.menu-icon');
let li = aside.getElementsByClassName('nav-item');

icon.onclick =()=> {
    aside.classList.toggle('expand');
}
for(let i of li){
    i.onclick = activeLi;
}
function activeLi (){
    const list = Array.from(li);
    list.forEach(e=>e.classList.remove('active'));
    this.classList.add('active');
}