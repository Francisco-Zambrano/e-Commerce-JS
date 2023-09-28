const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const containerCarrito = document.querySelector("#container-carrito");
const productoCarrito = document.getElementById("#producto-carrito");



function traerPorductos () {
    productosEnCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add(productoCarrito);
        div.innerHTML = 
        
        `
            <div class="producto-carrito" id="producto-carrito">
                <img class="imagen-producto-carrito" src=${producto.imagen}>
                <h5 class="titulo-carrito">${producto.titulo}</h5>
                <h5 class="precio-carrito">$${producto.precio}</h5>
                <h5 class="cantidad-carrito">${producto.cantidad}</h5>
                <h5 class="total-producto">${producto.cantidad * producto.precio}</h5>
                <button class="carrito-producto-eliminar"><i class="bi bi-trash"></i></button>
            </div>
        `

        containerCarrito.append(div);
        
    });

    
}

traerPorductos ()

