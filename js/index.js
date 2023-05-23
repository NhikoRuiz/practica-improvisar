let btnComenzar = document.getElementById('btnComenzar');
let contenido = document.getElementById('contenido');
// audio
let sound = new Audio('audios/bombap.mp3')





let terminacion1 = ["Presento","Atento","Intento","Reviento"];
let terminacion2 = ["Aparenta","Inventa","Noventa", "Incrementa"];
let terminacion3 = ["Conjuro","Muro","Perduro","Puro"];



btnComenzar.addEventListener("click",()=>{
    sound.play()
    contenido.style.fontFamily = 'Gemunu Libre';
    contenido.style.fontSize = '30px';
    
    

    const fraseComienzo = setTimeout(()=>{
        contenido.innerHTML = 'Comienza en';
    },23000)
    const num3 = setTimeout((e)=>{
        contenido.innerHTML= '3';
    },43000) 
    const num2 = setTimeout((e)=>{
        contenido.innerHTML = '2';
    },25000) 
    const num1 = setTimeout((e)=>{
        contenido.innerHTML = '1';
    },26000) 

    const t1 = setTimeout(()=>{
        contenido.innerHTML = terminacion1[0] +"<br>"+ terminacion1[1] +"<br>"+ terminacion1[2] +"<br>"+ terminacion1[3];
    },27000);


    const t2 = setTimeout(()=>{
        contenido.innerHTML = terminacion2[0] + "<br>" + terminacion2[1] + "<br>" + terminacion2[2] + "<br>" + terminacion2[3]  
    },38000)

    const t3 = setTimeout(()=>{
        contenido.innerHTML = terminacion3[0] + "<br>" + terminacion3[1] + "<br>" + terminacion3[2] + "<br>" + terminacion3[3]  
    },47000)

});

    

    


