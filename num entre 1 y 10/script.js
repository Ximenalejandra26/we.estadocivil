
    let numero;
    do {
        // Pedir al usuario que ingrese un número entre 1 y 10
        numero = parseInt(prompt("Introduce un número entre 1 y 10:"));
        if (numero < 1 || numero > 10) {
            // Si el número está fuera del rango, mostrar un mensaje y continuar pidiendo el número
            alert("¡Número inválido! Por favor, ingresa un número entre 1 y 10.");
        }
    }