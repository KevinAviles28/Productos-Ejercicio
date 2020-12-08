let fs=require('fs');
module.exports={
    bd:'./productos.json',
    leerJSON: function(){
         return JSON.parse(fs.readFileSync('./productos.json','utf-8'));
    },
    
    agregarUnProducto: function(precioProducto,nombreProducto){
        let listaProductos= this.leerJSON();
        let ultimoId=listaProductos.length+1;
       /*  listaProductos.forEach(function(producto){
            if(producto.id>ultimoId&&producto.id-1==ultimoId){
                ultimoId=producto.id+1;
//34 es mayor que 29?, si, ahora  34-1 es igual a 29? no? entonces el nuevo id sera 29+1,si es igual 29 es igual a 33+1
                //ultimoId=producto.id+1
            }else{
                ultimoId=ultimoId+1;
            }
            29 es mayor a 28, si, ahora 29-1 es igual a 28? si entonces 28 = 29+1
        }) */

        let nuevoP={
            id: ultimoId,
            name:nombreProducto,
            price:precioProducto
        }
        
        listaProductos.push(nuevoP);
        listaProductos.sort();
        let JSONActualizado=JSON.stringify(listaProductos)
        fs.writeFileSync('./productos.json',JSONActualizado,'utf-8');
    },
    filtrar:function(precio1,precio2){//segun su precio
        let productos=this.leerJSON();
        let listaFiltrada=productos.filter(function(produc){
          return produc.price>=precio1 && produc.price<=precio2; 
        });
       return listaFiltrada;
    },
    modificarPrecio:function(id,nuevoPrecio){
        let producto=this.leerJSON();
        let precioNuevo=producto.filter(function(productosTotales){
            if(productosTotales.id==id){
             productosTotales.price=nuevoPrecio;
            };
            return productosTotales;
        });
        let modificacion=JSON.stringify(precioNuevo);
        fs.writeFileSync('./productos.json',modificacion,'utf-8');
 
    },
    buscarProducto:function(nombreProducto){
        let producto=this.leerJSON();
        let buscado=producto.filter(function(produc){
             return produc.name.toLowerCase().includes(nombreProducto.toLowerCase());
           
        })
        return buscado;

    },
    eliminarProducto:function(id){
       let productos=this.leerJSON();
       let productoEliminado= productos.filter(function(producto){
            return producto.id!==id;
        })
       let modificacion=JSON.stringify(productoEliminado);
       fs.writeFileSync('./productos.json',modificacion,'utf-8');
    }
}