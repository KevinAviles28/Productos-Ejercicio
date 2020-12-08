const process=require('process');
 moduloProductos=require('./productos');
const comando=process.argv[2];
switch(comando){
    case 'listar':
        let productos=moduloProductos.leerJSON();
        console.log('Lista de productos...');//tendria que poner un if?

        productos.forEach(function(producto){
        console.log("Producto numero: "+producto.id + "\n .Nombre del Producto: "+ producto.name+"\n .Precio: "+" $"+ producto.price )
        })
    break;
    case 'agregar':
        let precioProducto=process.argv[3];
        let nombreProducto=Number(process.argv[4]);
        moduloProductos.agregarUnProducto(nombreProducto,precioProducto);
        console.log("El producto fue agregado");
    break;
    case 'filtrar':
        let precio1= process.argv[3]
        let precio2= process.argv[4]
        let filtra=moduloProductos.filtrar(precio1,precio2);
        filtra.forEach(function(producto){
            console.log( "Nombre del Producto: "+ producto.name+"\n .Precio: "+" $"+ producto.price );
        })
    break;
    case 'modificar':
        let idProducto= Number (process.argv[3]);
        let nuevoPrecio= Number(process.argv[4]);
        moduloProductos.modificarPrecio(idProducto,nuevoPrecio)
        console.log("El precio a sido modificado");
    break;
    case 'buscar':
       let productoBuscado= process.argv[3];
       let encontrado=moduloProductos.buscarProducto(productoBuscado);
       encontrado.forEach(function(cosa){
           console.log("nombre del producto= "+ cosa.name+"\n"+"id del producto= "+ cosa.id+"\n"+" precio del Producto= "+cosa.price);
       })
    break;
    case 'eliminar':
        let id=Number(process.argv[3])
        moduloProductos.eliminarProducto(id);
        console.log("producto eliminado");
    break;
    default:
    break;
}