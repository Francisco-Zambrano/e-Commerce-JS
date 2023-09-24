const contenedorProductos = document.querySelector("#contenedor-productos");


fetch("./productos.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(producto => {

            const div = document.createElement("div");
                div.classList.add("producto");
                div.innerHTML = `
                
                    <div class="card" style="width: 20rem;" id="producto">
                        <img src="${producto.imagen}" class="card-img-top" id="imagen">
                        <div class="card-body">
                            <h5 class="card-title" id="titulo">${producto.titulo}</h5>
                            <p class="card-text" id="descripcion">${producto.descripcion}</p>
                            <h5 class="producto-precio">$${producto.precio}</h5>
                            <a class="btn btn-outline-success" id="${producto.id}">Agregar</a>
                        </div>
                    </div>
                    
               `
                  
            contenedorProductos.append(div);        
        })
    })







// function subirProductos() {
//     productos.forEach(producto => {
//         const div = document.createElement("div");
//         div.classList.add("producto");
//         div.innerHTML = `
        
//             <div class="card" style="width: 20rem;" id="producto">
//                 <img src="${producto.imagen}" class="card-img-top" id="imagen">
//                 <div class="card-body">
//                     <h5 class="card-title" id="titulo">${producto.titulo}</h5>
//                     <p class="card-text" id="descripcion">${producto.descripcion}</p>
//                     <h5 class="producto-precio">$${producto.precio}</h5>
//                     <a class="btn btn-outline-success" id="${producto.id}">Agregar</a>
//                 </div>
//             </div>
            
//        `
          
//     contenedorProductos.append(div);
//     });
// }

// subirProductos();