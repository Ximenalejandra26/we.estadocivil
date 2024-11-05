        let nombre = prompt('Introduce tu nombre');
        let estadocivil =parseInt(prompt('Introduce tu estado civil,\n1 Soltero \n2 Casado \n3 Separado \n4 Viudo \n5 Unión libre'));

        switch(estadocivil){
            case 1:
                document.write('Soltero');
                break;
            case 2:
                document.write('casado');
                break;
            case 3:
                document.write('Separado');
                break;
            case 4:
                document.write('viudo');
                break;
            case 5:
                document.write('union libre');
                break;
            default:
                document.write('Ingresa un valor de 1 a 5');
             }