function obtenerPrecioProducto(){

    let precioProducto= parseFloat(prompt("ingrese el precio del producto"))

    while (precioProducto <= 0){

        alert("precio del producto es invalido, por favor ingrese otro")
        
        precioProducto= parseFloat(prompt("ingrese el precio del producto"))      
        
    }  
    return precioProducto;
}

let nombreProducto = prompt("ingese el productO - EXIT PARA SALIR")
let listaProducto = ""
let totalProducto = 0;

while (nombreProducto !== "EXIT") {

    const precioProducto = obtenerPrecioProducto();
   
totalProducto = totalProducto + precioProducto;
if (listaProducto !== ""){
    listaProducto = listaProducto + " - ";
}
listaProducto = listaProducto + nombreProducto

 nombreProducto = prompt("ingese el producot - EXIT PARA SALIR")


}
console.log ( "Total de productos: $" + totalProducto)
console.log ( "Lista de prodcutos: *" + listaProducto);