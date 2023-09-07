//Agregar EventListener para la validación en tiempo real
document.getElementById("formulario").addEventListener("input", function(event){
    var target = event.target;

    //Utilizar expresiones regulares para validar los inputs
    if(target.id ==="dni"){
        var dniPattern = /^[0-9]{8}$/;
        if (!dniPattern.test(target.value)){
            target.setCustomValidity("El DNI debe tener 8 dígitos numéricos.")
        } else{
            target.setCustomValidity("");
        }
    } else if (target.id === "celular"){
        var celularPattern = /^[0-9]{9,10}$/;
        if(!celularPattern.test(target.value)){
            target.setCustomValidity("El número de celular debe tener 9 dígitos numéricos.");
        } else{
            target.setCustomValidity("");
        }
    } else if(target.id === "nombre"){
        var nombrePattern = /^[a-zA-Z]+$/;
        if(!nombrePattern.test(target.value)){
            target.setCustomValidity("El nombre debe contener sólo letras.");
        } else{
            target.setCustomValidity("");
        }
    } else if(target.id === "apellido"){
        var apellidoPattern = /^[a-zA-Z]+$/;
        if(!apellidoPattern.test(target.value)){
            target.setCustomValidity("El apellido debe contener sólo letras.");
        } else{
            target.setCustomValidity("");
        }
    }
});

//El atributo pattern es para especificar las expresiones regulares que deben cumplir los inputs.

//Si la validación falla, se establece un mensaje de error personalizado utilizando setCustomValidity, lo que evitará que el formulario se envíe hasta que se resuelvan los problemas.