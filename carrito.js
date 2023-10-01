let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
let botonesEliminar = document.querySelectorAll(".btnEliminar");
const botonComprar = document.querySelector("#carritoComprar");
const containerCarrito = document.querySelector("#container-carrito");
const productoCarrito = ".productoCarrito";


function traerPorductos() {

    if (productosEnCarrito && productosEnCarrito.length >= 0) {
        containerCarrito.innerHTML = "";
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add(productoCarrito);
            div.innerHTML = 
            
            `
                <div class="producto-carrito" id="productoCarrito">
                    <img class="imagen-producto-carrito" src=${producto.imagen}>
                    <h5 class="titulo-carrito">${producto.titulo}</h5>
                    <h5 class="precio-carrito">$${producto.precio}</h5>
                    <h5 class="cantidad-carrito">${producto.cantidad}</h5>
                    <h5 class="total-producto">${producto.cantidad * producto.precio}</h5>
                    <button class="btnEliminar" id="${producto.id}Eliminar"><i class="bi bi-trash"></i></button>
                </div>
            `

            containerCarrito.append(div);
        });
        actualizarBotonesEliminar();
    }     
}
    
traerPorductos();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".btnEliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}


function eliminarDelCarrito(e) {

    Toastify({
        text: "Producto eliminado del carrito",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "rgb(0, 133, 133)",
        },
        offset: {
            x: "2em",
            y: "3em"
          },
        onClick: function(){} 
      }).showToast();

    const idBoton = e.currentTarget.id;
    const idNumerico = parseInt(idBoton);
    const index = productosEnCarrito.findIndex(producto => producto.id === idNumerico);
  
    if (index !== -1) {
      productosEnCarrito.splice(index, 1);
    } 
      
    traerPorductos();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {

    if (productosEnCarrito && productosEnCarrito.length <= 0){
        Swal.fire({
            icon: 'error',
            title: 'No hay productos en el carrito',
            confirmButtonColor: '#008585',
            confirmButtonText: '<a href="index.html">Regresar a página principal</a>'
            
          })
    }else{
        Swal.fire({
            icon: 'success',
            confirmButtonColor: '#008585',
            title: '¡Gracias por su compra!',
            text: 'Vuelva pronto',
          })
    }
   
    productosEnCarrito = [];
    containerCarrito.innerHTML = "";

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}