window.onload=iniciar;
function iniciar(){
    function cambiar(evt){
        // evt recibe el código de la tecla pulsada
        if(evt.keyCode==13) //Código de la tecla Enter
        /* el primer nextSibling hace referencia al final de línea del input
        el segundo al elemento label, el tercero a su final de línea y el
        cuarto hace referencia al siguiente input */
        // Si el input siguiente es de texto se sitúa el foco sobre él
        if(this.nextSibling.nextSibling.nextSibling.nextSibling.type=="text")
        this.nextSibling.nextSibling.nextSibling.nextSibling.focus();
        }
        // El array inputs recogerá las etiquetas input del documento
        var inputs=document.getElementsByTagName("input");
        // Por cada input existente se crea un listener para cada tecla pulsada, y
        // cuando se produce la pulsación se llama a la función cambiar
        for(i=0;i<inputs.length;i++){
        inputs[i].addEventListener("keypress",cambiar,false);
        }
}
