let productos = [
    {
        id: 1,
        titulo: "Gigabyte AORUS 7",
        precio: 1150,
        imagen: "./productosImg/1.webp",
        descripcion: "17.3, FHD 1920x1080 360Hz, NVIDIA GeForce RTX 4060 Laptop GPU 8GB GDDR6, Intel Core i5-12500H, 16GB DDR4 RAM, 512GB SSD",
    },
    {
        id: 2,
        titulo: "ASUS ROG Strix G16",
        precio: 1270,
        imagen: "./productosImg/2.webp",
        descripcion: "Nebula Display 16:10 QHD 240Hz, GeForce RTX 4070, Intel Core i9-13980HX, 32GB DDR5, 1TB PCIe SSD, Wi-Fi 6E",
    },
    {
        id: 3,
        titulo: "ASUS TUF Gaming F15",
        precio: 900,
        imagen: "./productosImg/3.webp",
        descripcion: "144Hz FHD Display, Intel Core i5-11400H Processor, GeForce RTX 2050, 8GB DDR4 RAM, 512GB PCIe SSD Gen 3, Wi-Fi 6",
    },
    {
        id: 4,
        titulo: "MSI Thin GF63",
        precio: 1200,
        imagen: "./productosImg/4.webp",
        descripcion: "144Hz Gaming Laptop: 12th Gen Intel Core i7, NVIDIA GeForce RTX 4050, 16GB DDR4, 512GB NVMe SSD, Type-C, Cooler Boost 5",
    },
    {
        id: 5,
        titulo: "Acer Nitro 5 AN515-58",
        precio: 1350,
        imagen: "./productosImg/5.webp",
        descripcion: "Intel Core i5-12500H, NVIDIA GeForce RTX 3050 Ti Laptop GPU, FHD 144Hz IPS Display, 16GB DDR4, 512GB Gen 4 SSD, Killer Wi-Fi 6",
    },
    {
        id: 6,
        titulo: "Dell G15 5520",
        precio: 1130,
        imagen: "./productosImg/6.webp",
        descripcion: "15.6 Inch Gaming Laptop - FHD 120Hz Display, Intel Core i7-12700H, 16GB DDR5 RAM, 512GB SSD, NVIDIA RTX 3060 6GB GDDR6, Wi-Fi 6",
    },
    {
        id: 7,
        titulo: "Acer Swift 5 Intel Evo Thin",
        precio: 1390,
        imagen: "./productosImg/7.webp",
        descripcion: "Intel Evo Thin & Light Laptop, 14 WXGA IPS 100% sRGB Touch, 12th Gen Intel i7-1260P, Intel Iris Xe Graphics, 16GB LPDDR5",
    },
    {
        id: 8,
        titulo: "MSI Katana 15",
        precio: 1400,
        imagen: "./productosImg/8.webp",
        descripcion: "144Hz FHD Gaming Laptop: 13th Gen Intel Core i7, RTX 4070, 16GB DDR5, 1TB NVMe SSD, USB-Type C, Cooler Boost 5",
    },
    {
        id: 9,
        titulo: "Acer Predator Helios 300",
        precio: 2100,
        imagen: "./productosImg/9.webp",
        descripcion: "Intel i7-11800H, NVIDIA GeForce RTX 3060 GPU, 15.6 FHD 144Hz 3ms IPS Display",
    },
]




const contenedorProductos = document.querySelector("#contenedor-productos");

function subirProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `

        <div class="col-md-3" id="producto">
            <div class="card" style="width: 18rem;">
                <img src="${producto.imagen}" class="card-img-top" id="imagen">
                <div class="card-body">
                    <h5 class="card-title" id="titulo">${producto.titulo}</h5>
                    <p class="card-text" id="descripcion">${producto.descripcion}</p>
                    <h5 class="producto-precio">$${producto.precio}</h5>
                    <a class="btn btn-outline-success" id="${producto.id}">Agregar</a>
                </div>
            </div>
        </div>`
          
    contenedorProductos.append(div);
    });
}

subirProductos();