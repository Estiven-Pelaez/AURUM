const apiURL = 'https://data-base-aurum.vercel.app/products/';

async function getProducts() {
    let products = await fetch(apiURL);

    products = await products.json();

    products.forEach((product) => {
        document.getElementById(
                "product"
        ).innerHTML += `<h2>${product.price}</h2>
        <h3>${product.ref}</h3>`;
    });
}

async function createProduct() {
    const form = document.getElementById("create");
    const formData = new FormData(form);
    const data = new URLSearchParams(formData).toString();
  
    let message = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    });
    message = await message.json();
    console.log(message);
  }