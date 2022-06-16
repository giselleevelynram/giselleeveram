const valorTicket =200;
//descuentos
let descuentoEstudiante =80;
let descuentoTrainee =50;
let descuentoJunior =15;

//elementos variable
 
let nombre =document.getElementById("nombre");
let apellido =document.getElementById("apellido");
let correo =document.getElementById("correo");
let cantidad =document.getElementById("cantidad");
//Quitar el estilo de error a los elementos del form

function quitarClaseError(){
    let x =document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }
}
// Calculo total a pagar
function total_a_pagar() {

    quitarClaseError();
    // Verificacion de los campos llenos
    if (nombre.value === ""){
        alert("Escribir nombre.");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;   //me frena el programa automaticamente
    }
    
    if (apellido.value === "") {
        alert("Escribir apellido.");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    if (correo.value === "") {
        alert("Escribir correo.");
        correo.classList.add("is-invalid");
        correo.focus();
        return;

    }

    // Determina si el correo electronico es valido o no

    const correoValido = correo => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    } 
    if (!correoValido(correo.value)) {
        alert("Pro favor, escribir correo electrónico valido.");
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }
    //al menos un tiquet debemos tener

    if ( (cantidad.value == 0) || (isNaN(cantidad.value)) ) {
        alert("Ingrese correctamente la cantidad de tickets.");
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        return;
    }

    if (categoria.value == "") {
        alert("Sellecione categoria.");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }

    //Caluclo de Catidad de Tiquets

    let totalValorTickets = (cantidad.value) * valorTicket;
    // calculo descuento

    if (categoria.value == 0 ) {
        totalValorTickets = totalValorTickets - (descuentoEstudiante / 100* totalValorTickets);
    }

    if (categoria.value == 1) {
        totalValorTickets = totalValorTickets - (descuentoTrainee / 100* totalValorTickets);
    }

    if (categoria.value == 2) {
        totalValorTickets = totalValorTickets - (descuentoJunior / 100* totalValorTickets);
    }

    if (categoria.value == 3) {
        totalValorTickets = totalValorTickets;
    }

    //Valor en HTML(innerHTML recibe un valor a insertar en el contenido del html)
     totalPago.innerHTML = totalValorTickets;

}

btnResumen.addEventListener('click', total_a_pagar);

//funcion borrar
function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', reset_total_a_pagar);