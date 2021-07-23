import { nuevoCliente } from "./API.js";
import { mostrarAlerta, validar } from "./funciones.js";

(function() {

    // Selectores
    const formulario = document.querySelector('#formulario');

    // Event Listeners
    formulario.addEventListener('submit', validarCliente);
    
    // funciones
    function validarCliente(e) {
        e.preventDefault();

        const nombre   = document.querySelector('#nombre').value;
        const email    = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa  = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if (validar(cliente)) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        nuevoCliente(cliente);
        
    }









})();