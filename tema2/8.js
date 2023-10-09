var var1=parseInt(prompt("Introduzca la primera variable: "))
var var2=parseInt(prompt("Introduzca la segunda variable: "))
var nombre="Alfredo Jesus ";
var apellidos="Jaroso Jaroso";

if (var1>0 && var2<var1){
    document.write(nombre)
} else if (var1>0 && var2 >= var1){
    document.write(apellidos)
} else if (var1<0) { 
    document.write(nombre+" "+apellidos)
}