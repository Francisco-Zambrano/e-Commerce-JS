const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));


// const carritoSeleccion = document.querySelector(".carrito");
const carritoProductos = document.querySelector("carrito-productos");


function traerPorductos () {
    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("carrito-productos");
        div.innerHTML = 
        
            `
            
                <div class="producto-carrito">
                    <div class="imagen-producto-carrito"><img src="${producto.imagen}"></div>
                    <h5 class="titulo-carrito">${producto.titulo}</h5>
                    <h5 class="precio-carrito">${producto.precio}</h5>
                    <h5 class="cantidad-carrito">${producto.cantidad}</h5>
                    <h5 class="total-producto">$${producto.cantidad * producto.cantidad}</h5>
                    <button id="${producto.id}">X</button>
                </div> 
            
        `

        carritoProductos.append(div);
        
    });
    console.log(traerPorductos);
}

