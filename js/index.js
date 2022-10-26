let btnComenzar;
let contenido;

btnComenzar = document.getElementById('btnComenzar');
contenido = document.getElementById('contenido');

btnComenzar.addEventListener("click",btnComenzarClic);


function btnComenzarClic(){
    let terminacion1 = ["Presento","Atento","Intento","Reviento"]
    let terminacion2 = ["Aparenta","Inventa","Noventa", "Incrementa"]

    const t1 = setTimeout(()=>{
        contenido.innerHTML = terminacion1[0] +"<br>"+ terminacion1[1] +"<br>"+ terminacion1[2] +"<br>"+ terminacion1[3];
    },1000);
    setTimeout(()=>{
        clearInterval(t1)
    },4000);


    const t2 = setTimeout(()=>{
        contenido.innerHTML = terminacion2[0] + "<br>" + terminacion2[1] + "<br>" + terminacion2[2] + "<br>" + terminacion2[3]  
    },5000)



}
