var num1= parseInt(prompt("Introduce primer numero: "));

var num2= parseInt(prompt("Introduce segundo numero: "))

var suma=num1+num2;
var producto=num1*num2;

if (suma>producto){

    document.write("La suma es mayor que el producto")

}   else if (suma===producto) {
    document.write("El producto es igual a la suma")
}
    else {
        document.write("El producto es mayor que la suma")}