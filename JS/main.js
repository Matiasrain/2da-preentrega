const productos= [
    { id: 1, nombre: "Teclado Alloy Core RGB Hyperx", precio: 9300, cantidad:10, subtotal:0},
    { id: 2, nombre: "Mouse Gamer Redragon M988 RGB", precio: 3300, cantidad:10, subtotal:0},
    { id: 3, nombre: "Auricular Inalambrico HYPERX CLOUD", precio: 10300, cantidad:10, subtotal:0},
    { id: 4, nombre: "Monitor Gamer Level Up 24", precio: 12300, cantidad:10, subtotal:0},
];

let carrito = [];
let total = 0;
let subtotal=0;


function comprobarStock(unit){ //funcion para comprobar si existe el stock
    while( productos.find((product) => product.cantidad < unit)){
        alert("No hay suficiente stock");
        unit = parseInt(prompt("¿cuantas unidades quiere llevar?"));
        
  }
  return unit;
}
function subtotalProducto(precio,unidades){
    subtotal = precio * unidades;
    return subtotal;
}


let seleccion = prompt("¿Desea comprar algun producto? 1.si / 2.no");

while(seleccion !=1 && seleccion !=2 ){
    alert("Porfavor ingrese 1 si es si o 2 si es no");
    seleccion = prompt("¿Desea comprar algun producto? 1.si / 2.no");
}
if(seleccion == 1){
    alert("a continuacion nuestra lista de productos");
        let conjuntoproductos = productos.map((product) => 
        `${product.id}.  ${product.nombre} | $${product.precio}`
        );
        alert(conjuntoproductos.join(" \n"));
    }else if(seleccion==2){
    alert("eligio no comprar");
}

while(seleccion != 2){
    let producto = prompt("Ingrese el nombre del producto a comprar"); //ingresar nombre exacto
    let precio = 0;

    if( productos.find((product) => product.nombre === producto)){
        switch(producto){
            case "Teclado Alloy Core RGB Hyperx":
                precio = 9300;
                break;
            case "Mouse Gamer Redragon M988 RGB":
                precio = 3300;
                break;
            case "Auricular Inalambrico HYPERX CLOUD":
                precio = 10300;
                break;
            case "Monitor Gamer Level Up 24":
                precio = 12300;
                break;
            default:
                break;
                
        }
    let unidades = parseInt(prompt("¿cuantas unidades quiere llevar?"));

    unidades = comprobarStock(unidades);    //comprueba stock

    subtotalProducto(precio,unidades);  // calcula el subtotal del producto
    
    carrito.push({producto,unidades,precio,subtotal});  //agrega producto al array carrito
    }else{
        alert("No se encontro el producto");
    }
   
     total = carrito.reduce((acum,prod) => acum + prod.precio * prod.unidades,0);

     seleccion = prompt("¿Desea comprar otro producto? 1.si / 2.no");
}
if (carrito.length != 0){ // si el carrito tiene por lo menos un producto, muestra la compra
let conjuntocarrito = carrito.map((product) =>
 `${product.producto} x ${product.unidades} | $${product.precio} c/u  |   SUBTOTAL: $${product.subtotal}`
        );

 
     alert(`Productos elegidos: \n ${conjuntocarrito.join("\n")} \n \n TOTAL: $${total}`);
    }