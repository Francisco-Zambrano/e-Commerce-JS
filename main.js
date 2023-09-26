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
        div.innerHTML = ` 
            
            <div class="card" id="producto">
                <img id="imagen" src="${producto.imagen}">
                <h3 id="titulo">${producto.titulo}</h3>
                <p id="descripcion">${producto.descripcion}</p>
                <h3 class="producto-precio">$${producto.precio}</h3>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>   
       `
          
    contenedorProductos.append(div);
    });
}
   
