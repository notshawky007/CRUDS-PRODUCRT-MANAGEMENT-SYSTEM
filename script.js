let name = document.getElementById("name");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

//get total price
function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.backgroundColor = "green";
  } else {
    total.innerHTML = "";
    total.style.backgroundColor = "red";
  }
}

//create new product
function createProduct() {
  let dataProduct;
  if (localStorage.getItem("dataProduct") === null) {
    //check if there is data in local storage
    dataProduct = [];
  } else {
    dataProduct = JSON.parse(localStorage.getItem("dataProduct"));
  }
  let product = {
    name: name.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
  dataProduct.push(product);
  localStorage.setItem("dataProduct", JSON.stringify(dataProduct));
  alert("Product added successfully");
  location.reload();
}
