let cartProducts = []
let products = [
  {
    id: 1,
    name: "CASIO A168WG",
    description: "Con cristal mineral y resistente al agua:30mts, cierre ajustable, alarma, señal horaria y bateria de 7 años de duración",
    price: 198600 ,
    img: "../img/reloj_CASIO.png",
  },
  {
    id: 2,
    name: "ORIENT RA-AG0001S",
    description: "Combina el encanto clasico con una relojeria superior, la estetica se realza con un fondo transparente que permite admirar su mecanismo interno. Con pulsera de cuero y agujas en oro rosa.",
    price: 1100000,
    img: "../img/reloj_ORIENT.png",
  },
  {
    id: 3,
    name: "ORIENT M45 F7 MOON",
    description: "Con cristal de zafiro doble curvado, con una manilla de Cordovan y resistente al agua 50mts. Ademas de contar con fase lunar.",
    price: 846400,
    img: "../img/reloj_ORIENT2.png",
  },
  {
    id: 4,
    name: "ORIENT OPEN BAMBINO",
    description: "Es un reloj mecanico de 40.5mm, con esfera azul abombada, y resistente al agua 30mts",
    price: 1290000,
    img: "../img/reloj_ORIENT3.png",
  },
  {
    id: 5,
    name: "ROLEX USTER PERPETUAL",
    description: "Esfera de plata con diamantes y maquinaria automatica, caja de 31mm con bisel de oro blanco y cristal de zafiro",
    price: 28582607,
    img: "../img/reloj_ROLEX_LADY.png",
  },
  {
    id: 6,
    name: "SEIKO 5 SPOSTS GMT",
    description: "Hecho en acero inoxidable con recubrimiento de PVC negro y con movimiento de cuarzo, resistente al agua 30Mts.",
    price: 1069000,
    img: "../img/reloj_swact.png",
  },
  {
    id: 7,
    name: "SWATCH ESSENTIALS",
    description: "Movimiento Automático. Auto-recargable con opción de carga manual, cuenta con 24 rubis y resistente al agua.",
    price: 1989000,
    img: "../img/reloj_what2.png",
  },
  {
    id: 8,
    name: "KOSMO DRAGON",
    description: "Resistente al lavado de manos y lluvia leve, no inmersión (3 ATM)",
    price: 250000,
    img: "../img/kosmo1.png",
  },
  {
    id: 9,
    name: "KOSMO STAINLESS K601",
    description: "Técnica de revestimiento: electrochapado al vacío ambiental, Resistente al lavado de manos y lluvia leve, no inmersión (3 ATM)",
    price: 450000,
    img: "../img/kosmo4.png",
  },
  {
    id: 10,
    name: "KOSMO K894 AUTOMÁTIC",
    description: "Manilla de cuero sintetico. Técnica de revestimiento: electrochapado, Resistente al lavado de manos y lluvia, no inmersión(3ATM)",
    price: 270000,
    img: "../img/kosmo5.png",
  },
  {
    id: 11,
    name: "KOSMO K820F SKULL",
    description: "Técnica de revestimiento: electrochapado al vacío ambiental, Resistente al lavado de manos y lluvia leve, no inmersión (3 ATM)",
    price: 200000,
    img: "../img/kosmo6.png",
  },
  {
    id: 12,
    name: "KOSMO K820F AUTOMÁTIC",
    description: "Técnica de revestimiento: electrochapado al vacío ambiental, Resistente al lavado de manos y lluvia leve, no inmersión (3 ATM)",
    price: 200000,
    img: "../img/kosmo7.png",
  },
  {
    id: 13,
    name: "TEVISE T894 AUTOMATIC",
    description: "Característica: Maquinaria Visible / Segundo horario / Fase lunar. Con cuero geniuno",
    price: 209900,
    img: "../img/tevise.png",
  },
  {
    id: 14,
    name: "TEVISE T867J",
    description: "Automatico Tevise Original. Marca la pantalla:Puntero. Con cuero genuino",
    price: 219000,
    img: "../img/tevise2.png",
  },
  {
    id: 15,
    name: "TEVISE ORIGINAL T820A",
    description: "Automatico  / Fase Lunar  / Tourbillon / Corazon Abierto. Resistente al agua 3ATM (no para deportes acuaticos)",
    price: 250000,
    img: "../img/tevise3.png",
  },
  {
    id: 16,
    name: "TEVISE T805C AUTOMÁTIC",
    description: "Tourbillon / Fase Lunar. Resistente al agua 3ATM (no para deportes acuaticos)",
    price: 220000,
    img: "../img/tevise4.png",
  },
  {
    id: 17,
    name: "TEVISE T820D HOMBRE",
    description: "Fase Lunar/Corazon Abierto. Resistente al agua 3ATM (no para deportes acuaticos). Con manilla de cuero",
    price: 280000,
    img: "../img/tevise5.png",
  },
  {
    id: 18,
    name: "TEVISE T802D AUTOMÁTIC",
    description: "Tourbillon / Corazon abierto. Manilla de cuero. Resistente al agua 3ATM (no para deportes acuaticos)",
    price: 203900,
    img: "../img/tevise6.png",
  },
];

let productsJustPriceAndName = [

]

localStorage.setItem('products', JSON.stringify(products));
const localStorageProducts = JSON.parse(localStorage.getItem('products'));

function loadProducts(productsList) {
  productsList.forEach((product) => {
    document.getElementById('products-section').innerHTML += `<div class="item w-40 xl:flex-row flex-col flex xl:w-[33rem] xl:h-[18rem]">
      <img class=" rounded-t-md  h-44 xl:h-72 xl:rounded-s-md xl:shadow-lg md:shadow-lg" src="${product.img}" alt="img reloj">
      <div class="rounded bg-white p-3 shadow-lg xl:rounded-e-md flex flex-col justify-center">
        <h2 class="xl:mt-5 xl:text-2xl xl:font-bold text-center font-semibold text-gray-700 uppercase text-xs">${product.name}</h2>
        <p class="xl:font-semibold xl:inline-block hidden text-center m-2 text-gray-700 leading-snug">${product.description}</p>
        <div class="text-center text-sm font-semibold text-gray-700 xl:mt-2 m-2">${product.price}</div>
          <div class="flex justify-between mx-2">
            <button class="xl:scale-100 bg-yellow-600 scale-75 p-2 rounded text-gray-100 hover:bg-yellow-700"><a href="/public/envios.html">Comprar</a></button>
            <div class="addToCart text-2xl xl:text-3xl text-yellow-600 hover:cursor-pointer hover:text-yellow-700"><i onclick="addToCart(${product.id})" class="fa fa-cart-plus"></i></div>
          </div>
        </div> 
      </div>`
  });
}

/** 
  funcion para agregar productos a la lista del carrito 
  utilazndo el id del produscto que quiero agragar y buscandolo en la 
  lista de productos
  @param (*) id
*/

function addToCart(id) {
  const found = products.find((product) => product.id == id)
  cartProducts.push(found);
  productsJustPriceAndName.push({ 'name': found.name, 'price': found.price })
  loadToCartProducts(cartProducts);
}

loadProducts(products);

// Función para cargar los productos al carrito
function loadToCartProducts(productsList) {
  document.getElementById('carrito').innerHTML = '';

  productsList.forEach((product) => {
    document.getElementById('carrito').innerHTML += `
    <div class="item flex ">
      <img class="rounded-t-md overflow-hidden h-40 xl:h-32 xl:rounded-s-md" src="${product.img}" alt="img reloj">
      <div class="rounded bg-gray-200 xl:rounded-e-md flex flex-col justify-center">
        <h2 class="xl:mt-5 xl:font-bold text-center font-semibold text-gray-700 uppercase text-xs">${product.name}</h2>
        <div class="text-center text-sm font-semibold text-gray-700 xl:mt-2 m-2">$COP: ${product.price}</div>    
        <div class="addToCart text-xl text-yellow-600 hover:cursor-pointer hover:text-yellow-700"><i onclick="removeFromCart(${product.id})" class="fa fas fas fa-trash-restore"></i></div>
      </div> 
    </div>`;
  });

  // Actualizar el precio total de los productos en el carrito
  updateTotalPrice(productsList);
}

// Función para actualizar el precio total de los productos en el carrito
function updateTotalPrice(productsList) {
  // Inicializar el acumulador del precio
  let initialValue = 0;

  // Sumar el precio de los productos que están en el carrito
  let totalPrice = productsList.reduce((acumulador, product) => {
    return acumulador + product.price;
  }, initialValue);

}

// Función para agregar productos al carrito
function addToCart(id) {
  const found = products.find((product) => product.id == id);
  cartProducts.push(found);
  loadToCartProducts(cartProducts);  // Cargar los productos actualizados al carrito
}


function removeFromCart(id) {
  cartProducts = cartProducts.filter((product) => product.id !== id);
  loadToCartProducts(cartProducts);
}