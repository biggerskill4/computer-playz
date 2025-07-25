const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

const product = products.find(p => p.slug === slug);


const productImage = document.querySelector(".productImage img");
const prdCategory = document.querySelector(".prdCategory");
const prdName = document.querySelector(".prdName");
const productTitle = document.querySelector(".productTitle h1");
const productRating = document.querySelector(".productRating");
const productDiscription = document.querySelector(".productDiscription");
const productPrice = document.querySelector(".productPrice");

if (product) {
productImage.src = product.image;
prdCategory.textContent = `> ${product.category}`;
prdName.textContent = `> ${product.name}`;
productTitle.textContent = product.name;
productRating.textContent = `Rating ${product.rating}`;
productDiscription.textContent = product.shortDescription;
productPrice.textContent = `PKR ${product.price}`
} else {
    document.querySelector(".singleProduct").innerHTML = "<h2>Product not found</h2>";
}