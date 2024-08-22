import products from "./api/product.json";
// export const showproducts = (allproducts) => {
    

// import { showProductContainer } from './productcart';
// console.log(typeof products);

// let checkc = ["bajaj", "almonro", "usha", "orient", "crompton"];
// console.log(checkc.includes("bajaj"));

document.addEventListener('DOMContentLoaded', () => {
    let productDiv = document.querySelector('#productDiv');
    let catagorylist = document.querySelector('.logo-lists');
    let allcat = [];

    let catagoryFun = () => {
        // alert("hello");
        let checkinput = document.querySelectorAll("input[type='checkbox']");
        let checkdata = [];
        checkinput.forEach((e) => {
            if (e.checked) {
                checkdata.push(e.value);
            }
        })
       display(checkdata)
    };

    let display = async (allcheckcat = []) => {
        // catagorylist.innerHTML = '';
        productDiv.innerHTML = '';
        products.forEach(element => {
            // Product Category
            if (!allcat.includes(element.company)) {
                let div = document.createElement('div');
                div.className = 'logodiv';
                div.style.cursor = 'pointer';
                div.innerHTML = `
                    <img src="${element.companyL}" class="images" alt="...">
                    <label>
                        <input class="checkbox" type="checkbox" value="${element.company}">${element.company}
                    </label>
                `;
                catagorylist.appendChild(div);

                // Add event listener to the checkbox
                div.querySelector('.checkbox').addEventListener('click', catagoryFun);

                allcat.push(element.company);
            }

            if (allcheckcat.length === 0) {
                allcheckcat = allcat;
            }

            if (allcheckcat.includes(element.company)) {
                productDiv.innerHTML += `
                    <div class="row">
                        <div class="col-lg-2 col-md-6 col-sm-12 pb-1" id="items">
                            <div class="card product-item mb-3 h-100 Fans">
                                <div class="card-header product-img position-relative overflow-hidden bg-transparent border-0 p-0 p-4">
                                    <img class="img-fluid w-100" src="${element.image}" alt="${element.name}">
                                </div>
                                <div class="card mt-auto border-left border-right text-center p-0 pt-2 pb-0" id="pname">
                                    <h6 class="text-truncate mb-2">${element.name}</h6>
                                    <div class="d-flex justify-content-center">
                                        <h6>₹${element.price}</h6><h6 class="text-muted ml-2"><del>₹${element.discount * 4}</del></h6>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between mb-1">
                                    <div class="border">
                                        <button class="btn btn-primary text-white float-start buy" style="border-radius: 5px;"><i class="fa fa-shopping-cart"></i> Buy</button>
                                    </div>
                                    <div class="border addcart">
                                        <button class="btn btn-primary text-white ml-1" style="border-radius: 5px;" onclick="addToCart('${element.name}', '${element.price}', '${element.image}', '${element.discount}')"><i class="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
    };

    display();
});
