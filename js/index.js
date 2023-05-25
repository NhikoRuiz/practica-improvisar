let btnComenzar = document.getElementById('btnComenzar');
let contenido = document.getElementById('contenido');
// audio
let sound = new Audio('audios/bombap.mp3')




// palabras
let terminacion1 = ["Presento","Atento","Intento","Reviento"];
let terminacion2 = ["Aparenta","Inventa","Noventa", "Incrementa"];
let terminacion3 = ["Conjuro","Muro","Perduro","Puro"];
let terminacion4 = ["Enredado","Paralizado","Dado","Morado"];
let terminacion5 = ["Movimiento","Siento","Viento","Simientos"];
let terminacion6 = ["Nota","Mota","Rota","Pota"];
let terminacion7 = ["Cenicero","Certero","Cero","Primero"];




btnComenzar.addEventListener("click",()=>{
    sound.play()
    contenido.style.fontFamily = 'Gemunu Libre';
    contenido.style.fontSize = '30px';

    const fraseComienzo = setTimeout(()=>{
        
        contenido.innerHTML = 'Comienza en';
    },0)
    const num3 = setTimeout((e)=>{
        contenido.innerHTML= '3';
    },7000) 
    const num2 = setTimeout((e)=>{
        contenido.innerHTML = '2';
    },8000) 
    const num1 = setTimeout((e)=>{
        contenido.innerHTML = '1';
    },9000) 
    // comienza el golpe / 
    const t1 = setTimeout(()=>{
        contenido.innerHTML = terminacion1[0] +"<br>"+ terminacion1[1] +"<br>"+ terminacion1[2] +"<br>"+ terminacion1[3];
    },10000);


    const t2 = setTimeout(()=>{
        contenido.innerHTML = terminacion2[0] + "<br>" + terminacion2[1] + "<br>" + terminacion2[2] + "<br>" + terminacion2[3]  
    },21000)

    const t3 = setTimeout(()=>{
        contenido.innerHTML = terminacion3[0] + "<br>" + terminacion3[1] + "<br>" + terminacion3[2] + "<br>" + terminacion3[3]  
    },31000)
    
    const t4 = setTimeout(()=>{
        contenido.innerHTML = terminacion4[0] + "<br>" + terminacion4[1] + "<br>" + terminacion4[2] + "<br>" + terminacion4[3]  
    },41000)

    const t5 = setTimeout(()=>{
        contenido.innerHTML = terminacion5[0] + "<br>" + terminacion5[1] + "<br>" + terminacion5[2] + "<br>" + terminacion5[3]  
    },53000)

    const t6 = setTimeout(()=>{
        contenido.innerHTML = terminacion6[0] + "<br>" + terminacion6[1] + "<br>" + terminacion6[2] + "<br>" + terminacion6[3]  
    },62000)

    const t7 = setTimeout(()=>{
        contenido.innerHTML = terminacion7[0] + "<br>" + terminacion7[1] + "<br>" + terminacion7[2] + "<br>" + terminacion7[3]  
    },72000)

    const t8 = setTimeout(()=>{
        contenido.innerHTML = terminacion8[0] + "<br>" + terminacion8[1] + "<br>" + terminacion8[2] + "<br>" + terminacion8[3]  
    },82000)

});

    

    


