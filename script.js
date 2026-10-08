// =========================================================
// 0. PRODUCT DATA: every product in the store, in one list
// =========================================================
// To add a product, copy one { ... } block, paste it and change the values.
// "id" must be different for each product.
// A new "category" automatically gets its own filter button.
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 59.99,
        category: "Electronics",
        description: "Crisp sound and deep bass with up to 30 hours of battery life. Soft cushions keep them comfortable all day.",
        image: "https://placehold.co/400x300?text=Headphones",
        alt: "Wireless headphones"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 129.99,
        category: "Electronics",
        description: "Track your steps, heart rate and sleep, and see notifications at a glance. Water-resistant, with a week-long battery.",
        image: "https://placehold.co/400x300?text=Smart+Watch",
        alt: "Smart watch"
    },
    {
        id: 3,
        name: "Travel Backpack",
        price: 45.00,
        category: "Bags",
        description: "A lightweight, water-resistant backpack with a padded laptop pocket and plenty of room for a weekend away.",
        image: "https://placehold.co/400x300?text=Backpack",
        alt: "Travel backpack"
    },
    {
        id: 4,
        name: "Running Sneakers",
        price: 89.50,
        category: "Shoes",
        description: "Breathable, cushioned running shoes with a grippy sole, built for daily runs and long walks alike.",
        image: "https://placehold.co/400x300?text=Sneakers",
        alt: "Running sneakers"
    }
];


// =========================================================
// 1. FIND THE ELEMENTS WE NEED ON THE PAGE
// =========================================================
const cartCountElement = document.getElementById("cart-count");
const productGrid = document.getElementById("product-grid");
const contactForm = document.querySelector(".contact-form");

// Mobile menu elements
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const menuOverlay = document.getElementById("menu-overlay");

// Search + filter elements
const searchInput = document.getElementById("search-input");
const filterButtonsContainer = document.getElementById("filter-buttons");
const resultsCount = document.getElementById("results-count");
const noResults = document.getElementById("no-results");
const clearFiltersButton = document.getElementById("clear-filters");
const sortSelect = document.getElementById("sort-select");

// What the shopper is currently looking for
let searchText = "";           // what's typed in the search box (lowercase)
let activeCategory = "All";    // which filter button is selected
let sortOrder = "default";     // "default", "price-asc" or "price-desc"

// Cart panel elements
const cartButton = document.querySelector(".cart-button");
const cartPanel = document.getElementById("cart-panel");
const cartOverlay = document.getElementById("cart-overlay");
const cartCloseButton = document.getElementById("cart-close");
const cartItemsList = document.getElementById("cart-items");
const cartEmptyMessage = document.getElementById("cart-empty");
const cartTotalElement = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout-btn");

// Checkout view elements
const checkoutContent = document.getElementById("checkout-content");
const checkoutForm = document.getElementById("checkout-form");
const placeOrderButton = document.getElementById("place-order-btn");
const summaryItemsList = document.getElementById("summary-items");
const summaryEmpty = document.getElementById("summary-empty");
const summaryCount = document.getElementById("summary-count");
const summarySubtotal = document.getElementById("summary-subtotal");
const summaryTotal = document.getElementById("summary-total");
const orderConfirmation = document.getElementById("order-confirmation");
const continueShoppingButtons = document.querySelectorAll(".continue-shopping");

// Product details popup elements
const productModal = document.getElementById("product-modal");
const modalCloseButton = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalCategory = document.getElementById("modal-category");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const modalQtyElement = document.getElementById("modal-qty");
const modalDecreaseButton = document.getElementById("modal-decrease");
const modalIncreaseButton = document.getElementById("modal-increase");
const modalAddButton = document.getElementById("modal-add");

// Which product the popup is showing, and the quantity picked in it
let modalProduct = null;
let modalQuantity = 1;
let lastFocusedElement = null; // the card to return focus to when the popup closes

// The cart: a list (array) of products. Each item looks like:
// { name: "Smart Watch", price: 129.99, image: "https://...", quantity: 2 }
// It starts with whatever was saved last time (or empty if nothing was saved).
let cart = loadCart();


// =========================================================
// 2. HELPER: turn a number into a price, e.g. 45 -> "$45.00"
// =========================================================
function formatPrice(amount) {
    return "$" + amount.toFixed(2);
}


// =========================================================
// 2b. SAVE AND LOAD THE CART (so it survives a page refresh)
// =========================================================
// localStorage is a small storage box inside the browser.
// It can only hold text, so we convert the cart to text (JSON) and back.
function saveCart() {
    try {
        localStorage.setItem("shopease-cart", JSON.stringify(cart));
    } catch (error) {
        console.warn("Could not save the cart:", error);
    }
}

function loadCart() {
    try {
        const savedCart = localStorage.getItem("shopease-cart");
        if (savedCart) {
            return JSON.parse(savedCart); // text -> array
        }
    } catch (error) {
        console.warn("Could not load the saved cart:", error);
    }
    return []; // nothing saved (or something went wrong): start empty
}


// =========================================================
// 3. OPEN AND CLOSE THE CART PANEL
// =========================================================
function openCart() {
    cartPanel.classList.add("open");
    cartOverlay.classList.add("open");
    document.body.classList.add("cart-open");
}

function closeCart() {
    cartPanel.classList.remove("open");
    cartOverlay.classList.remove("open");
    document.body.classList.remove("cart-open");
}

cartButton.addEventListener("click", openCart);
cartCloseButton.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// Pressing the Escape key closes the cart, the product popup and the mobile menu
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeCart();
        closeProductModal();
        closeMobileMenu();
    }
});


// =========================================================
// 3b. MOBILE MENU (hamburger button, mobile/tablet only)
// =========================================================
function openMobileMenu() {
    mainNav.classList.add("open");
    menuOverlay.classList.add("open");
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");
}

function closeMobileMenu() {
    mainNav.classList.remove("open");
    menuOverlay.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
}

// The hamburger button opens the menu, or closes it if it's already open
menuToggle.addEventListener("click", function () {
    if (mainNav.classList.contains("open")) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

// Clicking outside the menu (on the dark overlay) closes it
menuOverlay.addEventListener("click", closeMobileMenu);

// Clicking a link closes the menu (the page then scrolls to that section)
mainNav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
        closeMobileMenu();
    }
});

// Opening the cart while the menu is open: close the menu first
cartButton.addEventListener("click", closeMobileMenu);

// If the window is widened to desktop size while the menu is open,
// close it so the page isn't left dimmed and unable to scroll
const mobileWidth = window.matchMedia("(max-width: 900px)");
mobileWidth.addEventListener("change", function () {
    if (!mobileWidth.matches) {
        closeMobileMenu();
    }
});


// =========================================================
// 4. SHOW THE PRODUCTS: build one card for each product in the list
// =========================================================
function renderProducts() {
    productGrid.innerHTML = ""; // start with an empty grid

    // Step 1: keep only the products that match the search and category
    // Step 2: put those in the chosen order
    const visibleProducts = sortProducts(getFilteredProducts());

    visibleProducts.forEach(function (product) {
        const card = document.createElement("article");
        card.className = "product-card";
        card.dataset.id = product.id; // so a click on the card knows which product it is
        card.tabIndex = 0;            // lets keyboard users reach the card with Tab
        card.innerHTML = `
            <img src="${product.image}" alt="${product.alt}">
            <h3>${product.name}</h3>
            <p class="price">${formatPrice(product.price)}</p>
            <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productGrid.appendChild(card);
    });

    // Update "Showing X of Y products"
    if (visibleProducts.length === products.length) {
        resultsCount.textContent = "Showing all " + products.length + " products";
    } else {
        resultsCount.textContent = "Showing " + visibleProducts.length + " of " + products.length + " products";
    }

    // Show the "No products match" message only when nothing was found
    noResults.hidden = visibleProducts.length > 0;
}


// =========================================================
// 4b. SEARCH + CATEGORY FILTERS
// =========================================================
// Returns only the products that pass BOTH tests: category and search
function getFilteredProducts() {
    return products.filter(function (product) {
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });
}

// Puts a list of products in the order chosen in the "Sort by" dropdown
function sortProducts(list) {
    // .slice() makes a copy, so we never change the order of the original list
    const sorted = list.slice();

    if (sortOrder === "price-asc") {
        sorted.sort(function (a, b) {
            return a.price - b.price; // cheapest first
        });
    } else if (sortOrder === "price-desc") {
        sorted.sort(function (a, b) {
            return b.price - a.price; // most expensive first
        });
    }
    // "default": leave them in the same order as the products list

    return sorted;
}

// Builds the filter buttons from the categories found in the product list
function renderFilterButtons() {
    // Collect each category once: ["All", "Electronics", "Bags", "Shoes"]
    const categories = ["All"];
    products.forEach(function (product) {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
    });

    filterButtonsContainer.innerHTML = "";

    categories.forEach(function (category) {
        const button = document.createElement("button");
        button.className = "filter-btn";
        button.textContent = category;
        button.dataset.category = category;

        // Highlight the selected one
        if (category === activeCategory) {
            button.classList.add("active");
        }
        // Tells screen readers which button is selected
        button.setAttribute("aria-pressed", category === activeCategory);

        filterButtonsContainer.appendChild(button);
    });
}

// Typing in the search box: filter on every keystroke
// ("input" fires on every change, including the browser's built-in ✕ clear button)
searchInput.addEventListener("input", function () {
    searchText = searchInput.value.trim().toLowerCase();
    renderProducts();
});

// Clicking a category button (one listener for all of them)
filterButtonsContainer.addEventListener("click", function (event) {
    const button = event.target.closest(".filter-btn");
    if (!button) {
        return;
    }

    activeCategory = button.dataset.category;
    renderFilterButtons(); // move the highlight to the clicked button
    renderProducts();
});

// Choosing a sort option ("change" fires when a new option is picked)
sortSelect.addEventListener("change", function () {
    sortOrder = sortSelect.value; // the selected <option>'s value
    renderProducts();
});

// "Clear filters" button: reset the search and category back to the start
// (the sort choice is kept, since it doesn't hide any products)
clearFiltersButton.addEventListener("click", function () {
    searchText = "";
    searchInput.value = "";
    activeCategory = "All";
    renderFilterButtons();
    renderProducts();
});


// =========================================================
// 5. ADD TO CART
// =========================================================
// One listener on the whole grid handles every "Add to Cart" button,
// including ones for products you add to the list later.
productGrid.addEventListener("click", function (event) {
    const button = event.target.closest(".add-to-cart");
    if (!button) {
        // Not the button: if the click was anywhere else on a card, open its details popup
        const card = event.target.closest(".product-card");
        if (card) {
            openProductModal(Number(card.dataset.id));
        }
        return;
    }

    // Find the product in our list using the button's data-id
    const productId = Number(button.dataset.id);
    const product = products.find(function (item) {
        return item.id === productId;
    });

    addToCart(product.name, product.price, product.image);
    console.log("Added to cart: " + product.name);

    // Give quick feedback: change the button text for 1 second
    button.textContent = "Added ✓";
    button.disabled = true;

    setTimeout(function () {
        button.textContent = "Add to Cart";
        button.disabled = false;
    }, 1000); // 1000 milliseconds = 1 second
});

// Keyboard users: pressing Enter on a focused card also opens its popup
productGrid.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && event.target.classList.contains("product-card")) {
        openProductModal(Number(event.target.dataset.id));
    }
});

// "quantity = 1" means: if no quantity is given, add 1.
// The card buttons add 1; the popup can add more at once.
function addToCart(name, price, image, quantity = 1) {
    // Is this product already in the cart?
    const existingItem = cart.find(function (item) {
        return item.name === name;
    });

    if (existingItem) {
        // Yes: increase its quantity
        existingItem.quantity = existingItem.quantity + quantity;
    } else {
        // No: add it as a new item
        cart.push({ name: name, price: price, image: image, quantity: quantity });
    }

    renderCart();
}


// =========================================================
// 5b. PRODUCT DETAILS POPUP
// =========================================================
function openProductModal(productId) {
    // Look up the clicked product in the existing products list
    const product = products.find(function (item) {
        return item.id === productId;
    });
    if (!product) {
        return;
    }

    modalProduct = product;
    modalQuantity = 1;

    // Fill the popup with this product's data
    modalImage.src = product.image;
    modalImage.alt = product.alt;
    modalCategory.textContent = product.category;
    modalTitle.textContent = product.name;
    modalPrice.textContent = formatPrice(product.price);
    modalDescription.textContent = product.description;
    modalQtyElement.textContent = modalQuantity;

    // Reset the Add button in case it still says "Added ✓" from before
    modalAddButton.textContent = "Add to Cart";
    modalAddButton.disabled = false;

    lastFocusedElement = document.activeElement; // remember where we came from
    productModal.classList.add("open");
    document.body.classList.add("modal-open");
    modalCloseButton.focus(); // move keyboard focus into the popup
}

function closeProductModal() {
    if (!productModal.classList.contains("open")) {
        return; // already closed: nothing to do
    }
    productModal.classList.remove("open");
    document.body.classList.remove("modal-open");

    // Put keyboard focus back on the card that opened the popup
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
}

modalCloseButton.addEventListener("click", closeProductModal);

// Clicking the dark overlay closes the popup,
// but clicks INSIDE the white popup should not
productModal.addEventListener("click", function (event) {
    if (event.target === productModal) {
        closeProductModal();
    }
});

// Quantity picker (never below 1)
modalDecreaseButton.addEventListener("click", function () {
    if (modalQuantity > 1) {
        modalQuantity = modalQuantity - 1;
        modalQtyElement.textContent = modalQuantity;
    }
});

modalIncreaseButton.addEventListener("click", function () {
    modalQuantity = modalQuantity + 1;
    modalQtyElement.textContent = modalQuantity;
});

// Add to Cart from the popup uses the SAME addToCart function as the cards
modalAddButton.addEventListener("click", function () {
    addToCart(modalProduct.name, modalProduct.price, modalProduct.image, modalQuantity);
    console.log("Added to cart from popup: " + modalQuantity + " × " + modalProduct.name);

    // Same feedback as the card buttons
    modalAddButton.textContent = "Added ✓";
    modalAddButton.disabled = true;

    setTimeout(function () {
        modalAddButton.textContent = "Add to Cart";
        modalAddButton.disabled = false;
    }, 1000);
});


// =========================================================
// 6. CHANGE QUANTITY (+ / −) AND REMOVE
// =========================================================
// One listener on the whole list handles every button inside it.
// Each button says what it does (data-action) and which item (data-index).
cartItemsList.addEventListener("click", function (event) {
    const button = event.target.closest("button");
    if (!button) {
        return; // the click wasn't on a button
    }

    const index = Number(button.dataset.index);
    const action = button.dataset.action;

    if (action === "increase") {
        cart[index].quantity = cart[index].quantity + 1;
    } else if (action === "decrease") {
        cart[index].quantity = cart[index].quantity - 1;
        if (cart[index].quantity === 0) {
            cart.splice(index, 1); // quantity hit 0, so remove the item
        }
    } else if (action === "remove") {
        cart.splice(index, 1); // remove 1 item at position "index"
    }

    renderCart();
});


// =========================================================
// 7. RENDER: redraw the cart so the page matches the "cart" array
// =========================================================
function renderCart() {
    cartItemsList.innerHTML = ""; // start with an empty list

    let total = 0;
    let itemCount = 0;

    cart.forEach(function (item, index) {
        const lineTotal = item.price * item.quantity;
        total = total + lineTotal;
        itemCount = itemCount + item.quantity;

        // Build one <li> row for this product
        const row = document.createElement("li");
        row.className = "cart-item";
        row.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p class="cart-item-price">${formatPrice(item.price)} each</p>
                <div class="cart-item-controls">
                    <button class="qty-btn" data-action="decrease" data-index="${index}" aria-label="Decrease quantity">−</button>
                    <span class="qty">${item.quantity}</span>
                    <button class="qty-btn" data-action="increase" data-index="${index}" aria-label="Increase quantity">+</button>
                    <button class="remove-btn" data-action="remove" data-index="${index}">Remove</button>
                </div>
            </div>
            <p class="cart-item-total">${formatPrice(lineTotal)}</p>
        `;
        cartItemsList.appendChild(row);
    });

    // Update everything that depends on the cart
    cartCountElement.textContent = itemCount;
    cartTotalElement.textContent = formatPrice(total);
    cartEmptyMessage.hidden = cart.length > 0;   // hide "empty" message if we have items
    checkoutButton.disabled = cart.length === 0; // can't check out an empty cart

    // Every change to the cart ends here, so this one line saves them all
    saveCart();

    // Keep the checkout's order summary in sync too
    // (e.g. if items are removed from the cart panel while on the checkout page)
    renderOrderSummary();
}


// =========================================================
// 8. CHECKOUT
// =========================================================
// The cart's Checkout button now opens the checkout view
checkoutButton.addEventListener("click", openCheckout);

function openCheckout() {
    closeCart();
    closeMobileMenu();

    // Always start on the form (not an old confirmation message)
    checkoutContent.hidden = false;
    orderConfirmation.hidden = true;
    renderOrderSummary();

    // This class shows the checkout and hides the store sections (see style.css)
    document.body.classList.add("checkout-active");
    window.scrollTo({ top: 0, behavior: "instant" });
}

function closeCheckout() {
    document.body.classList.remove("checkout-active");
}

// "Continue Shopping" (top of checkout + on the confirmation):
// back to the products. The cart is untouched.
continueShoppingButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        closeCheckout();
        document.getElementById("products").scrollIntoView();
    });
});

// Clicking the logo or a menu link (Home, Shop, ...) while on the checkout
// also returns to the store, then the link scrolls to its section as usual
document.addEventListener("click", function (event) {
    const link = event.target.closest('a[href^="#"]');
    if (link && document.body.classList.contains("checkout-active")) {
        closeCheckout();
    }
});

// Adds up the cart: price × quantity for every item
function getCartTotal() {
    let total = 0;
    cart.forEach(function (item) {
        total = total + item.price * item.quantity;
    });
    return total;
}

// Fills the "Order Summary" box from the existing cart array
function renderOrderSummary() {
    summaryItemsList.innerHTML = "";
    let itemCount = 0;

    cart.forEach(function (item) {
        itemCount = itemCount + item.quantity;

        const row = document.createElement("li");
        row.className = "summary-item";
        row.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="summary-item-info">
                <p class="summary-item-name">${item.name}</p>
                <p class="summary-item-meta">Qty ${item.quantity} × ${formatPrice(item.price)}</p>
            </div>
            <p class="summary-item-total">${formatPrice(item.price * item.quantity)}</p>
        `;
        summaryItemsList.appendChild(row);
    });

    const total = getCartTotal();
    summaryCount.textContent = itemCount;
    summarySubtotal.textContent = formatPrice(total);
    summaryTotal.textContent = formatPrice(total);

    // Empty cart: show a message and don't allow placing an order
    summaryEmpty.hidden = cart.length > 0;
    placeOrderButton.disabled = cart.length === 0;
}


// ---------- Form validation ----------
// The fields that must be filled in (these match each input's name="...")
const requiredFields = ["fullName", "phone", "email", "country", "city", "address"];

// Simple patterns to check the format of what was typed:
// email: something@something.something (no spaces)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// phone: starts with + or a digit, then at least 6 more digits, spaces, dashes or brackets
const phonePattern = /^[+\d][\d\s\-()]{6,}$/;

// Returns an error message for a field, or "" if the value is fine
function getFieldError(fieldName, value) {
    if (fieldName === "fullName" && value === "") {
        return "Please enter your full name.";
    }
    if (fieldName === "phone") {
        if (value === "") return "Please enter your phone number.";
        if (!phonePattern.test(value)) return "Please enter a valid phone number.";
    }
    if (fieldName === "email") {
        if (value === "") return "Please enter your email address.";
        if (!emailPattern.test(value)) return "Please enter a valid email, like name@example.com.";
    }
    if (fieldName === "country" && value === "") {
        return "Please enter your country.";
    }
    if (fieldName === "city" && value === "") {
        return "Please enter your city.";
    }
    if (fieldName === "address" && value === "") {
        return "Please enter your full address.";
    }
    return ""; // no error
}

// Shows (or clears, if message is "") the error under one input
function setFieldError(input, message) {
    const errorElement = document.getElementById(input.name + "-error");
    errorElement.textContent = message;
    input.classList.toggle("invalid", message !== "");  // red border on/off
    input.setAttribute("aria-invalid", message !== "");
}

// Checks every required field. Returns true only if ALL are valid.
function validateCheckoutForm() {
    let firstInvalidInput = null;

    requiredFields.forEach(function (fieldName) {
        const input = checkoutForm.elements[fieldName];
        const message = getFieldError(fieldName, input.value.trim());
        setFieldError(input, message);

        if (message !== "" && firstInvalidInput === null) {
            firstInvalidInput = input;
        }
    });

    if (firstInvalidInput) {
        firstInvalidInput.focus(); // jump to the first problem
        return false;
    }
    return true;
}

// While fixing a field, re-check it on each keystroke so the error disappears once it's valid
checkoutForm.addEventListener("input", function (event) {
    const input = event.target;
    if (input.classList.contains("invalid")) {
        setFieldError(input, getFieldError(input.name, input.value.trim()));
    }
});

// A simple order number, e.g. "SE-482913"
function generateOrderNumber() {
    return "SE-" + Math.floor(100000 + Math.random() * 900000);
}


// ---------- Place Order ----------
checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault(); // don't reload the page

    if (cart.length === 0) {
        return; // nothing to order
    }
    if (!validateCheckoutForm()) {
        return; // errors are now shown under the fields
    }

    // 1. Show the confirmation with this order's details
    document.getElementById("confirm-name").textContent = checkoutForm.elements.fullName.value.trim();
    document.getElementById("confirm-order-number").textContent = generateOrderNumber();
    document.getElementById("confirm-total").textContent = formatPrice(getCartTotal());
    document.getElementById("confirm-email").textContent = checkoutForm.elements.email.value.trim();

    checkoutContent.hidden = true;
    orderConfirmation.hidden = false;
    window.scrollTo({ top: 0, behavior: "instant" });

    // 2. Only now that the order is confirmed: empty the cart.
    //    renderCart() updates the counter, the cart panel AND localStorage.
    cart = [];
    renderCart();
    checkoutForm.reset();
});


// =========================================================
// 9. CONTACT FORM
// =========================================================
contactForm.addEventListener("submit", function (event) {
    // Stop the browser from reloading the page (its default behavior)
    event.preventDefault();

    // Read what the user typed in the "name" field
    const name = document.getElementById("name").value;

    alert("Thanks, " + name + "! Your message has been received.");

    // Empty all the fields
    contactForm.reset();
});


// When the page first loads: build the filter buttons and product cards,
// then draw the cart (shows saved items, or the empty state)
renderFilterButtons();
renderProducts();
renderCart();
