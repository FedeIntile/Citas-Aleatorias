const elemCita = document.getElementById('cita');
const elemAutor = document.getElementById('autor');
const elemBoton = document.getElementById('boton-cambiar-cita');


function generarEnteroAleatorio(min,max){
    // sin incluir max en los valores posibles.
    return Math.floor(Math.random() * (max-min) + min)
}

function cambiarCita(){
    let indiceAleatorio = generarEnteroAleatorio(0,citas.length); // no se incluye la ultima posicion del arreglo por que la funcion anterior no lo permite 
    elemCita.innerText = `"${citas[indiceAleatorio].texto}"`; 
    elemAutor.innerText = citas[indiceAleatorio].autor;
    
}

 cambiarCita() //aqui se ejecuta la funcion para cuando el usuario ingresa por primera vez y aparezca ya una cita sin tocar el boton 
 
 elemBoton.addEventListener('click',cambiarCita) // aqui el segundo argumento debe ir sin parentesis, debido que no se
                                                    // llamando a la funcion, se esta indicando solamente la fucnion que va ejecutar el evento. 