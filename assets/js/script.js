// product

// 🌀 Slide Rendering Function
function renderSwiperProducts(category, swiperWrapperSelector, limit) {
    const swiperWrapper = document.querySelector(swiperWrapperSelector);
    const items = products.filter(p => p.category === category).slice(0, limit);

    items.forEach(product => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";
        slide.innerHTML = `
            <div class="productCard">
                <div class="prdImage">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="prdInfo">
                    <small>${product.category}</small>
                    <h3>${product.name}</h3>
                    <p class="price">PKR ${product.price.toLocaleString()}</p>
                    <a href="/product.html?slug=${product.slug}" class="cta">Add to Cart</a>
                </div>
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });
}


// 🔁 Grid Rendering Function
function renderGridProducts(category, containerSelector, limit) {
    const container = document.querySelector(containerSelector);
    const items = products.filter(p => p.category === category).slice(0, limit);

    items.forEach(product => {
        const card = document.createElement("div");
        card.className = "productCard";
        card.innerHTML = `
            <div class="prdImage">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="prdInfo">
                <small>${product.category}</small>
                <h3>${product.name}</h3>
                <p class="price">PKR ${product.price.toLocaleString()}</p>
                <a href="/product.html?slug=${product.slug}" class="cta">Add to Cart</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// 🔁 Grid Rendering Function (Supports "All" and array categories)
function renderGridMixProducts(category, containerSelector, limit) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = "";

    let filteredProducts = products.filter(product => {
        if (category === "All") return true;
        if (Array.isArray(product.category)) {
            return product.category.includes(category);
        }
        return product.category === category;
    });

    // 🔀 Shuffle for randomness
    filteredProducts = filteredProducts.sort(() => Math.random() - 0.5);

    // 🔢 Limit results
    const items = filteredProducts.slice(0, limit);

    items.forEach(product => {
        const card = document.createElement("div");
        card.className = "productCard";
        card.innerHTML = `
            <div class="prdImage">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="prdInfo">
                <small>${
                    Array.isArray(product.category)
                        ? product.category.join(", ")
                        : product.category
                }</small>
                <h3>${product.name}</h3>
                <p class="price">PKR ${product.price.toLocaleString()}</p>
                <a href="/product.html?slug=${product.slug}" class="cta">Add to Cart</a>
            </div>
        `;
        container.appendChild(card);
    });
}




renderSwiperProducts("Builds", ".productSlide .swiper-wrapper", 10);
renderGridMixProducts("All", ".productGrid", 8); 
renderGridProducts("Accessories", ".accessories", 4); 

// product





const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");

  question.addEventListener("click", () => {
    const isOpen = faq.classList.contains("open");

    // Close all other answers
    faqs.forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".answer").style.height = "0";
      item.querySelector(".answer").style.padding = "0 20px";
    });

    // Toggle this one
    if (!isOpen) {
      faq.classList.add("open");
      answer.style.height =  "80px";
      answer.style.padding = "20px";
    }
  });
});
