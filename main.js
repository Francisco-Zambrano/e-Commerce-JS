const carrito = [];
const contenedorProductos = document.querySelector("#contenedor-productos");


fetch("./productos.json")
    .then(response => response.json())
    .then(data => {
        subirProductos(data);
    })


    function subirProductos(productos) {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = 
        
        `     
            <div class="card" id="producto">
                <img id="imagen" src="${producto.imagen}">
                <h3 id="titulo">${producto.titulo}</h3>
                <p id="descripcion">${producto.descripcion}</p>
                <h3 class="producto-precio">$${producto.precio}</h3>
                <button class="btnAgregar" id="${producto.id}">Agregar</button>
            </div>   
       `
          
    contenedorProductos.append(div);
    });



    document.addEventListener("click", (e) => {
        const btnAgregar = document.querySelectorAll(".btnAgregar");
        btnAgregar.forEach((btn) => {
            if (e.target == btn) {
                const id = parseInt(e.target.id);
                const producto = productos.find((producto) => producto.id === id);
                agregarCarrito(producto);
            }
        })  
    })


    function agregarCarrito(producto) {

        Toastify({
            text: "Producto agregado al carrito",
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


        const productoSearch = carrito.find((productoCarrito) => productoCarrito.id === producto.id);
        if(productoSearch) {
            productoSearch.cantidad++;
        }else{
            carrito.push({
                ...producto,
                cantidad: 1
            });
            
        }  
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));    
    } 
}


