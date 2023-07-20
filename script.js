// Retrieve elements from the DOM
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");
let deleteBtn = document.getElementById("deleteAll");
let mood = "create";
let temp;

// Function to calculate the total price
function getTotal() {
  if (price.value !== "") {
    let result = +price.value + +taxes.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.backgroundColor = "green";
  } else {
    total.innerHTML = "";
  }
}

// Function to create a new product
function createProduct() {
  let dataProduct;
  if (localStorage.getItem("dataProduct") === null) {
    // Check if there is data in local storage
    dataProduct = [];
  } else {
    dataProduct = JSON.parse(localStorage.getItem("dataProduct"));
  }
  let product = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };
  // Create product by count
  if (mood === "create") {
    if (product.count > 1) {
      for (let i = 0; i < product.count; i++) {
        dataProduct.push(product);
      }
    } else {
      dataProduct.push(product);
    }
  } else if (mood === "update") {
    dataProduct[temp] = product;
    mood = "create";
    submit.innerHTML = `<button type="button" class="button" id="submit">
                        <span class="button__text">Create</span>
                        <span class="button__icon"
                          ><svg
                            class="svg"
                            height="48"
                            viewBox="0 0 48 48"
                            width="48"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"
                            ></path>
                            <path d="M0 0h48v48h-48z" fill="none"></path></svg
                        ></span>
                      </button>`;
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  // Set data in local storage
  localStorage.setItem("dataProduct", JSON.stringify(dataProduct));

  // Clear data after submit
  clearData();
  // Show data in table
  showData();
}

// Function to clear data after submit
function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}

// Function to show data in table
function showData() {
  getTotal();
  let table = "";
  let dataProduct = JSON.parse(localStorage.getItem("dataProduct"));
  if (dataProduct !== null) {
    for (let i = 0; i < dataProduct.length; i++) {
      table += `<tr>
                <td>${i + 1}</td>
                <td>${dataProduct[i].title}</td>
                <td>${dataProduct[i].price}</td>
                <td>${dataProduct[i].taxes}</td>
                <td>${dataProduct[i].ads}</td>
                <td>${dataProduct[i].discount}</td>
                <td>${dataProduct[i].total}</td>
                <td>${dataProduct[i].category}</td>
                <td>
                  <button type="button" class="button" id="update" onclick="updateProduct(${i})">
                    <span class="button__text">Update</span>
                    <span class="button__icon"
                      ><svg
                        class="svg"
                        height="48"
                        viewBox="0 0 48 48"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"
                        ></path>
                        <path d="M0 0h48v48h-48z" fill="none"></path></svg
                    ></span>
                  </button>
                </td>
                <td>
                  <button onclick="deleteProduct(${i})" type="button" class="button" id="delete">
                    <span class="button__text">Delete</span>
                    <span class="button__icon"
                      ><svg
                        class="svg"
                        height="512"
                        viewBox="0 0 512 512"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path
                          d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                            stroke-width: 32px;
                          "
                          x1="80"
                          x2="432"
                          y1="112"
                          y2="112"
                        ></line>
                        <path
                          d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="256"
                          x2="256"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="184"
                          x2="192"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="328"
                          x2="320"
                          y1="176"
                          y2="400"
                        ></line></svg
                    ></span>
                  </button>
                </td>
              </tr>`;
    }
  }
  document.getElementById("tbody").innerHTML = table;

  if (dataProduct.length > 0) {
    deleteBtn.innerHTML = `<button onclick="deleteAllProduct()" type="button" class="button" id="delete">
                    <span class="button__text">Delete ALL</span>
                    <span class="button__icon"
                      ><svg
                        class="svg"
                        height="512"
                        viewBox="0 0 512 512"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path
                          d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                            stroke-width: 32px;
                          "
                          x1="80"
                          x2="432"
                          y1="112"
                          y2="112"
                        ></line>
                        <path
                          d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="256"
                          x2="256"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="184"
                          x2="192"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="328"
                          x2="320"
                          y1="176"
                          y2="400"
                        ></line></svg
                    ></span>
                  </button> `;
  } else {
    deleteBtn.innerHTML = "";
  }
}

// Function to delete a product
function deleteProduct(i) {
  let dataProduct = JSON.parse(localStorage.getItem("dataProduct"));
  dataProduct.splice(i, 1);
  localStorage.setItem("dataProduct", JSON.stringify(dataProduct));
  showData();
}

// Function to delete all products
function deleteAllProduct() {
  localStorage.clear();
  showData();
}

// Function to update a product
function updateProduct(i) {
  let dataProduct = JSON.parse(localStorage.getItem("dataProduct"));
  title.value = dataProduct[i].title;
  price.value = dataProduct[i].price;
  taxes.value = dataProduct[i].taxes;
  ads.value = dataProduct[i].ads;
  discount.value = dataProduct[i].discount;
  total.innerHTML = dataProduct[i].total;
  count.style.display = "none";
  getTotal();
  category.value = dataProduct[i].category;
  submit.innerHTML = `<button type="button" class="button" id="submit">
                        <span class="button__text">Update</span>
                        <span class="button__icon"
                          ><svg
                            class="svg"
                            height="48"
                            viewBox="0 0 48 48"
                            width="48"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"
                            ></path>
                            <path d="M0 0h48v48h-48z" fill="none"></path></svg
                        ></span>
                      </button>`;
  mood = "update";
  temp = i;
}

// Function to search product
let searchMode = "title";
function getSearchMode(id) {
  let searchInput = document.getElementById("search");
  if (id === "searchTitle") {
    searchMode = "title";
    searchInput.placeholder = "Search by title";
  } else {
    searchMode = "category";
    searchInput.placeholder = "Search by category";
  }
  searchInput.focus();
  searchInput.value = "";
  showData();
}

//search data
function searchData(value) {
  let table = "";
  for (let i = 0; i < dataProduct.length; i++) {
    if (searchMode == "title") {
      if (dataProduct[i].title.toLowerCase().includes(value.toLowerCase())) {
        table += `<tr>
                <td>${i + 1}</td>
                <td>${dataProduct[i].title}</td>
                <td>${dataProduct[i].price}</td>
                <td>${dataProduct[i].taxes}</td>
                <td>${dataProduct[i].ads}</td>
                <td>${dataProduct[i].discount}</td>
                <td>${dataProduct[i].total}</td>
                <td>${dataProduct[i].category}</td>
                <td>
                  <button type="button" class="button" id="update" onclick="updateProduct(${i})">
                    <span class="button__text">Update</span>
                    <span class="button__icon"
                      ><svg
                        class="svg"
                        height="48"
                        viewBox="0 0 48 48"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"
                        ></path>
                        <path d="M0 0h48v48h-48z" fill="none"></path></svg
                    ></span>
                  </button>
                </td>
                <td>
                  <button onclick="deleteProduct(${i})" type="button" class="button" id="delete">
                    <span class="button__text">Delete</span>
                    <span class="button__icon"
                      ><svg
                        class="svg"
                        height="512"
                        viewBox="0 0  
                        512 512"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path
                          d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                            stroke-width: 32px;
                          "
                          x1="80"
                          x2="432"
                          y1="112"
                          y2="112"
                        ></line>
                        <path
                          d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="256"
                          x2="256"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="184"
                          x2="192"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="328"
                          x2="320"
                          y1="176"
                          y2="400"
                        ></line></svg 
                    ></span>
                  </button>
                </td>
              </tr>`;
      }
    } else {
      if (dataProduct[i].category.toLowerCase().includes(value.toLowerCase())) {
        table += `<tr>
                <td>${i + 1}</td>
                <td>${dataProduct[i].title}</td>
                <td>${dataProduct[i].price}</td>
                <td>${dataProduct[i].taxes}</td>
                <td>${dataProduct[i].ads}</td>
                <td>${dataProduct[i].discount}</td>
                <td>${dataProduct[i].total}</td>
                <td>${dataProduct[i].category}</td>
                <td>
                  <button type="button" class="button" id="update" onclick="updateProduct(${i})">
                    <span class="button__text">Update</span>
                    <span class="button__icon"
                      ><svg
                        class="svg"
                        height="48"
                        viewBox="0 0 48 48"
                        width="48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M35.3 12.7c-2.89-2.9-6.88-4.7-11.3-4.7-8.84 0-15.98 7.16-15.98 16s7.14 16 15.98 16c7.45 0 13.69-5.1 15.46-12h-4.16c-1.65 4.66-6.07 8-11.3 8-6.63 0-12-5.37-12-12s5.37-12 12-12c3.31 0 6.28 1.38 8.45 3.55l-6.45 6.45h14v-14l-4.7 4.7z"
                        ></path>
                        <path d="M0 0h48v48h-48z" fill="none"></path></svg
                    ></span>
                  </button>
                </td>
                <td>
                  <button onclick="deleteProduct(${i})" type="button" class="button" id="delete">
                    <span class="button__text">Delete</span>
                    <span class="button__icon"
                      ><svg
                        class="svg"
                        height="512"
                        viewBox="0 0  
                        512 512"
                        width="512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title></title>
                        <path
                          d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-miterlimit: 10;
                            stroke-width: 32px;
                          "
                          x1="80"
                          x2="432"
                          y1="112"
                          y2="112"
                        ></line>
                        <path
                          d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                        ></path>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="256"
                          x2="256"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="184"
                          x2="192"
                          y1="176"
                          y2="400"
                        ></line>
                        <line
                          style="
                            fill: none;
                            stroke: #fff;
                            stroke-linecap: round;
                            stroke-linejoin: round;
                            stroke-width: 32px;
                          "
                          x1="328"
                          x2="320"
                          y1="176"
                          y2="400"
                        ></line></svg 
                    ></span>
                  </button>
                </td>
              </tr>`;
      }
    }
  }

  document.getElementById("tbody").innerHTML = table;
}

// Call the getTotal function when the input values change
price.addEventListener("input", getTotal);
taxes.addEventListener("input", getTotal);
ads.addEventListener("input", getTotal);
discount.addEventListener("input", getTotal);

// Add event listener to the submit button
submit.addEventListener("click", createProduct);

// Show data in table on page load
showData();
