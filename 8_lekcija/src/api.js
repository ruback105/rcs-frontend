// catching errors
// json parsing/stringifying

// https://jsonplaceholder.typicode.com/

// promise chain
// const serverData = fetch("https://dummyjson.com/products/1").then(
//   (response) => {
//     return response.json().then((data) => {
//       if (data.brand === "Apple") {
//         console.log("Yay man ir apple smartphone");
//       }

//       document.body.innerText = data.brand;
//       return data;
//     });
//   }
// );

// Async / await
async function getProduct(id) {
  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const parsedData = await data.json();

  console.log(parsedData);
}

const product = {
  brand: "Xiaomi",
  category: "Smartphone",
  description: "Best mobile phone out there",
  discountPercentage: 0,
  id: 101,
  images: [],
  price: 180,
  ration: 5,
  stock: 100,
  thumbnail: "",
  title: "Xiaomi Smartphone",
};

async function createProduct() {
  const jsonString = JSON.stringify(product);

  const { id } = await fetch("https://dummyjson.com/products/add", {
    method: "POST",
    body: jsonString,
  }).then((response) => response.json());

  //   getProduct(id);
}
createProduct();

async function patchProduct() {
  const jsonString = JSON.stringify(product);

  const data = await fetch("https://dummyjson.com/products/1", {
    method: "PATCH",
    body: jsonString,
  }).then((response) => response.json());

  console.log(data);
}
patchProduct();
