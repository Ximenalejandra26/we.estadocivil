let nombre = prompt("Introduce tu nombre:");
let estadoCivil = parseInt(prompt("Introduce tu estado civil:\n1: Soltero\n2: Casado\n3: Separado\n4: Viudo\n5: Unión libre"));

let estadoCivilTexto;
switch (estadoCivil) {
    case 1:
        estadoCivilTexto = "Soltero";
        break;
    case 2:
        estadoCivilTexto = "Casado";
        break;
    case 3:
        estadoCivilTexto = "Separado";
        break;
    case 4:
        estadoCivilTexto = "Viudo";
        break;
    case 5:
        estadoCivilTexto = "Unión libre";
        break;
    default:
        document.write("Estado civil desconocido")
}
