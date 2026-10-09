// =========================================================
// 0. PRODUCT DATA: every product in the store, in one list
// =========================================================
// To add a product, copy one { ... } block, paste it and change the values.
// "id" must be different for each product.
// A new "category" automatically gets its own filter button.
// Photos are stored in images/products (originally from Unsplash, free to use).
// To use your own photo, save it there with the same file name to replace it,
// or add a new file and change "image" to point to it.
const products = [
    // ---------- Sleeping Pillows ----------
    {
        id: 1,
        name: "Cloud Down Pillow",
        price: 89.00,
        category: "Sleeping Pillows",
        description: "Hotel-grade down-alternative fill in a 400-thread-count cotton shell. Soft, supportive and fully washable.",
        image: "images/products/cloud-down-pillow-white.jpg",
        alt: "Soft white pillows resting on white bed linen"
    },
    {
        id: 2,
        name: "Mulberry Silk Pillow",
        price: 119.00,
        category: "Sleeping Pillows",
        description: "A pure mulberry silk cover over a medium-firm core, gentle on hair and skin for a smoother night's sleep.",
        image: "images/products/mulberry-silk-pillow.jpg",
        alt: "A soft white pillow against a white wall"
    },
    {
        id: 3,
        name: "Memory Foam Contour Pillow",
        price: 95.00,
        category: "Sleeping Pillows",
        description: "Ergonomic memory foam that cradles the neck and shoulders, wrapped in a breathable bamboo cover.",
        image: "images/products/memory-foam-contour-pillow.jpg",
        alt: "Stacked white pillows on a bed"
    },
    {
        id: 4,
        name: "Organic Cotton Pillow Pair",
        price: 129.00,
        category: "Sleeping Pillows",
        description: "Two medium-support pillows in organic cotton percale, filled with responsibly sourced feathers.",
        image: "images/products/organic-cotton-pillow-pair.jpg",
        alt: "Two white pillows on a made bed"
    },

    // ---------- Blankets ----------
    {
        id: 5,
        name: "Merino Wool Blanket",
        price: 165.00,
        category: "Blankets",
        description: "Soft, breathable merino wool woven for year-round warmth. Light enough for spring, cozy enough for winter.",
        image: "images/products/merino-wool-blanket.jpg",
        alt: "A stack of folded wool blankets"
    },
    {
        id: 6,
        name: "Honey Knit Throw",
        price: 89.00,
        category: "Blankets",
        description: "A textured cotton-knit throw in a warm honey tone, perfect for layering at the foot of the bed.",
        image: "images/products/honey-knit-throw.jpg",
        alt: "Folded honey-colored knit throws"
    },
    {
        id: 7,
        name: "Cashmere Blend Throw",
        price: 189.00,
        category: "Blankets",
        description: "Feather-light cashmere and wool blend with hand-finished fringe edges in a soft dove gray.",
        image: "images/products/cashmere-blend-throw.jpg",
        alt: "A gray throw blanket with fringe edges"
    },
    {
        id: 8,
        name: "Waffle Cotton Blanket",
        price: 119.00,
        category: "Blankets",
        description: "Airy waffle-weave cotton that traps warmth without weight. Pre-washed for an instantly soft feel.",
        image: "images/products/waffle-cotton-blanket.jpg",
        alt: "A cream textured blanket draped over a chair"
    },

    // ---------- Bed Sheets ----------
    {
        id: 9,
        name: "Sateen Sheet Set",
        price: 149.00,
        category: "Bed Sheets",
        description: "Silky 600-thread-count cotton sateen with a subtle sheen. Includes a fitted sheet, flat sheet and two pillowcases.",
        image: "images/products/sateen-sheet-set.jpg",
        alt: "Close-up of cream sateen bed sheets"
    },
    {
        id: 10,
        name: "Stonewashed Linen Sheet Set",
        price: 219.00,
        category: "Bed Sheets",
        description: "Pure French flax linen, stonewashed for a relaxed, lived-in texture that gets softer with every wash.",
        image: "images/products/stonewashed-linen-sheet-set.jpg",
        alt: "Close-up of charcoal stonewashed linen"
    },
    {
        id: 11,
        name: "Crisp Percale Sheet Set",
        price: 139.00,
        category: "Bed Sheets",
        description: "Cool, matte cotton percale with a classic hotel crispness. Ideal for warm sleepers.",
        image: "images/products/crisp-percale-sheet-set.jpg",
        alt: "Layers of crisp white percale sheets"
    },
    {
        id: 12,
        name: "Bamboo Lyocell Sheet Set",
        price: 169.00,
        category: "Bed Sheets",
        description: "Breathable, temperature-regulating bamboo lyocell with a buttery-soft drape.",
        image: "images/products/bamboo-lyocell-sheet-set.jpg",
        alt: "Soft white bamboo sheets"
    },

    // ---------- Duvet Covers ----------
    {
        id: 13,
        name: "Channel Quilted Duvet Cover",
        price: 199.00,
        category: "Duvet Covers",
        description: "Crisp white cotton with elegant channel stitching for a tailored, hotel-inspired finish.",
        image: "images/products/channel-quilted-duvet-cover.jpg",
        alt: "A white channel-quilted duvet"
    },
    {
        id: 14,
        name: "Diamond Quilted Duvet Cover",
        price: 189.00,
        category: "Duvet Covers",
        description: "Soft gray cotton with a diamond-quilted face that adds quiet texture to any bedroom.",
        image: "images/products/diamond-quilted-duvet-cover.jpg",
        alt: "A gray quilted duvet cover on a bed"
    },
    {
        id: 15,
        name: "Classic White Duvet Cover",
        price: 159.00,
        category: "Duvet Covers",
        description: "Timeless white cotton sateen with a hidden button closure and corner ties to keep your duvet in place.",
        image: "images/products/classic-white-duvet-cover.jpg",
        alt: "A bed dressed in a white duvet cover"
    },
    {
        id: 16,
        name: "Washed Linen Duvet Cover",
        price: 239.00,
        category: "Duvet Covers",
        description: "Relaxed, breathable linen in natural white. Garment-washed for softness and an effortless look.",
        image: "images/products/washed-linen-duvet-cover.jpg",
        alt: "A soft white washed linen duvet"
    },

    // ---------- Towels ----------
    {
        id: 17,
        name: "Plush Turkish Towel Set",
        price: 99.00,
        category: "Towels",
        description: "Three long-staple Turkish cotton towels: thick, absorbent and cloud-soft.",
        image: "images/products/plush-turkish-towel-set.jpg",
        alt: "A stack of plush gray and white towels"
    },
    {
        id: 18,
        name: "Hotel Collection Towel Set",
        price: 129.00,
        category: "Towels",
        description: "A six-piece set of 700 GSM towels in soft mist gray, made to feel like a five-star stay.",
        image: "images/products/hotel-collection-towel-set.jpg",
        alt: "A stack of folded light gray towels"
    },
    {
        id: 19,
        name: "Charcoal Ribbed Bath Sheet",
        price: 59.00,
        category: "Towels",
        description: "An extra-large bath sheet with a ribbed texture in deep charcoal. Quick-drying and generously sized.",
        image: "images/products/charcoal-ribbed-bath-sheet.jpg",
        alt: "A rolled charcoal bath towel"
    },
    {
        id: 20,
        name: "Waffle Weave Hand Towels",
        price: 45.00,
        category: "Towels",
        description: "A pair of lightweight waffle-weave hand towels that dry quickly and look beautiful on display.",
        image: "images/products/waffle-weave-hand-towels.jpg",
        alt: "White and charcoal towels hanging in a bathroom"
    },

    // ---------- Home Accessories ----------
    {
        id: 21,
        name: "Linen & Cedar Reed Diffuser",
        price: 49.00,
        category: "Home Accessories",
        description: "A calming blend of fresh linen and soft cedarwood in a hand-blown glass bottle.",
        image: "images/products/linen-cedar-reed-diffuser.jpg",
        alt: "A glass reed diffuser in soft sunlight"
    },
    {
        id: 22,
        name: "Amber Glass Scented Candle",
        price: 39.00,
        category: "Home Accessories",
        description: "Hand-poured soy wax with notes of amber, vanilla and sandalwood. Around 50 hours of burn time.",
        image: "images/products/amber-glass-scented-candle.jpg",
        alt: "A scented candle in an amber glass jar being lit"
    },
    {
        id: 23,
        name: "Linen Cushion Cover",
        price: 35.00,
        category: "Home Accessories",
        description: "A washed linen cushion cover in pure white with a concealed zip. Pairs beautifully with our throws.",
        image: "images/products/linen-cushion-cover.jpg",
        alt: "A white linen cushion with a knit throw"
    },
    {
        id: 24,
        name: "Matte Ceramic Vase",
        price: 65.00,
        category: "Home Accessories",
        description: "A hand-glazed ceramic vase in a matte charcoal finish, for fresh stems or dried branches.",
        image: "images/products/matte-ceramic-vase.jpg",
        alt: "A matte charcoal ceramic vase with greenery"
    }
];


// =========================================================
// 0b. STORE SETTINGS: fill these in before publishing orders
// =========================================================
const STORE_CONFIG = {
    // The store's WhatsApp number in international format: digits only,
    // no "+", spaces or dashes. Example format for Lebanon: "961" + number without the leading 0.
    // While this is empty, checkout and the contact form explain that WhatsApp isn't set up yet.
    whatsappNumber: "",

    // Delivery fee in US dollars, e.g. 4 or 5. Use 0 for free delivery.
    // Leave as null if the fee should be confirmed with the customer on WhatsApp.
    deliveryFee: null
};

const COMPARE_LIMIT = 4;                     // maximum products in the comparison
const CART_STORAGE_KEY = "shopease-cart";    // kept from the first version so saved carts survive
const FAVORITES_STORAGE_KEY = "havome-favorites";


// =========================================================
// 1. FIND THE ELEMENTS WE NEED ON THE PAGE
// =========================================================
const siteHeader = document.getElementById("site-header");
const productGrid = document.getElementById("product-grid");

// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const menuOverlay = document.getElementById("menu-overlay");

// Search, filters, sort
const searchToggle = document.getElementById("search-toggle");
const searchInput = document.getElementById("search-input");
const priceMinInput = document.getElementById("price-min");
const priceMaxInput = document.getElementById("price-max");
const priceHint = document.getElementById("price-hint");
const sortSelect = document.getElementById("sort-select");
const filterButtonsContainer = document.getElementById("filter-buttons");
const clearAllButton = document.getElementById("clear-all-filters");
const clearFiltersButton = document.getElementById("clear-filters");
const resultsCount = document.getElementById("results-count");
const noResults = document.getElementById("no-results");

// Cart panel
const cartButton = document.querySelector(".cart-button");
const cartCountElement = document.getElementById("cart-count");
const cartPanel = document.getElementById("cart-panel");
const cartOverlay = document.getElementById("cart-overlay");
const cartCloseButton = document.getElementById("cart-close");
const cartItemsList = document.getElementById("cart-items");
const cartEmpty = document.getElementById("cart-empty");
const cartFooter = document.getElementById("cart-footer");
const cartTotalElement = document.getElementById("cart-total");
const checkoutButton = document.getElementById("checkout-btn");

// Wishlist panel
const wishlistToggle = document.getElementById("wishlist-toggle");
const wishlistCountElement = document.getElementById("wishlist-count");
const wishlistPanel = document.getElementById("wishlist-panel");
const wishlistOverlay = document.getElementById("wishlist-overlay");
const wishlistCloseButton = document.getElementById("wishlist-close");
const wishlistItemsList = document.getElementById("wishlist-items");
const wishlistEmpty = document.getElementById("wishlist-empty");

// Compare tray + view
const compareTray = document.getElementById("compare-tray");
const compareCount = document.getElementById("compare-count");
const compareTrayItems = document.getElementById("compare-tray-items");
const compareOpenButton = document.getElementById("compare-open");
const compareClearButton = document.getElementById("compare-clear");
const compareModal = document.getElementById("compare-modal");
const compareCloseButton = document.getElementById("compare-close");
const compareClearAllButton = document.getElementById("compare-clear-all");
const compareTable = document.getElementById("compare-table");
const compareEmpty = document.getElementById("compare-empty");

// Product details popup
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
const modalFavButton = document.getElementById("modal-fav");
const modalFavText = document.getElementById("modal-fav-text");

// Checkout
const checkoutContent = document.getElementById("checkout-content");
const checkoutForm = document.getElementById("checkout-form");
const placeOrderButton = document.getElementById("place-order-btn");
const whatsappSetupNotice = document.getElementById("whatsapp-setup-notice");
const summaryItemsList = document.getElementById("summary-items");
const summaryEmpty = document.getElementById("summary-empty");
const summaryCount = document.getElementById("summary-count");
const summarySubtotal = document.getElementById("summary-subtotal");
const summaryDelivery = document.getElementById("summary-delivery");
const summaryTotal = document.getElementById("summary-total");
const summaryDeliveryNote = document.getElementById("summary-delivery-note");
const orderConfirmation = document.getElementById("order-confirmation");
const confirmWhatsappLink = document.getElementById("confirm-whatsapp-link");
const confirmClearCartButton = document.getElementById("confirm-clear-cart");
const confirmClearedNote = document.getElementById("confirm-cleared-note");

// Contact form, toast, floating WhatsApp button
const contactForm = document.getElementById("contact-form");
const contactNote = document.getElementById("contact-note");
const toast = document.getElementById("toast");
const whatsappFloat = document.getElementById("whatsapp-float");


// =========================================================
// 2. STATE: what the shopper has chosen
// =========================================================
let searchText = "";           // what's typed in the search box (lowercase)
let activeCategory = "All";    // which category is selected
let minPrice = null;           // null = no minimum
let maxPrice = null;           // null = no maximum
let sortOrder = "default";

let cart = loadCart();             // [{ id, name, price, image, quantity }]
let favorites = loadFavorites();   // [product ids]
let compareList = [];              // [product ids], max COMPARE_LIMIT

let modalProduct = null;           // product shown in the details popup
let modalQuantity = 1;
const focusStack = [];             // where to return keyboard focus when a panel closes


// =========================================================
// 3. HELPERS
// =========================================================
// 45 -> "$45.00"
function formatPrice(amount) {
    return "$" + amount.toFixed(2);
}

function findProduct(id) {
    return products.find(function (product) {
        return product.id === Number(id);
    });
}

// localStorage can be blocked (e.g. some private modes), so every read/write is wrapped
function readStorage(key, fallback) {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : fallback;
    } catch (error) {
        console.warn("Could not read saved data:", key, error);
        return fallback;
    }
}

function writeStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn("Could not save data:", key, error);
    }
}

// Small message at the bottom of the screen, e.g. "Added to your wishlist"
let toastTimer = null;
function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
        toast.classList.remove("show");
    }, 2600);
}

// Remember the element that opened a panel, and put focus back there when it closes
function rememberFocus() {
    focusStack.push(document.activeElement);
}

function restoreFocus() {
    const element = focusStack.pop();
    if (element && document.contains(element) && typeof element.focus === "function") {
        element.focus({ preventScroll: true });
    }
}

// Lock page scrolling while any panel or popup is open
function updateScrollLock() {
    const somethingOpen = document.querySelector(
        ".side-panel.open, .modal-overlay.open, .main-nav.open"
    );
    document.body.classList.toggle("no-scroll", Boolean(somethingOpen));
}


// =========================================================
// 4. MOBILE MENU (hamburger button, mobile/tablet only)
// =========================================================
function openMobileMenu() {
    mainNav.classList.add("open");
    menuOverlay.classList.add("open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");
    updateScrollLock();
}

function closeMobileMenu() {
    mainNav.classList.remove("open");
    menuOverlay.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    updateScrollLock();
}

menuToggle.addEventListener("click", function () {
    if (mainNav.classList.contains("open")) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
});

menuOverlay.addEventListener("click", closeMobileMenu);

mainNav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
        closeMobileMenu();
    }
});

// If the window is widened to desktop size while the menu is open, close it
const mobileWidth = window.matchMedia("(max-width: 900px)");
mobileWidth.addEventListener("change", function () {
    if (!mobileWidth.matches) {
        closeMobileMenu();
    }
});


// =========================================================
// 5. SIDE PANELS: cart + wishlist
// =========================================================
function openPanel(panel, overlay) {
    closeMobileMenu();
    closeAssistant(false); // the assistant sits in the same corner, so it steps aside
    rememberFocus();
    panel.classList.add("open");
    overlay.classList.add("open");
    updateScrollLock();
    panel.querySelector(".panel-close").focus();
}

function closePanel(panel, overlay) {
    if (!panel.classList.contains("open")) {
        return;
    }
    panel.classList.remove("open");
    overlay.classList.remove("open");
    updateScrollLock();
    restoreFocus();
}

function openCart() { openPanel(cartPanel, cartOverlay); }
function closeCart() { closePanel(cartPanel, cartOverlay); }
function openWishlist() { openPanel(wishlistPanel, wishlistOverlay); }
function closeWishlist() { closePanel(wishlistPanel, wishlistOverlay); }

cartButton.addEventListener("click", openCart);
cartCloseButton.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

wishlistToggle.addEventListener("click", openWishlist);
wishlistCloseButton.addEventListener("click", closeWishlist);
wishlistOverlay.addEventListener("click", closeWishlist);

// "Browse the collection" links inside the empty panels
document.querySelectorAll(".panel-shop-link").forEach(function (link) {
    link.addEventListener("click", function () {
        closeCart();
        closeWishlist();
        closeCheckout();
    });
});


// =========================================================
// 6. PRODUCT CATALOG: filters, sorting and product cards
// =========================================================
// Returns only the products that pass every active filter
function getFilteredProducts() {
    return products.filter(function (product) {
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;

        const searchableText = (product.name + " " + product.category + " " + product.description).toLowerCase();
        const matchesSearch = searchableText.includes(searchText);

        const matchesMin = minPrice === null || product.price >= minPrice;
        const matchesMax = maxPrice === null || product.price <= maxPrice;

        return matchesCategory && matchesSearch && matchesMin && matchesMax;
    });
}

// Puts a list of products in the chosen order (on a copy, never the original list)
function sortProducts(list) {
    const sorted = list.slice();

    if (sortOrder === "price-asc") {
        sorted.sort(function (a, b) { return a.price - b.price; });
    } else if (sortOrder === "price-desc") {
        sorted.sort(function (a, b) { return b.price - a.price; });
    } else if (sortOrder === "name-asc") {
        sorted.sort(function (a, b) { return a.name.localeCompare(b.name); });
    } else if (sortOrder === "name-desc") {
        sorted.sort(function (a, b) { return b.name.localeCompare(a.name); });
    }
    // "default": same order as the products list

    return sorted;
}

function hasActiveFilters() {
    return searchText !== "" || activeCategory !== "All" ||
        minPrice !== null || maxPrice !== null || sortOrder !== "default";
}

// Small SVG icons used on the cards
const heartIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"></path></svg>';
const compareIcon = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 4v13M7 17l-3-3M7 17l3-3M17 20V7M17 7l-3 3M17 7l3 3"></path></svg>';

function renderProducts() {
    const visibleProducts = sortProducts(getFilteredProducts());
    productGrid.innerHTML = "";

    visibleProducts.forEach(function (product) {
        const card = document.createElement("article");
        card.className = "product-card";
        card.dataset.id = product.id;
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.alt}" loading="lazy">
                <div class="product-actions">
                    <button class="icon-toggle fav-btn" data-id="${product.id}" aria-pressed="false"
                            aria-label="Save ${product.name} to wishlist">${heartIcon}</button>
                    <button class="icon-toggle compare-btn" data-id="${product.id}" aria-pressed="false"
                            aria-label="Compare ${product.name}">${compareIcon}</button>
                </div>
                <button class="quick-view-btn" data-id="${product.id}">Quick view</button>
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <p class="price">${formatPrice(product.price)}</p>
                    <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });

    // "Showing X of Y products"
    if (visibleProducts.length === products.length) {
        resultsCount.textContent = "Showing all " + products.length + " products";
    } else {
        resultsCount.textContent = "Showing " + visibleProducts.length + " of " + products.length + " products";
    }

    noResults.hidden = visibleProducts.length > 0;
    clearAllButton.hidden = !hasActiveFilters();

    // Explain an impossible price range instead of silently showing nothing
    const rangeIsBackwards = minPrice !== null && maxPrice !== null && minPrice > maxPrice;
    priceHint.hidden = !rangeIsBackwards;
    priceHint.textContent = rangeIsBackwards ? "The minimum price is higher than the maximum." : "";

    updateFavoriteButtons();
    updateCompareButtons();
}

// One button per category, built from the product list
function renderFilterButtons() {
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
        button.classList.toggle("active", category === activeCategory);
        button.setAttribute("aria-pressed", category === activeCategory);
        filterButtonsContainer.appendChild(button);
    });
}

function setCategory(category) {
    const exists = products.some(function (product) {
        return product.category === category;
    });
    activeCategory = exists ? category : "All";
    renderFilterButtons();
    renderProducts();
}

// Turns a price box into a number, or null if it's empty or invalid
function readPriceInput(input) {
    if (input.value.trim() === "") {
        return null;
    }
    const value = Number(input.value);
    return Number.isFinite(value) && value >= 0 ? value : null;
}

function clearAllFilters() {
    searchText = "";
    searchInput.value = "";
    activeCategory = "All";
    minPrice = null;
    maxPrice = null;
    priceMinInput.value = "";
    priceMaxInput.value = "";
    sortOrder = "default";
    sortSelect.value = "default";
    renderFilterButtons();
    renderProducts();
}

searchInput.addEventListener("input", function () {
    searchText = searchInput.value.trim().toLowerCase();
    renderProducts();
});

[priceMinInput, priceMaxInput].forEach(function (input) {
    input.addEventListener("input", function () {
        minPrice = readPriceInput(priceMinInput);
        maxPrice = readPriceInput(priceMaxInput);
        renderProducts();
    });
});

sortSelect.addEventListener("change", function () {
    sortOrder = sortSelect.value;
    renderProducts();
});

filterButtonsContainer.addEventListener("click", function (event) {
    const button = event.target.closest(".filter-btn");
    if (button) {
        setCategory(button.dataset.category);
    }
});

clearAllButton.addEventListener("click", clearAllFilters);
clearFiltersButton.addEventListener("click", clearAllFilters);

// Category cards and footer category links: filter, then the link scrolls to the collection
document.querySelectorAll("[data-category-link]").forEach(function (link) {
    link.addEventListener("click", function () {
        closeCheckout();
        searchText = "";
        searchInput.value = "";
        setCategory(link.dataset.categoryLink);
    });
});

// Header search icon: go to the collection and put the cursor in the search box
searchToggle.addEventListener("click", function () {
    closeMobileMenu();
    closeCheckout();
    document.getElementById("products").scrollIntoView();
    searchInput.focus({ preventScroll: true });
});

// One listener for every button on every product card
productGrid.addEventListener("click", function (event) {
    const favButton = event.target.closest(".fav-btn");
    if (favButton) {
        toggleFavorite(favButton.dataset.id);
        return;
    }

    const compareButton = event.target.closest(".compare-btn");
    if (compareButton) {
        toggleCompare(compareButton.dataset.id);
        return;
    }

    const addButton = event.target.closest(".add-to-cart");
    if (addButton) {
        addToCart(addButton.dataset.id, 1);
        showButtonFeedback(addButton);
        return;
    }

    // Quick view button, or a click anywhere else on the card, opens the details
    const card = event.target.closest(".product-card");
    if (card) {
        openProductModal(card.dataset.id);
    }
});

// "Added ✓" for one second
function showButtonFeedback(button) {
    button.textContent = "Added ✓";
    button.disabled = true;
    setTimeout(function () {
        button.textContent = "Add to Cart";
        button.disabled = false;
    }, 1000);
}


// =========================================================
// 7. CART
// =========================================================
// Loads the saved cart and cleans it: drops products that no longer exist,
// fixes invalid quantities, merges duplicates and refreshes prices/images.
function loadCart() {
    const saved = readStorage(CART_STORAGE_KEY, []);
    const cleanCart = [];
    if (!Array.isArray(saved)) {
        return cleanCart;
    }

    saved.forEach(function (item) {
        if (!item) {
            return;
        }
        const product = products.find(function (p) {
            return p.id === item.id || p.name === item.name;
        });
        const quantity = Math.floor(Number(item.quantity));
        if (!product || !(quantity >= 1)) {
            return;
        }

        const existing = cleanCart.find(function (c) { return c.id === product.id; });
        if (existing) {
            existing.quantity = Math.min(existing.quantity + quantity, 99);
        } else {
            cleanCart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: Math.min(quantity, 99)
            });
        }
    });
    return cleanCart;
}

function saveCart() {
    writeStorage(CART_STORAGE_KEY, cart);
}

function addToCart(productId, quantity) {
    const product = findProduct(productId);
    if (!product) {
        return;
    }
    const existing = cart.find(function (item) { return item.id === product.id; });
    if (existing) {
        existing.quantity = Math.min(existing.quantity + quantity, 99);
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: quantity });
    }
    renderCart();
}

function getCartSubtotal() {
    let total = 0;
    cart.forEach(function (item) {
        total = total + item.price * item.quantity;
    });
    return total;
}

function getCartItemCount() {
    let count = 0;
    cart.forEach(function (item) {
        count = count + item.quantity;
    });
    return count;
}

// +, − and Remove buttons in the cart (one listener for all of them)
cartItemsList.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-action]");
    if (!button) {
        return;
    }
    const item = cart.find(function (c) { return c.id === Number(button.dataset.id); });
    if (!item) {
        return;
    }

    if (button.dataset.action === "increase") {
        item.quantity = Math.min(item.quantity + 1, 99);
    } else if (button.dataset.action === "decrease") {
        item.quantity = item.quantity - 1;
    } else if (button.dataset.action === "remove") {
        item.quantity = 0;
    }

    cart = cart.filter(function (c) { return c.quantity > 0; });
    renderCart();
});

// Redraws everything that depends on the cart, then saves it
function renderCart() {
    cartItemsList.innerHTML = "";

    cart.forEach(function (item) {
        const row = document.createElement("li");
        row.className = "panel-item";
        row.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="panel-item-image">
            <div class="panel-item-info">
                <h3>${item.name}</h3>
                <p class="panel-item-price">${formatPrice(item.price)} each</p>
                <div class="panel-item-controls">
                    <button class="qty-btn" data-action="decrease" data-id="${item.id}" aria-label="Decrease quantity of ${item.name}">−</button>
                    <span class="qty" aria-label="Quantity">${item.quantity}</span>
                    <button class="qty-btn" data-action="increase" data-id="${item.id}" aria-label="Increase quantity of ${item.name}">+</button>
                    <button class="remove-btn" data-action="remove" data-id="${item.id}">Remove</button>
                </div>
            </div>
            <p class="panel-item-total">${formatPrice(item.price * item.quantity)}</p>
        `;
        cartItemsList.appendChild(row);
    });

    const isEmpty = cart.length === 0;
    cartCountElement.textContent = getCartItemCount();
    cartTotalElement.textContent = formatPrice(getCartSubtotal());
    cartEmpty.hidden = !isEmpty;
    cartFooter.hidden = isEmpty;
    checkoutButton.disabled = isEmpty;

    saveCart();
    renderOrderSummary();
}


// =========================================================
// 8. WISHLIST / FAVORITES
// =========================================================
// Saved ids are checked against the product list, so removed products are ignored
function loadFavorites() {
    const saved = readStorage(FAVORITES_STORAGE_KEY, []);
    if (!Array.isArray(saved)) {
        return [];
    }
    const valid = [];
    saved.forEach(function (id) {
        const product = findProduct(id);
        if (product && !valid.includes(product.id)) {
            valid.push(product.id);
        }
    });
    return valid;
}

function isFavorite(productId) {
    return favorites.includes(Number(productId));
}

function toggleFavorite(productId) {
    const product = findProduct(productId);
    if (!product) {
        return;
    }
    if (isFavorite(product.id)) {
        favorites = favorites.filter(function (id) { return id !== product.id; });
        showToast(product.name + " removed from your wishlist");
    } else {
        favorites.push(product.id);
        showToast(product.name + " saved to your wishlist");
    }
    writeStorage(FAVORITES_STORAGE_KEY, favorites);
    renderWishlist();
}

// Heart buttons on cards + the popup show the current state
function updateFavoriteButtons() {
    document.querySelectorAll(".fav-btn").forEach(function (button) {
        const active = isFavorite(button.dataset.id);
        const product = findProduct(button.dataset.id);
        button.setAttribute("aria-pressed", active);
        button.setAttribute("aria-label", (active ? "Remove " : "Save ") + product.name + (active ? " from wishlist" : " to wishlist"));
    });

    if (modalProduct) {
        const active = isFavorite(modalProduct.id);
        modalFavButton.setAttribute("aria-pressed", active);
        modalFavText.textContent = active ? "Saved to Wishlist" : "Add to Wishlist";
    }
}

function renderWishlist() {
    wishlistItemsList.innerHTML = "";

    favorites.forEach(function (id) {
        const product = findProduct(id);
        if (!product) {
            return;
        }
        const row = document.createElement("li");
        row.className = "panel-item";
        row.innerHTML = `
            <img src="${product.image}" alt="${product.alt}" class="panel-item-image">
            <div class="panel-item-info">
                <button class="panel-item-name" data-action="view" data-id="${product.id}">${product.name}</button>
                <p class="panel-item-price">${formatPrice(product.price)}</p>
                <div class="panel-item-controls">
                    <button class="btn btn-small" data-action="add" data-id="${product.id}">Add to Cart</button>
                    <button class="remove-btn" data-action="remove" data-id="${product.id}">Remove</button>
                </div>
            </div>
        `;
        wishlistItemsList.appendChild(row);
    });

    wishlistCountElement.textContent = favorites.length;
    wishlistEmpty.hidden = favorites.length > 0;
    updateFavoriteButtons();
}

wishlistItemsList.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-action]");
    if (!button) {
        return;
    }
    const product = findProduct(button.dataset.id);
    if (!product) {
        return;
    }

    if (button.dataset.action === "add") {
        addToCart(product.id, 1);
        showToast(product.name + " added to your cart");
    } else if (button.dataset.action === "remove") {
        toggleFavorite(product.id);
    } else if (button.dataset.action === "view") {
        openProductModal(product.id);
    }
});


// =========================================================
// 9. PRODUCT COMPARISON
// =========================================================
function toggleCompare(productId) {
    const product = findProduct(productId);
    if (!product) {
        return;
    }
    if (compareList.includes(product.id)) {
        compareList = compareList.filter(function (id) { return id !== product.id; });
    } else if (compareList.length >= COMPARE_LIMIT) {
        showToast("You can compare up to " + COMPARE_LIMIT + " products. Remove one to add another.");
        return;
    } else {
        compareList.push(product.id);
    }
    renderCompare();
}

function updateCompareButtons() {
    document.querySelectorAll(".compare-btn").forEach(function (button) {
        const active = compareList.includes(Number(button.dataset.id));
        const product = findProduct(button.dataset.id);
        button.setAttribute("aria-pressed", active);
        button.setAttribute("aria-label", (active ? "Remove " : "Compare ") + product.name + (active ? " from comparison" : ""));
    });
}

function renderCompare() {
    // Tray at the bottom of the screen
    compareCount.textContent = compareList.length;
    compareTray.hidden = compareList.length === 0;
    document.body.classList.toggle("has-compare-tray", compareList.length > 0);
    compareOpenButton.disabled = compareList.length < 2;
    compareOpenButton.textContent = compareList.length < 2 ? "Add 1 more to compare" : "Compare now";

    compareTrayItems.innerHTML = "";
    compareList.forEach(function (id) {
        const product = findProduct(id);
        const item = document.createElement("li");
        item.innerHTML = `
            <img src="${product.image}" alt="">
            <button class="compare-tray-remove" data-id="${product.id}" aria-label="Remove ${product.name} from comparison">✕</button>
        `;
        compareTrayItems.appendChild(item);
    });

    renderCompareTable();
    updateCompareButtons();
    updateAssistantCompareButtons();   // the assistant's Compare buttons show the same selection
}

// The comparison table: one column per product, using only real product data
function renderCompareTable() {
    const selected = compareList.map(findProduct).filter(Boolean);
    compareEmpty.hidden = selected.length > 0;
    compareTable.hidden = selected.length === 0;
    if (selected.length === 0) {
        compareTable.innerHTML = "";
        return;
    }

    const lowestPrice = Math.min.apply(null, selected.map(function (p) { return p.price; }));
    const cells = function (render) {
        return selected.map(function (product) { return "<td>" + render(product) + "</td>"; }).join("");
    };

    compareTable.innerHTML = `
        <tbody>
            <tr><th scope="row">Product</th>${cells(function (p) {
                return '<img src="' + p.image + '" alt="' + p.alt + '"><span class="compare-name">' + p.name + "</span>";
            })}</tr>
            <tr><th scope="row">Category</th>${cells(function (p) { return p.category; })}</tr>
            <tr><th scope="row">Price</th>${cells(function (p) {
                return formatPrice(p.price) + (selected.length > 1 && p.price === lowestPrice ? ' <span class="compare-tag">Lowest price</span>' : "");
            })}</tr>
            <tr><th scope="row">Description</th>${cells(function (p) { return p.description; })}</tr>
            <tr><th scope="row"><span class="visually-hidden">Actions</span></th>${cells(function (p) {
                return '<button class="btn btn-small" data-action="add" data-id="' + p.id + '">Add to Cart</button>' +
                       '<button class="remove-btn" data-action="remove" data-id="' + p.id + '">Remove</button>';
            })}</tr>
        </tbody>
    `;
}

function openCompare() {
    if (compareList.length === 0) {
        return;
    }
    rememberFocus();
    renderCompareTable();
    compareModal.classList.add("open");
    updateScrollLock();
    compareCloseButton.focus();
}

function closeCompare() {
    if (!compareModal.classList.contains("open")) {
        return;
    }
    compareModal.classList.remove("open");
    updateScrollLock();
    restoreFocus();
}

function clearCompare() {
    compareList = [];
    renderCompare();
    closeCompare();
}

compareOpenButton.addEventListener("click", openCompare);
compareClearButton.addEventListener("click", clearCompare);
compareClearAllButton.addEventListener("click", clearCompare);
compareCloseButton.addEventListener("click", closeCompare);

compareModal.addEventListener("click", function (event) {
    if (event.target === compareModal) {
        closeCompare();
    }
});

compareTrayItems.addEventListener("click", function (event) {
    const button = event.target.closest(".compare-tray-remove");
    if (button) {
        toggleCompare(button.dataset.id);
    }
});

compareTable.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-action]");
    if (!button) {
        return;
    }
    const product = findProduct(button.dataset.id);
    if (button.dataset.action === "add") {
        addToCart(product.id, 1);
        showToast(product.name + " added to your cart");
    } else if (button.dataset.action === "remove") {
        toggleCompare(product.id);
        if (compareList.length === 0) {
            closeCompare();
        }
    }
});


// =========================================================
// 10. PRODUCT DETAILS POPUP
// =========================================================
function openProductModal(productId) {
    const product = findProduct(productId);
    if (!product) {
        return;
    }

    modalProduct = product;
    modalQuantity = 1;

    modalImage.src = product.image;
    modalImage.alt = product.alt;
    modalCategory.textContent = product.category;
    modalTitle.textContent = product.name;
    modalPrice.textContent = formatPrice(product.price);
    modalDescription.textContent = product.description;
    modalQtyElement.textContent = modalQuantity;
    modalAddButton.textContent = "Add to Cart";
    modalAddButton.disabled = false;
    updateFavoriteButtons();

    rememberFocus();
    productModal.classList.add("open");
    updateScrollLock();
    modalCloseButton.focus();
}

function closeProductModal() {
    if (!productModal.classList.contains("open")) {
        return;
    }
    productModal.classList.remove("open");
    updateScrollLock();
    restoreFocus();
}

modalCloseButton.addEventListener("click", closeProductModal);

productModal.addEventListener("click", function (event) {
    if (event.target === productModal) {
        closeProductModal();
    }
});

modalDecreaseButton.addEventListener("click", function () {
    if (modalQuantity > 1) {
        modalQuantity = modalQuantity - 1;
        modalQtyElement.textContent = modalQuantity;
    }
});

modalIncreaseButton.addEventListener("click", function () {
    if (modalQuantity < 99) {
        modalQuantity = modalQuantity + 1;
        modalQtyElement.textContent = modalQuantity;
    }
});

modalAddButton.addEventListener("click", function () {
    addToCart(modalProduct.id, modalQuantity);
    showButtonFeedback(modalAddButton);
});

modalFavButton.addEventListener("click", function () {
    toggleFavorite(modalProduct.id);
});


// =========================================================
// 11. CHECKOUT + WHATSAPP ORDER
// =========================================================
// The store number as digits only, or "" if it isn't set (or looks invalid)
function getWhatsAppNumber() {
    const digits = String(STORE_CONFIG.whatsappNumber || "").replace(/\D/g, "");
    return digits.length >= 8 && digits.length <= 15 ? digits : "";
}

function buildWhatsAppLink(message) {
    return "https://wa.me/" + getWhatsAppNumber() + "?text=" + encodeURIComponent(message);
}

// A number, or null when the fee is to be confirmed on WhatsApp
function getDeliveryFee() {
    const fee = STORE_CONFIG.deliveryFee;
    return typeof fee === "number" && Number.isFinite(fee) && fee >= 0 ? fee : null;
}

function getOrderTotal() {
    return getCartSubtotal() + (getDeliveryFee() || 0);
}

function describeDeliveryFee() {
    const fee = getDeliveryFee();
    if (fee === null) return "To be confirmed";
    if (fee === 0) return "Free";
    return formatPrice(fee);
}

function openCheckout() {
    closeCart();
    closeWishlist();
    closeMobileMenu();

    checkoutContent.hidden = false;
    orderConfirmation.hidden = true;
    whatsappSetupNotice.hidden = getWhatsAppNumber() !== "";
    renderOrderSummary();

    document.body.classList.add("checkout-active");
    window.scrollTo({ top: 0, behavior: "instant" });
}

function closeCheckout() {
    document.body.classList.remove("checkout-active");
}

checkoutButton.addEventListener("click", openCheckout);

document.querySelectorAll(".continue-shopping").forEach(function (button) {
    button.addEventListener("click", function () {
        closeCheckout();
        document.getElementById("products").scrollIntoView();
    });
});

// Clicking the logo or a menu link while on the checkout returns to the store
document.addEventListener("click", function (event) {
    const link = event.target.closest('a[href^="#"]');
    if (link && document.body.classList.contains("checkout-active")) {
        closeCheckout();
    }
});

// The "Order Summary" box, built from the same cart array
function renderOrderSummary() {
    summaryItemsList.innerHTML = "";

    cart.forEach(function (item) {
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

    summaryCount.textContent = getCartItemCount();
    summarySubtotal.textContent = formatPrice(getCartSubtotal());
    summaryDelivery.textContent = describeDeliveryFee();
    summaryTotal.textContent = formatPrice(getOrderTotal());
    summaryDeliveryNote.hidden = getDeliveryFee() !== null;

    summaryEmpty.hidden = cart.length > 0;
    placeOrderButton.disabled = cart.length === 0;
}

// ---------- Form validation ----------
const requiredFields = ["fullName", "phone", "city", "address"];
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Accepts local and international numbers, e.g. 03 123 456, 71-123456, +961 3 123 456:
// after removing spaces, dashes, dots and brackets, an optional "+" and 7 to 15 digits.
function isValidPhone(value) {
    const compact = value.replace(/[\s\-().]/g, "");
    return /^\+?\d{7,15}$/.test(compact);
}

// Returns an error message for a field, or "" if the value is fine
function getFieldError(fieldName, value) {
    if (fieldName === "fullName" && value.length < 2) {
        return "Please enter your full name.";
    }
    if (fieldName === "phone") {
        if (value === "") return "Please enter your phone number.";
        if (!isValidPhone(value)) return "Please enter a valid phone number, e.g. 03 123 456 or +961 3 123 456.";
    }
    if (fieldName === "email" && value !== "" && !emailPattern.test(value)) {
        return "Please enter a valid email, like name@example.com, or leave it empty.";
    }
    if (fieldName === "city" && value === "") {
        return "Please enter your city.";
    }
    if (fieldName === "address" && value === "") {
        return "Please enter your full delivery address.";
    }
    return "";
}

function setFieldError(input, message) {
    const errorElement = document.getElementById(input.name + "-error");
    errorElement.textContent = message;
    input.classList.toggle("invalid", message !== "");
    input.setAttribute("aria-invalid", message !== "");
}

// Checks every field. Returns true only if all are valid.
function validateCheckoutForm() {
    let firstInvalidInput = null;

    requiredFields.concat("email").forEach(function (fieldName) {
        const input = checkoutForm.elements[fieldName];
        const message = getFieldError(fieldName, input.value.trim());
        setFieldError(input, message);
        if (message !== "" && firstInvalidInput === null) {
            firstInvalidInput = input;
        }
    });

    if (firstInvalidInput) {
        firstInvalidInput.focus();
        return false;
    }
    return true;
}

// While fixing a field, re-check it on each keystroke
checkoutForm.addEventListener("input", function (event) {
    const input = event.target;
    if (input.classList.contains("invalid")) {
        setFieldError(input, getFieldError(input.name, input.value.trim()));
    }
});

function generateOrderReference() {
    return "HV-" + Math.floor(100000 + Math.random() * 900000);
}

// The WhatsApp message: plain text, one detail per line
function buildOrderMessage(details, orderReference) {
    const lines = [];
    lines.push("Hello HAVOME, I would like to place an order.");
    lines.push("");
    lines.push("Order reference: " + orderReference);
    lines.push("");
    lines.push("*Customer*");
    lines.push("Name: " + details.fullName);
    lines.push("Phone: " + details.phone);
    if (details.email) {
        lines.push("Email: " + details.email);
    }
    lines.push("City: " + details.city);
    lines.push("Address: " + details.address);
    lines.push("");
    lines.push("*Order*");
    cart.forEach(function (item) {
        lines.push("- " + item.name + " x " + item.quantity + " @ " + formatPrice(item.price) +
            " = " + formatPrice(item.price * item.quantity));
    });
    lines.push("");
    lines.push("Subtotal: " + formatPrice(getCartSubtotal()));
    lines.push("Delivery: " + describeDeliveryFee());
    lines.push("Total: " + formatPrice(getOrderTotal()) + (getDeliveryFee() === null ? " + delivery" : ""));
    if (details.notes) {
        lines.push("");
        lines.push("Delivery instructions: " + details.notes);
    }
    return lines.join("\n");
}

function getCheckoutDetails() {
    const read = function (name) { return checkoutForm.elements[name].value.trim(); };
    return {
        fullName: read("fullName"),
        phone: read("phone"),
        email: read("email"),
        city: read("city"),
        address: read("address"),
        notes: read("notes")
    };
}

// Place Order: check the form, then open WhatsApp with the order.
// The cart is NOT cleared automatically, because opening WhatsApp
// doesn't prove the message was sent or that the store accepted it.
checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (cart.length === 0 || !validateCheckoutForm()) {
        return;
    }

    if (getWhatsAppNumber() === "") {
        whatsappSetupNotice.hidden = false;
        whatsappSetupNotice.scrollIntoView({ block: "center" });
        showToast("WhatsApp ordering isn't set up yet.");
        return;
    }

    const orderReference = generateOrderReference();
    const link = buildWhatsAppLink(buildOrderMessage(getCheckoutDetails(), orderReference));

    window.open(link, "_blank", "noopener");

    document.getElementById("confirm-order-number").textContent = orderReference;
    document.getElementById("confirm-total").textContent =
        formatPrice(getOrderTotal()) + (getDeliveryFee() === null ? " + delivery" : "");
    confirmWhatsappLink.href = link;
    confirmClearCartButton.hidden = false;
    confirmClearedNote.hidden = true;

    checkoutContent.hidden = true;
    orderConfirmation.hidden = false;
    window.scrollTo({ top: 0, behavior: "instant" });
});

// The shopper confirms they sent the WhatsApp message: now it's safe to empty the cart
confirmClearCartButton.addEventListener("click", function () {
    cart = [];
    renderCart();
    checkoutForm.reset();
    confirmClearCartButton.hidden = true;
    confirmClearedNote.hidden = false;
});


// =========================================================
// 12. CONTACT FORM + FLOATING WHATSAPP BUTTON
// =========================================================
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    contactNote.hidden = false;

    if (getWhatsAppNumber() === "") {
        contactNote.textContent = "Our WhatsApp contact isn't set up yet, so this message can't be sent right now. Please try again soon.";
        return;
    }

    const name = contactForm.elements.name.value.trim();
    const message = contactForm.elements.message.value.trim();
    window.open(buildWhatsAppLink("Hello HAVOME, my name is " + name + ".\n\n" + message), "_blank", "noopener");
    contactNote.textContent = "WhatsApp opened with your message. Press Send in WhatsApp to deliver it to our team.";
});

if (getWhatsAppNumber() !== "") {
    whatsappFloat.href = buildWhatsAppLink("Hello HAVOME, I have a question.");
    whatsappFloat.hidden = false;
}


// =========================================================
// 13. KEYBOARD, HEADER SHADOW, SCROLL REVEAL
// =========================================================
// Escape closes whatever is on top
document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") {
        return;
    }
    if (productModal.classList.contains("open")) {
        closeProductModal();
    } else if (compareModal.classList.contains("open")) {
        closeCompare();
    } else if (cartPanel.classList.contains("open")) {
        closeCart();
    } else if (wishlistPanel.classList.contains("open")) {
        closeWishlist();
    } else if (assistantPanel.classList.contains("open")) {
        closeAssistant();
    } else {
        closeMobileMenu();
    }
});

function updateHeaderShadow() {
    siteHeader.classList.toggle("scrolled", window.scrollY > 10);
}
window.addEventListener("scroll", updateHeaderShadow, { passive: true });
updateHeaderShadow();

// Elements with class="reveal" fade and slide in the first time they come into view
if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("js-reveal");

    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    document.querySelectorAll(".reveal").forEach(function (element) {
        revealObserver.observe(element);
    });
}


// =========================================================
// 15. HAVOME ASSISTANT: scripted bilingual shopping helper
// =========================================================
// How it works: each message is matched against simple keyword rules below
// and answered with data from the real `products` list at the top of this file.
// There is no AI model, no server and no API key: everything runs in the browser.
// (A future AI version would need a secure backend or serverless function so
// that no API key ever appears in these public files.)

const assistantLauncher = document.getElementById("assistant-launcher");
const assistantPanel = document.getElementById("assistant-panel");
const assistantCloseButton = document.getElementById("assistant-close");
const assistantMessages = document.getElementById("assistant-messages");
const assistantForm = document.getElementById("assistant-form");
const assistantInput = document.getElementById("assistant-input");
const assistantLangButtons = document.querySelectorAll(".assistant-lang-btn");

let assistantLang = "en";
let assistantStarted = false;
let assistantLastProducts = [];   // ids shown in the latest answer (for "compare these two")
let assistantLastCategories = []; // categories from the latest product question (for follow-ups)

// ---------- Category names in both languages ----------
const ASSISTANT_CATEGORY_LABELS = {
    "Sleeping Pillows": { en: "sleeping pillows", ar: "مخدات النوم" },
    "Blankets": { en: "blankets", ar: "البطانيات" },
    "Bed Sheets": { en: "bed sheets", ar: "الشراشف" },
    "Duvet Covers": { en: "duvet covers", ar: "أغطية اللحاف" },
    "Towels": { en: "towels", ar: "المناشف" },
    "Home Accessories": { en: "home accessories", ar: "الإكسسوارات المنزلية" }
};

// ---------- Keyword rules ----------
// Arabic words are matched after normalizing (أ/إ/آ → ا, ة → ه, ى → ي).
// A word starting with "=" must match a whole word (so "حر" doesn't match "حرير").
const ASSISTANT_CATEGORY_WORDS = {
    "Sleeping Pillows": ["pillow", "مخد", "وساد", "وسايد"],
    "Blankets": ["blanket", "throw", "بطاني", "=حرام", "حرامات"],
    "Bed Sheets": ["sheet", "شرشف", "شراشف", "ملايه", "ملايات", "ملاءه"],
    "Duvet Covers": ["duvet", "comforter", "quilt", "لحاف", "لحف", "دوفيه", "ديوفيه"],
    "Towels": ["towel", "منشف", "مناشف", "بشكير", "بشاكير", "فوط"],
    "Home Accessories": ["accessor", "candle", "diffuser", "vase", "cushion", "decor", "اكسسوار", "شمع", "معطر", "فازه", "مزهري", "ديكور", "كوشن"]
};

const ASSISTANT_WORDS = {
    who: ["who are you", "=ai", "artificial intelligence", "=bot", "chatbot", "are you human", "real person", "robot", "chatgpt", "انت مين", "مين انت", "روبوت", "ذكاء", "=بوت", "انسان"],
    thanks: ["thank", "=thx", "merci", "شكرا", "يسلمو", "تسلم", "ميرسي"],
    greet: ["=hi", "=hello", "=hey", "good morning", "good evening", "مرحبا", "اهلا", "=هلا", "السلام", "صباح", "مسا", "كيفك"],
    how: ["how", "where", "can i", "كيف", "شلون", "وين", "طريقه", "بقدر", "فيني", "كيفيه"],
    cart: ["cart", "basket", "=bag", "سله", "عربه", "كارت"],
    add: ["=add", "adding", "=put", "ضيف", "اضيف", "بضيف", "=حط", "اضافه"],
    wishlist: ["wishlist", "wish list", "favorite", "favourite", "heart", "save for later", "مفضل", "قائمه الرغبات", "امنيات", "=قلب", "احفظ"],
    compare: ["compare", "comparison", "difference", "=vs", "versus", "قارن", "مقارن", "فرق"],
    better: ["better", "احسن", "افضل"],
    payment: ["=pay", "payment", "=card", "=cash", "=دفع", "ادفع", "الدفع", "كاش", "بطاقه", "فيزا"],
    checkout: ["checkout", "check out", "اتمام الطلب", "تشيك اوت"],
    order: ["order", "=buy", "purchase", "whatsapp", "واتساب", "واتس", "وتساب", "اطلب", "بطلب", "=طلب", "الطلب", "شراء", "اشتري", "بشتري"],
    delivery: ["delivery", "deliver", "shipping", "=ship", "توصيل", "ديليفري", "دليفري", "شحن"],
    cheap: ["cheap", "affordable", "lowest", "inexpensive", "budget friendly", "ارخص", "رخيص", "اوفر", "اقتصادي"],
    expensive: ["expensive", "priciest", "highest price", "luxury", "اغلى", "غالي"],
    price: ["price", "cost", "how much", "سعر", "اسعار", "قديش", "بكم", "قداش"],
    budgetMax: ["under", "below", "less than", "=max", "maximum", "up to", "within", "budget", "or less", "تحت", "اقل", "ضمن", "ميزانيه", "حدود", "=لحد"],
    budgetMin: ["over", "above", "more than", "at least", "=فوق", "اكتر من", "اكثر من", "اعلى من"],
    between: ["between", "from", "=بين", "=من"],
    recommend: ["recommend", "suggest", "choose", "help me", "advice", "=best", "comfortable", "=good", "which", "انصح", "نصيحه", "اقترح", "اختار", "ساعد", "مريح", "منيح", "احسن", "افضل"],
    available: ["in stock", "available", "availability", "=stock", "متوفر", "متاح", "بالمخزون"],
    all: ["categories", "what do you sell", "what do you have", "all products", "catalog", "اقسام", "فئات", "شو عندكن", "شو بتبيعو", "كل المنتجات", "شو في عندكن"]
};

// Preferences → words to look for in product names and descriptions (real catalog text only)
const ASSISTANT_PREFERENCES = [
    { words: ["side", "neck", "shoulder", "جنب", "رقبه", "كتاف", "كتف"], terms: ["neck", "shoulder", "ergonomic", "support"] },
    { words: ["soft", "silky", "smooth", "ناعم", "نعوم", "طري"], terms: ["soft", "silk", "buttery", "smooth"] },
    { words: ["=cool", "=hot", "summer", "sweat", "breathable", "=حر", "شوب", "صيف", "تعرق", "منعش"], terms: ["cool", "breathable", "temperature", "warm sleepers", "airy"] },
    { words: ["=warm", "warmth", "winter", "=cold", "cozy", "cosy", "دافي", "دفا", "دفي", "شتي", "شتاء", "=برد", "بارد"], terms: ["warmth", "wool", "cashmere", "winter"] },
    { words: ["=hair", "=skin", "=شعر", "بشر"], terms: ["hair", "skin"] },
    { words: ["washable", "easy care", "machine wash", "غسيل", "ينغسل", "بينغسل"], terms: ["washable", "wash"] }
];

// Arabic words for materials/items → English words used in our product names
const ASSISTANT_ARABIC_TERMS = {
    "حرير": "silk", "قطن": "cotton", "كتان": "linen", "صوف": "wool merino", "كشمير": "cashmere",
    "بامبو": "bamboo", "خيزران": "bamboo", "ميموري": "memory foam", "فوم": "foam", "اسفنج": "foam",
    "ريش": "down", "شمعه": "candle", "معطر": "diffuser", "فازه": "vase", "مزهريه": "vase",
    "كوشن": "cushion", "تركي": "turkish", "فندق": "hotel", "ساتان": "sateen", "بيركال": "percale",
    "وافل": "waffle", "عسلي": "honey", "فحمي": "charcoal", "سيراميك": "ceramic"
};

// Words in product names that are too general to identify one product
const ASSISTANT_GENERIC_NAME_WORDS = ["pillow", "pillows", "pair", "blanket", "throw", "sheet", "set",
    "duvet", "cover", "towel", "towels", "bath", "hand", "the", "and", "collection"];

// ---------- All visible text, in both languages ----------
const ASSISTANT_TEXT = {
    en: {
        dir: "ltr",
        subtitle: "Your personal bedding concierge",
        placeholder: "Type your question...",
        sendText: "Send",
        quickTitle: "How can we help?",
        quickLabels: {
            pillows: "Shop Pillows", blankets: "Shop Blankets", sheets: "Bed Sheets",
            towels: "Towels", compare: "Compare Products", budget: "Find by Budget"
        },
        compareToggle: "Compare",
        compareSelected: "Selected",
        openComparison: "Open comparison",
        compareNeedTwo: "Select at least two products to compare.",
        compareGuide: "Let's compare. Which kind of product would you like to compare? Pick a category, then tap <strong>Compare</strong> on two to four products.",
        compareGuideChips: ["Compare pillows", "Compare blankets", "Compare sheets", "Compare duvet covers", "Compare towels", "Compare accessories"],
        budgetGuide: "What's your budget? Choose a price range below, or type it, for example “pillows under $100”.",
        budgetGuideChips: ["Under $50", "Between $50 and $100", "Between $100 and $150", "Over $150"],
        inputLabel: "Type your question",
        send: "Send message",
        close: "Close assistant",
        openLauncher: "Open HAVOME Assistant",
        closeLauncher: "Close HAVOME Assistant",
        disclaimer: "Ask about products, materials, or prices. Scripted assistant, not a live person or AI.",
        welcome: "Welcome to HAVOME! How can I help you find the perfect bedding and home textiles?",
        suggestions: ["Help me choose a pillow", "Show me blankets", "Show me affordable products", "How do I order?"],
        view: "View product",
        add: "Add to Cart",
        added: "Added ✓",
        showInShop: "Show in shop",
        openCompare: "Open full comparison",
        priceLabel: "Price",
        categoryLabel: "Category",
        detailsLabel: "Details",
        toastAdded: function (name) { return name + " added to your cart"; },
        categoriesIntro: "We have six categories. Tap one to explore it:",
        categoryList: function (label, count) { return "Here are our " + label + " (" + count + " products):"; },
        manyCategories: "Here are the products I found:",
        cheapest: function (label, product) {
            return (label ? "In our " + label + ", the most affordable is " : "Our most affordable product is ") +
                "<strong>" + product.name + "</strong> at " + formatPrice(product.price) + ". From lowest price:";
        },
        expensive: function (label, product) {
            return (label ? "In our " + label + ", the highest-priced is " : "Our highest-priced product is ") +
                "<strong>" + product.name + "</strong> at " + formatPrice(product.price) + ":";
        },
        budget: function (label, budget) {
            const what = label ? label.charAt(0).toUpperCase() + label.slice(1) : "Products";
            if (budget.min !== null && budget.max !== null) return what + " between " + formatPrice(budget.min) + " and " + formatPrice(budget.max) + ", from lowest price:";
            if (budget.min !== null) return what + " at " + formatPrice(budget.min) + " or more, from lowest price:";
            return what + " at " + formatPrice(budget.max) + " or less, from lowest price:";
        },
        budgetNone: function (label) { return "I couldn't find " + (label || "products") + " in that price range in our catalog. Here is the lowest-priced option:"; },
        showingSome: function (shown, total) { return "Showing " + shown + " of " + total + ". Tap “Show in shop” to see them all."; },
        recommend: function (label) { return "Based on what you told me, these " + (label || "products") + " match best. The reason is taken from each product's description:"; },
        recommendNone: function (label) { return "I couldn't match that preference to a specific product description, so here are all our " + (label || "products") + ":"; },
        pillowGuide: "Happy to help you choose a pillow! Here are our four pillows. What matters most to you?",
        pillowChips: ["I sleep on my side", "Something soft and silky", "Gentle on hair and skin", "Pillows under $100"],
        namedOne: "Here's what I found:",
        namedFound: "Here are the products you mentioned:",
        namedMany: "I found a few matches. Which one do you mean?",
        compareIntro: "Here's a side-by-side comparison using our catalog details:",
        compareCheaper: function (product, diff) { return "<strong>" + product.name + "</strong> is " + formatPrice(diff) + " less."; },
        compareSamePrice: "Both have the same price.",
        compareNote: "I can only compare the information listed in our catalog.",
        compareAsk: "Tap <strong>Compare</strong> on two to four products below, then <strong>Open comparison</strong>. You can also type two names, for example “Cloud Down vs Mulberry Silk”.",
        howCart: "<ol><li>Tap <strong>Add to Cart</strong> on any product, or open it with <strong>Quick view</strong>, choose the quantity and tap Add to Cart.</li><li>The bag icon at the top shows how many items are in your cart.</li><li>Tap it to review your cart, change quantities or remove items.</li></ol>",
        howWishlist: "Tap the <strong>heart</strong> on a product photo, or <strong>Add to Wishlist</strong> in the product details, to save it. Open your saved items with the heart icon at the top; from there you can add them to your cart. Your wishlist is saved on this device.",
        howCompare: "Tap the <strong>compare button</strong> (two arrows) on up to 4 products. A bar appears at the bottom; tap <strong>Compare now</strong> to see them side by side. I can also compare two products right here, just name them.",
        howCheckout: "Open your cart (bag icon) and tap <strong>Checkout</strong>. Fill in your name, phone number, city and delivery address. The order summary shows your subtotal, delivery and total. No payment is taken on this website.",
        howOrder: "<ol><li>Add your products to the cart.</li><li>Open the cart and tap <strong>Checkout</strong>.</li><li>Fill in your delivery details and tap <strong>Place Order via WhatsApp</strong>.</li><li>WhatsApp opens with your full order written out; press Send.</li></ol><p>Your order is confirmed once the HAVOME team replies to you.</p>",
        orderNotReady: "<p>Note: WhatsApp ordering is still being set up on this website, so the last step isn't available yet. Your cart stays saved in the meantime.</p>",
        deliveryUnknown: "The delivery fee isn't listed on the website yet. The HAVOME team confirms it on WhatsApp when you place your order.",
        deliveryFree: "Delivery is free.",
        deliveryFee: function (fee) { return "Delivery costs " + formatPrice(fee) + " and is added at checkout."; },
        payment: "No payment is taken on this website. For payment questions, please ask the HAVOME team when they confirm your order.",
        available: "Every product shown is part of our current catalog, but the website doesn't track live stock levels. The HAVOME team will confirm availability when you order.",
        who: "I'm HAVOME's automated shopping assistant. I answer using scripted rules and our product catalog. I'm not a live person or an AI model.",
        greeting: "Hello! I can help you find pillows, blankets, sheets, duvet covers, towels and home accessories, check prices, or explain how ordering works.",
        thanks: "You're welcome! Is there anything else I can help you with?",
        priceRange: function (min, max) { return "Our prices range from " + formatPrice(min) + " to " + formatPrice(max) + ". Which product or category would you like prices for?"; },
        fallback: "Sorry, I didn't quite understand. I can help with product categories, prices and budgets, recommendations, comparing products, and how the cart, wishlist and ordering work. Try one of the quick actions at the top."
    },
    ar: {
        dir: "rtl",
        subtitle: "مساعدك لاختيار المفروشات",
        placeholder: "اكتب سؤالك...",
        sendText: "إرسال",
        quickTitle: "كيف فينا نساعدك؟",
        quickLabels: {
            pillows: "تسوّق المخدات", blankets: "تسوّق البطانيات", sheets: "الشراشف",
            towels: "المناشف", compare: "قارن المنتجات", budget: "حسب الميزانية"
        },
        compareToggle: "قارن",
        compareSelected: "تم الاختيار",
        openComparison: "فتح المقارنة",
        compareNeedTwo: "اختار منتجين على الأقل لتقارن.",
        compareGuide: "يلّا نقارن! أي نوع منتجات بدك تقارن؟ اختار فئة، وبعدين اكبس <strong>«قارن»</strong> على منتجين لأربعة.",
        compareGuideChips: ["قارن المخدات", "قارن البطانيات", "قارن الشراشف", "قارن أغطية اللحاف", "قارن المناشف", "قارن الإكسسوارات"],
        budgetGuide: "قديش ميزانيتك؟ اختار فئة سعر من تحت، أو اكتبها، مثلًا «مخدات تحت 100 دولار».",
        budgetGuideChips: ["تحت 50 دولار", "بين 50 و 100 دولار", "بين 100 و 150 دولار", "فوق 150 دولار"],
        inputLabel: "اكتب سؤالك",
        send: "إرسال الرسالة",
        close: "إغلاق المساعد",
        openLauncher: "افتح مساعد HAVOME",
        closeLauncher: "إغلاق مساعد HAVOME",
        disclaimer: "اسأل عن المنتجات، الخامات أو الأسعار. مساعد آلي بإجابات مبرمجة، مش شخص حقيقي ولا ذكاء اصطناعي.",
        welcome: "أهلًا وسهلًا في HAVOME! 🛏️ كيف فينا نساعدك تختار المنتجات المناسبة لراحتك؟",
        suggestions: ["ساعدني اختار مخدة", "ورجيني البطانيات", "شو المنتجات الأرخص؟", "كيف بطلب؟"],
        view: "عرض المنتج",
        add: "أضف إلى السلة",
        added: "تمت الإضافة ✓",
        showInShop: "عرض بالمتجر",
        openCompare: "فتح المقارنة الكاملة",
        priceLabel: "السعر",
        categoryLabel: "الفئة",
        detailsLabel: "التفاصيل",
        toastAdded: function (name) { return "انضاف " + name + " عالسلة"; },
        categoriesIntro: "عنا ست فئات. اختار وحدة لتشوف منتجاتها:",
        categoryList: function (label, count) { return "هيدي " + label + " عنا (" + count + " منتجات):"; },
        manyCategories: "هيدي المنتجات اللي لقيتها:",
        cheapest: function (label, product) {
            return "الأرخص من " + (label || "منتجاتنا") + " هو <strong><bdi>" + product.name + "</bdi></strong> بسعر <bdi>" + formatPrice(product.price) + "</bdi>. من الأقل سعرًا:";
        },
        expensive: function (label, product) {
            return "الأعلى سعرًا من " + (label || "منتجاتنا") + " هو <strong><bdi>" + product.name + "</bdi></strong> بسعر <bdi>" + formatPrice(product.price) + "</bdi>:";
        },
        budget: function (label, budget) {
            const what = label || "المنتجات";
            if (budget.min !== null && budget.max !== null) return what + " بين <bdi>" + formatPrice(budget.min) + "</bdi> و<bdi>" + formatPrice(budget.max) + "</bdi>، من الأقل سعرًا:";
            if (budget.min !== null) return what + " بسعر <bdi>" + formatPrice(budget.min) + "</bdi> أو أكثر، من الأقل سعرًا:";
            return what + " بسعر <bdi>" + formatPrice(budget.max) + "</bdi> أو أقل، من الأقل سعرًا:";
        },
        budgetNone: function (label) { return "ما لقيت " + (label || "منتجات") + " ضمن هالسعر بكتالوجنا. هيدا الخيار الأقل سعرًا:"; },
        showingSome: function (shown, total) { return "عم نعرض " + shown + " من " + total + ". اكبس «عرض بالمتجر» لتشوفهن كلهن."; },
        recommend: function (label) { return "حسب طلبك، هيدي أنسب " + (label || "المنتجات") + ". السبب مأخوذ من وصف كل منتج (بالإنكليزي):"; },
        recommendNone: function (label) { return "ما قدرت لاقي وصف منتج بيطابق طلبك بالضبط، فهيدي كل " + (label || "المنتجات") + ":"; },
        pillowGuide: "أكيد! هيدي المخدات الأربعة عنا. شو أهم شي بالنسبة إلك؟",
        pillowChips: ["بنام على جنبي", "بدي شي ناعم", "لطيفة عالشعر والبشرة", "مخدات تحت 100 دولار"],
        namedOne: "هيدا اللي لقيته:",
        namedFound: "هيدي المنتجات اللي ذكرتها:",
        namedMany: "لقيت أكتر من منتج. أي واحد بتقصد؟",
        compareIntro: "هيدي مقارنة حسب المعلومات الموجودة بكتالوجنا:",
        compareCheaper: function (product, diff) { return "<strong><bdi>" + product.name + "</bdi></strong> أرخص بـ<bdi>" + formatPrice(diff) + "</bdi>."; },
        compareSamePrice: "السعرين متل بعض.",
        compareNote: "بقدر قارن بس المعلومات الموجودة بالكتالوج.",
        compareAsk: "اكبس <strong>«قارن»</strong> على منتجين لأربعة من تحت، وبعدين <strong>«فتح المقارنة»</strong>. وفيك كمان تكتب اسمين، مثلًا «Cloud Down و Mulberry Silk».",
        howCart: "<ol><li>اكبس <strong>«Add to Cart»</strong> على أي منتج، أو افتحه بـ<strong>«Quick view»</strong>، اختار الكمية واكبس «Add to Cart».</li><li>أيقونة الشنتة فوق بتوريك كم منتج بسلتك.</li><li>اكبس عليها لتراجع السلة، تغيّر الكميات أو تشيل منتج.</li></ol>",
        howWishlist: "اكبس عـ<strong>القلب</strong> على صورة المنتج، أو <strong>«Add to Wishlist»</strong> بتفاصيل المنتج، لتحفظه. بتلاقي المحفوظات بأيقونة القلب فوق، ومنها فيك تضيفهن عالسلة. قائمتك بتنحفظ على هالجهاز.",
        howCompare: "اكبس <strong>زر المقارنة</strong> (السهمين) على لحد 4 منتجات. رح يطلع شريط تحت، اكبس <strong>«Compare now»</strong> لتشوفهن جنب بعض. وفيني قارن منتجين هون كمان، بس اكتبلي أسماءهن.",
        howCheckout: "افتح السلة (أيقونة الشنتة) واكبس <strong>«Checkout»</strong>. عبّي اسمك، رقم تلفونك، المدينة وعنوان التوصيل، وبتشوف المجموع والتوصيل والإجمالي. ما في دفع على هالموقع.",
        howOrder: "<ol><li>ضيف المنتجات عالسلة.</li><li>افتح السلة واكبس <strong>«Checkout»</strong>.</li><li>عبّي معلومات التوصيل واكبس <strong>«Place Order via WhatsApp»</strong>.</li><li>بيفتح واتساب والطلب مكتوب كامل، بس اكبس إرسال.</li></ol><p>طلبك بيتأكد لما فريق HAVOME يرد عليك.</p>",
        orderNotReady: "<p>ملاحظة: الطلب عبر واتساب لسا عم يتجهّز عالموقع، فالخطوة الأخيرة مش متاحة هلأ. سلتك بتضل محفوظة.</p>",
        deliveryUnknown: "رسم التوصيل مش محدد عالموقع بعد. فريق HAVOME بيأكدلك ياه عواتساب لما تطلب.",
        deliveryFree: "التوصيل مجاني.",
        deliveryFee: function (fee) { return "رسم التوصيل <bdi>" + formatPrice(fee) + "</bdi> وبينضاف عند إتمام الطلب."; },
        payment: "ما في دفع على هالموقع. لأي سؤال عن الدفع، اسأل فريق HAVOME لما يأكدلك الطلب.",
        available: "كل المنتجات المعروضة من كتالوجنا الحالي، بس الموقع ما بيتابع المخزون مباشرة. فريق HAVOME بيأكدلك التوفر لما تطلب.",
        who: "أنا مساعد التسوق الآلي تبع HAVOME. بجاوب من قواعد مبرمجة مسبقًا ومن كتالوج منتجاتنا. أنا مش شخص حقيقي ولا نموذج ذكاء اصطناعي.",
        greeting: "أهلا فيك! فيني ساعدك تلاقي مخدات، بطانيات، شراشف، أغطية لحاف، مناشف وإكسسوارات، تشوف الأسعار، أو أشرحلك كيف تطلب.",
        thanks: "تكرم! في شي تاني فيني ساعدك فيه؟",
        priceRange: function (min, max) { return "أسعارنا بين <bdi>" + formatPrice(min) + "</bdi> و<bdi>" + formatPrice(max) + "</bdi>. سعر أي منتج أو فئة بدك تعرف؟"; },
        fallback: "عذرًا، ما فهمت عليك منيح. فيني ساعدك بالفئات، الأسعار والميزانية، الاقتراحات، مقارنة المنتجات، وكيف تستعمل السلة والمفضلة والطلب. جرّب وحدة من الاختصارات فوق."
    }
};

// ---------- Text helpers ----------
function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// Lowercase, simplify Arabic spelling variants, convert Arabic digits, drop punctuation
function normalizeAssistantText(text) {
    return text.toLowerCase()
        .replace(/[ً-ٰٟـ]/g, "")
        .replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي")
        .replace(/ؤ/g, "و").replace(/ئ/g, "ي")
        .replace(/[٠-٩]/g, function (d) { return String(d.charCodeAt(0) - 1632); })
        .replace(/[۰-۹]/g, function (d) { return String(d.charCodeAt(0) - 1776); })
        .replace(/[،؟?!,;:()"'“”«»]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

// Arabic if the message contains Arabic words. Arabic speakers often type our
// English product names ("قارن Cloud Down و Mulberry Silk"), so a few Arabic
// letters are enough; English messages contain no Arabic letters at all.
function detectAssistantLanguage(text) {
    const arabic = (text.match(/[ء-ي]/g) || []).length;
    const latin = (text.match(/[a-z]/gi) || []).length;
    if (arabic === 0 && latin === 0) {
        return assistantLang;   // e.g. only numbers or emoji: keep the current language
    }
    return arabic >= 3 || arabic >= latin ? "ar" : "en";
}

// A word with common Arabic prefixes removed: "بالمخده" → "مخده", "والبشره" → "بشره"
function arabicWordForms(word) {
    const forms = [word];
    ["وال", "بال", "عال", "لل", "ال", "و", "ب", "ل", "ع"].forEach(function (prefix) {
        if (word.startsWith(prefix) && word.length > prefix.length + 1) {
            forms.push(word.slice(prefix.length));
        }
    });
    return forms;
}

// Does the normalized message contain this keyword? (see the "=" rule above)
function assistantHasWord(text, words, keyword) {
    const exact = keyword.startsWith("=");
    const term = exact ? keyword.slice(1) : keyword;
    if (/[a-z]/.test(term)) {
        const ending = exact ? "(?![a-z])" : "";
        return new RegExp("(^|[^a-z])" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ending).test(text);
    }
    if (exact) {
        return words.some(function (word) { return arabicWordForms(word).includes(term); });
    }
    return text.includes(term);
}

function assistantMatches(query, list) {
    return list.some(function (keyword) {
        return assistantHasWord(query.text, query.words, keyword);
    });
}

// Lowercase in English sentences ("our blankets"), Arabic name in Arabic
function assistantCategoryLabel(category, lang) {
    return ASSISTANT_CATEGORY_LABELS[category] ? ASSISTANT_CATEGORY_LABELS[category][lang] : category;
}

// As a label on its own (cards, tables): "Blankets" / "البطانيات"
function assistantCategoryTitle(category, lang) {
    return lang === "en" ? category : assistantCategoryLabel(category, lang);
}

// ---------- Understanding a message ----------
function analyzeAssistantMessage(rawText) {
    let text = normalizeAssistantText(rawText);
    const warmSleeper = /\b(warm|hot) sleeper/.test(text);
    text = text.replace(/\b(warm|hot) sleepers?/g, " cool ").replace(/bath sheets?/g, " towel ");
    const words = text.split(" ");
    const query = { text: text, words: words };

    const categories = Object.keys(ASSISTANT_CATEGORY_WORDS).filter(function (category) {
        return assistantMatches(query, ASSISTANT_CATEGORY_WORDS[category]);
    });

    // Add English equivalents of Arabic material words, for matching product names
    const translated = Object.keys(ASSISTANT_ARABIC_TERMS).filter(function (term) {
        return text.includes(term);
    }).map(function (term) { return ASSISTANT_ARABIC_TERMS[term]; }).join(" ");
    const searchText = text + " " + translated;

    const preferences = ASSISTANT_PREFERENCES.filter(function (preference) {
        return assistantMatches(query, preference.words);
    });
    if (warmSleeper && !preferences.includes(ASSISTANT_PREFERENCES[2])) {
        preferences.push(ASSISTANT_PREFERENCES[2]);
    }

    const numbers = (text.match(/\d+(\.\d+)?/g) || []).map(Number);

    return {
        query: query,
        has: function (key) { return assistantMatches(query, ASSISTANT_WORDS[key]); },
        categories: categories,
        named: findAssistantNamedProducts(searchText),
        preferences: preferences,
        numbers: numbers
    };
}

// Products whose distinctive name words appear in the message, best matches first
function findAssistantNamedProducts(searchText) {
    return products.map(function (product) {
        const nameWords = product.name.toLowerCase().replace(/&/g, " ").split(/\s+/).filter(function (word) {
            return word.length >= 3 && !ASSISTANT_GENERIC_NAME_WORDS.includes(word);
        });
        const score = nameWords.filter(function (word) {
            return new RegExp("(^|[^a-z])" + word).test(searchText);
        }).length;
        return { product: product, score: score };
    }).filter(function (match) {
        return match.score > 0;
    }).sort(function (a, b) {
        return b.score - a.score;
    });
}

// "under $150" → { min: null, max: 150 }; "between 50 and 100" → { min: 50, max: 100 }
function parseAssistantBudget(analysis) {
    const numbers = analysis.numbers;
    if (numbers.length === 0) {
        return null;
    }
    const mentionsMoney = /\$|dollar|usd|دولار/.test(analysis.query.text);
    const mentionsLimit = analysis.has("budgetMax") || analysis.has("budgetMin");
    if (!mentionsMoney && !mentionsLimit && numbers[0] < 10) {
        return null; // probably a quantity like "2 towels", not a price
    }
    if (numbers.length >= 2 && analysis.has("between")) {
        return { min: Math.min(numbers[0], numbers[1]), max: Math.max(numbers[0], numbers[1]) };
    }
    if (analysis.has("budgetMin")) {
        return { min: numbers[0], max: null };
    }
    return { min: null, max: numbers[0] };
}

function withinBudget(product, budget) {
    return (budget.min === null || product.price >= budget.min) &&
        (budget.max === null || product.price <= budget.max);
}

function sortByPrice(list, direction) {
    return list.slice().sort(function (a, b) {
        return direction === "desc" ? b.price - a.price : a.price - b.price;
    });
}

// The sentence from a product's description that explains a recommendation
function findReasonSentence(product, terms) {
    const sentences = product.description.split(/\.\s+/);
    const match = sentences.find(function (sentence) {
        const lower = sentence.toLowerCase();
        return terms.some(function (term) { return lower.includes(term); });
    });
    return match ? match.replace(/\.$/, "") + "." : "";
}

// ---------- Building a reply ----------
// A reply is: { html, products: [{ id, reason }], table, actions: [...], chips: [...] }
function buildAssistantReply(rawText, lang) {
    const T = ASSISTANT_TEXT[lang];
    const a = analyzeAssistantMessage(rawText);
    const namedProducts = a.named.map(function (match) { return match.product; });
    const bestScore = a.named.length ? a.named[0].score : 0;
    const bestMatches = a.named.filter(function (match) { return match.score === bestScore; }).map(function (match) { return match.product; });
    const asCards = function (list) { return list.map(function (product) { return { id: product.id }; }); };

    if (a.categories.length) {
        assistantLastCategories = a.categories;
    }

    // 1. About the assistant itself
    if (a.has("who")) {
        return { html: T.who };
    }
    if (a.has("thanks") && a.query.text.length < 30) {
        return { html: T.thanks };
    }

    // 2. How the website works
    if (a.has("delivery")) {
        const fee = getDeliveryFee();
        return { html: fee === null ? T.deliveryUnknown : fee === 0 ? T.deliveryFree : T.deliveryFee(fee) };
    }
    if (a.has("wishlist")) {
        return { html: T.howWishlist };
    }
    if (a.has("cart") && (a.has("how") || a.has("add"))) {
        return { html: T.howCart, products: bestMatches.length === 1 ? asCards(bestMatches) : [] };
    }
    if (a.has("compare") && a.has("how") && namedProducts.length < 2) {
        return { html: T.howCompare };
    }
    if (a.has("payment")) {
        return { html: T.payment };
    }
    if (a.has("checkout")) {
        return { html: T.howCheckout };
    }
    if (a.has("order")) {
        return {
            html: T.howOrder + (getWhatsAppNumber() === "" ? T.orderNotReady : ""),
            products: bestMatches.length === 1 ? asCards(bestMatches) : []
        };
    }

    // 3. Comparing products
    if (a.has("compare") || (a.has("better") && namedProducts.length >= 2)) {
        return buildCompareReply(a, namedProducts, lang);
    }

    // 4. Stock questions: honest, the site has no live stock data
    if (a.has("available")) {
        return { html: T.available, products: asCards(bestMatches.slice(0, 3)) };
    }

    // 5. Finding products
    const budget = parseAssistantBudget(a);
    const wantsCheap = a.has("cheap");
    const wantsExpensive = a.has("expensive");
    const categories = a.categories.length ? a.categories :
        (a.preferences.length ? assistantLastCategories : []);
    const pool = categories.length ? products.filter(function (p) { return categories.includes(p.category); }) : products.slice();
    const label = categories.length === 1 ? assistantCategoryLabel(categories[0], lang) : null;
    const shopAction = function (extra) {
        return Object.assign({ type: "shop", label: T.showInShop, category: categories.length === 1 ? categories[0] : "" }, extra || {});
    };

    // "Find by budget" without an amount → offer price ranges to choose from
    if (!budget && a.has("budgetMax") && !a.preferences.length && !wantsCheap && !wantsExpensive && bestMatches.length === 0) {
        return buildBudgetGuideReply(lang);
    }

    // A specific product by name (e.g. "silk pillow", "reed diffuser")
    if (bestMatches.length && !budget && !wantsCheap && !wantsExpensive && !a.preferences.length) {
        let matches = bestMatches;
        if (categories.length) {
            const inCategory = matches.filter(function (p) { return categories.includes(p.category); });
            if (inCategory.length) {
                matches = inCategory;
            }
        }
        // Several products that each matched by one shared word (e.g. "waffle") → ask which one.
        // Several products each named more specifically (e.g. "cloud down and mulberry silk") → show them.
        const intro = matches.length === 1 ? T.namedOne : (bestScore >= 2 ? T.namedFound : T.namedMany);
        return { html: intro, products: asCards(matches.slice(0, 4)) };
    }

    // Preferences (side sleeper, soft, cool, warm...) → score by real description text
    if (a.preferences.length) {
        const terms = [];
        a.preferences.forEach(function (preference) { terms.push.apply(terms, preference.terms); });
        const candidates = budget ? pool.filter(function (p) { return withinBudget(p, budget); }) : pool;
        const scored = candidates.map(function (product) {
            const text = (product.name + " " + product.description).toLowerCase();
            const hits = terms.filter(function (term) { return text.includes(term); });
            return { product: product, score: hits.length };
        }).filter(function (match) { return match.score > 0; }).sort(function (x, y) {
            return y.score - x.score || x.product.price - y.product.price;
        }).slice(0, 3);

        if (scored.length) {
            return {
                html: T.recommend(label),
                products: scored.map(function (match) {
                    return { id: match.product.id, reason: findReasonSentence(match.product, terms) };
                })
            };
        }
        return { html: T.recommendNone(label), products: asCards(candidates.slice(0, 6)), actions: [shopAction()] };
    }

    // Budget ("under $150", "between 50 and 100")
    if (budget) {
        const matches = sortByPrice(pool.filter(function (p) { return withinBudget(p, budget); }), "asc");
        if (matches.length === 0) {
            return { html: T.budgetNone(label), products: asCards(sortByPrice(pool, "asc").slice(0, 1)) };
        }
        const shown = matches.slice(0, 6);
        return {
            html: T.budget(label, budget) + (matches.length > shown.length ? "<p>" + T.showingSome(shown.length, matches.length) + "</p>" : ""),
            products: asCards(shown),
            actions: [shopAction({ min: budget.min, max: budget.max, sort: "price-asc" })]
        };
    }

    // Cheapest / most expensive
    if (wantsCheap || wantsExpensive) {
        const sorted = sortByPrice(pool, wantsExpensive ? "desc" : "asc");
        const shown = sorted.slice(0, categories.length ? 3 : 4);
        return {
            html: wantsExpensive ? T.expensive(label, sorted[0]) : T.cheapest(label, sorted[0]),
            products: asCards(shown),
            actions: [shopAction({ sort: wantsExpensive ? "price-desc" : "price-asc" })]
        };
    }

    // "Help me choose a pillow": show the pillows and ask what matters
    if (categories.length === 1 && categories[0] === "Sleeping Pillows" && a.has("recommend")) {
        return { html: T.pillowGuide, products: asCards(pool), chips: T.pillowChips };
    }

    // A category ("show me blankets", "مناشف")
    if (categories.length) {
        return {
            html: categories.length === 1 ? T.categoryList(label, pool.length) : T.manyCategories,
            products: asCards(pool.slice(0, 8)),
            actions: categories.length === 1 ? [shopAction()] : []
        };
    }

    // "What do you sell?"
    if (a.has("all")) {
        return {
            html: T.categoriesIntro,
            chips: Object.keys(ASSISTANT_CATEGORY_LABELS).map(function (category) {
                return assistantCategoryTitle(category, lang);
            })
        };
    }

    if (a.has("greet")) {
        return { html: T.greeting, chips: T.suggestions };
    }

    if (a.has("price")) {
        const prices = products.map(function (p) { return p.price; });
        return { html: T.priceRange(Math.min.apply(null, prices), Math.max.apply(null, prices)) };
    }

    return { html: T.fallback };
}

// Comparison using only real catalog fields (name, category, price, description)
function buildCompareReply(a, namedProducts, lang) {
    const T = ASSISTANT_TEXT[lang];
    let selected = namedProducts.slice(0, 3);

    // "Compare these two" → the two products shown in the previous answer
    if (selected.length < 2) {
        const recent = assistantLastProducts.map(findProduct).filter(function (p) {
            return p && (!a.categories.length || a.categories.includes(p.category));
        });
        if (recent.length === 2) {
            selected = recent;
        }
    }

    // Not enough products named yet: let the shopper pick with Compare buttons
    if (selected.length < 2) {
        let options = [];
        if (a.categories.length) {
            options = products.filter(function (p) { return p.category === a.categories[0]; });
        } else if (assistantLastProducts.length > 2) {
            options = assistantLastProducts.map(findProduct).filter(Boolean);
        }
        if (options.length === 0) {
            return buildCompareGuideReply(lang);   // first choose a category
        }
        return buildCompareOptionsReply(options, lang);
    }

    const sorted = sortByPrice(selected, "asc");
    const cheapest = sorted[0];
    const priciest = sorted[sorted.length - 1];
    const priceNote = cheapest.price === priciest.price ? T.compareSamePrice :
        T.compareCheaper(cheapest, priciest.price - cheapest.price);

    const headerCells = selected.map(function (p) { return '<th scope="col" dir="ltr">' + escapeHTML(p.name) + "</th>"; }).join("");
    const row = function (heading, render) {
        return '<tr><th scope="row">' + heading + "</th>" + selected.map(function (p) { return "<td>" + render(p) + "</td>"; }).join("") + "</tr>";
    };
    const table = '<table class="assistant-compare"><thead><tr><td></td>' + headerCells + "</tr></thead><tbody>" +
        row(T.priceLabel, function (p) { return "<bdi>" + formatPrice(p.price) + "</bdi>"; }) +
        row(T.categoryLabel, function (p) { return assistantCategoryTitle(p.category, lang); }) +
        row(T.detailsLabel, function (p) { return '<span lang="en" dir="ltr">' + escapeHTML(p.description) + "</span>"; }) +
        "</tbody></table>";

    return {
        html: T.compareIntro,
        table: table,
        after: "<p>" + priceNote + "</p><p>" + T.compareNote + "</p>",
        actions: [{ type: "compare", label: T.openCompare, ids: selected.map(function (p) { return p.id; }).join(",") }],
        rememberIds: selected.map(function (p) { return p.id; })
    };
}

// "Compare Products": first choose a category
function buildCompareGuideReply(lang) {
    const T = ASSISTANT_TEXT[lang];
    return { html: T.compareGuide, chips: T.compareGuideChips };
}

// Product cards with a Compare toggle, plus a button to open the full comparison
function buildCompareOptionsReply(options, lang) {
    const T = ASSISTANT_TEXT[lang];
    return {
        html: T.compareAsk,
        products: options.map(function (p) { return { id: p.id, compare: true }; }),
        actions: [{ type: "compare-open", label: T.openComparison }]
    };
}

// "Find by Budget": price ranges that the budget rules understand
function buildBudgetGuideReply(lang) {
    const T = ASSISTANT_TEXT[lang];
    return { html: T.budgetGuide, chips: T.budgetGuideChips };
}

// ---------- Showing messages ----------
function scrollAssistantToBottom() {
    assistantMessages.scrollTop = assistantMessages.scrollHeight;
}

function addAssistantUserMessage(text, lang) {
    const message = document.createElement("div");
    message.className = "assistant-message from-user";
    message.lang = lang;
    message.dir = ASSISTANT_TEXT[lang].dir;
    const bubble = document.createElement("div");
    bubble.className = "assistant-bubble";
    bubble.textContent = text;   // shopper text is always shown as plain text
    message.appendChild(bubble);
    assistantMessages.appendChild(message);
    scrollAssistantToBottom();
}

function renderAssistantProductCard(item, lang) {
    const T = ASSISTANT_TEXT[lang];
    const product = findProduct(item.id);
    if (!product) {
        return "";
    }
    const reason = item.reason ? '<p class="assistant-product-reason" lang="en" dir="ltr">“' + escapeHTML(item.reason) + "”</p>" : "";
    // Compare toggle (only when the shopper is choosing products to compare)
    const selected = compareList.includes(product.id);
    const compareButton = item.compare ?
        '<button class="assistant-action" data-assistant-action="compare-toggle" data-id="' + product.id + '" aria-pressed="' + selected + '">' +
        compareIcon.replace('width="18" height="18" ', "") + "<span>" + (selected ? T.compareSelected : T.compareToggle) + "</span></button>" : "";
    return `
        <div class="assistant-product">
            <img src="${product.image}" alt="${escapeHTML(product.alt)}" loading="lazy">
            <div class="assistant-product-info">
                <p class="assistant-product-category">${assistantCategoryTitle(product.category, lang)}</p>
                <p class="assistant-product-name" dir="ltr">${escapeHTML(product.name)}</p>
                <p class="assistant-product-price"><bdi>${formatPrice(product.price)}</bdi></p>
                ${reason}
                <div class="assistant-product-actions">
                    <button class="assistant-action" data-assistant-action="view" data-id="${product.id}">${T.view}</button>
                    <button class="assistant-action primary" data-assistant-action="add" data-id="${product.id}">${T.add}</button>
                    ${compareButton}
                </div>
            </div>
        </div>
    `;
}

// Keep the chat's Compare buttons in sync with the site's comparison list
function updateAssistantCompareButtons() {
    assistantMessages.querySelectorAll('[data-assistant-action="compare-toggle"]').forEach(function (button) {
        const selected = compareList.includes(Number(button.dataset.id));
        const T = ASSISTANT_TEXT[button.closest(".assistant-message").lang] || ASSISTANT_TEXT[assistantLang];
        button.setAttribute("aria-pressed", selected);
        button.querySelector("span").textContent = selected ? T.compareSelected : T.compareToggle;
    });
}

function addAssistantBotMessage(reply, lang) {
    const message = document.createElement("div");
    message.className = "assistant-message from-bot";
    message.lang = lang;
    message.dir = ASSISTANT_TEXT[lang].dir;

    let html = '<div class="assistant-bubble">' + reply.html + (reply.table || "") + (reply.after || "") + "</div>";

    if (reply.products && reply.products.length) {
        html += '<div class="assistant-products">' + reply.products.map(function (item) {
            return renderAssistantProductCard(item, lang);
        }).join("") + "</div>";
    }

    if (reply.actions && reply.actions.length) {
        html += '<div class="assistant-actions">' + reply.actions.map(function (action) {
            return '<button class="assistant-action" data-assistant-action="' + action.type + '"' +
                (action.category !== undefined ? ' data-category="' + escapeHTML(action.category) + '"' : "") +
                (action.min !== undefined && action.min !== null ? ' data-min="' + action.min + '"' : "") +
                (action.max !== undefined && action.max !== null ? ' data-max="' + action.max + '"' : "") +
                (action.sort ? ' data-sort="' + action.sort + '"' : "") +
                (action.ids ? ' data-ids="' + action.ids + '"' : "") +
                ">" + action.label + "</button>";
        }).join("") + "</div>";
    }

    if (reply.chips && reply.chips.length) {
        html += '<div class="assistant-actions">' + reply.chips.map(function (chip) {
            return '<button class="assistant-chip" data-assistant-ask="' + escapeHTML(chip) + '">' + escapeHTML(chip) + "</button>";
        }).join("") + "</div>";
    }

    message.innerHTML = html;
    assistantMessages.appendChild(message);

    // Remember what was shown, for follow-ups like "compare these two"
    if (reply.rememberIds) {
        assistantLastProducts = reply.rememberIds;
    } else if (reply.products && reply.products.length) {
        assistantLastProducts = reply.products.map(function (item) { return item.id; });
    }

    scrollAssistantToBottom();
}

// Shopper sends a message: show it, a short "typing" pause, then the answer
function handleAssistantMessage(rawText) {
    const text = rawText.trim();
    if (text === "") {
        return;
    }
    const lang = detectAssistantLanguage(text);
    if (lang !== assistantLang) {
        setAssistantLanguage(lang, false);
    }
    addAssistantUserMessage(text, lang);
    showAssistantReply(buildAssistantReply(text, lang), lang);
}

function showAssistantReply(reply, lang) {
    const typing = document.createElement("div");
    typing.className = "assistant-message from-bot assistant-typing";
    typing.setAttribute("aria-hidden", "true");
    typing.innerHTML = '<div class="assistant-bubble"><span></span><span></span><span></span></div>';
    assistantMessages.appendChild(typing);
    scrollAssistantToBottom();

    setTimeout(function () {
        typing.remove();
        addAssistantBotMessage(reply, lang);
    }, 350);
}

// ---------- Quick actions (the buttons at the top of the panel) ----------
const ASSISTANT_QUICK_CATEGORIES = {
    pillows: "Sleeping Pillows",
    blankets: "Blankets",
    sheets: "Bed Sheets",
    towels: "Towels"
};

function runAssistantQuickAction(id) {
    const lang = assistantLang;
    const T = ASSISTANT_TEXT[lang];
    addAssistantUserMessage(T.quickLabels[id], lang);

    if (id === "compare") {
        showAssistantReply(buildCompareGuideReply(lang), lang);
        return;
    }
    if (id === "budget") {
        showAssistantReply(buildBudgetGuideReply(lang), lang);
        return;
    }

    // A collection: answer in the chat with its products, and on larger screens
    // also filter the shop behind the panel (on phones the panel covers the shop,
    // so the "Show in shop" button in the answer does that instead).
    const category = ASSISTANT_QUICK_CATEGORIES[id];
    const items = products.filter(function (p) { return p.category === category; });
    showAssistantReply({
        html: T.categoryList(assistantCategoryLabel(category, lang), items.length),
        products: items.map(function (p) { return { id: p.id }; }),
        actions: [{ type: "shop", label: T.showInShop, category: category }]
    }, lang);
    assistantLastCategories = [category];
    if (window.innerWidth > 700) {
        applyShopFilters({ category: category });
    }
}

// Same filters as the shop's own controls, then scroll to the collection
function applyShopFilters(options) {
    clearAllFilters();
    if (options.min) {
        priceMinInput.value = options.min;
        minPrice = Number(options.min);
    }
    if (options.max) {
        priceMaxInput.value = options.max;
        maxPrice = Number(options.max);
    }
    if (options.sort) {
        sortSelect.value = options.sort;
        sortOrder = options.sort;
    }
    closeCheckout();
    if (options.category) {
        setCategory(options.category);
    } else {
        renderProducts();
    }
    document.getElementById("products").scrollIntoView();
}

// ---------- Language ----------
function setAssistantLanguage(lang, announce) {
    const T = ASSISTANT_TEXT[lang];
    assistantLang = lang;
    assistantPanel.dir = T.dir;
    assistantPanel.lang = lang;
    document.getElementById("assistant-subtitle").textContent = T.subtitle;
    document.getElementById("assistant-disclaimer").textContent = T.disclaimer;
    document.getElementById("assistant-input-label").textContent = T.inputLabel;
    assistantInput.placeholder = T.placeholder;
    document.getElementById("assistant-send").setAttribute("aria-label", T.send);
    document.getElementById("assistant-send-text").textContent = T.sendText;
    document.getElementById("assistant-quick-title").textContent = T.quickTitle;
    document.querySelectorAll("[data-quick-label]").forEach(function (label) {
        label.textContent = T.quickLabels[label.dataset.quickLabel];
    });
    assistantCloseButton.setAttribute("aria-label", T.close);
    assistantLauncher.setAttribute("aria-label", assistantPanel.classList.contains("open") ? T.closeLauncher : T.openLauncher);
    assistantLangButtons.forEach(function (button) {
        button.setAttribute("aria-pressed", button.dataset.lang === lang);
    });
    if (announce) {
        addAssistantBotMessage({ html: T.welcome }, lang);
    }
}

// ---------- Open / close ----------
function openAssistant() {
    assistantPanel.classList.add("open");
    assistantLauncher.setAttribute("aria-expanded", "true");
    assistantLauncher.setAttribute("aria-label", ASSISTANT_TEXT[assistantLang].closeLauncher);
    if (!assistantStarted) {
        assistantStarted = true;
        addAssistantBotMessage({ html: ASSISTANT_TEXT[assistantLang].welcome }, assistantLang);
    }
    assistantInput.focus({ preventScroll: true });
}

// returnFocus = false when another panel is opening and takes the focus
function closeAssistant(returnFocus) {
    if (!assistantPanel.classList.contains("open")) {
        return;
    }
    const hadFocus = assistantPanel.contains(document.activeElement);
    assistantPanel.classList.remove("open");
    assistantLauncher.setAttribute("aria-expanded", "false");
    assistantLauncher.setAttribute("aria-label", ASSISTANT_TEXT[assistantLang].openLauncher);
    if (returnFocus !== false && hadFocus) {
        assistantLauncher.focus({ preventScroll: true });
    }
}

assistantLauncher.addEventListener("click", function () {
    if (assistantPanel.classList.contains("open")) {
        closeAssistant();
    } else {
        openAssistant();
    }
});

assistantCloseButton.addEventListener("click", function () {
    closeAssistant();
});

assistantLangButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.dataset.lang !== assistantLang) {
            setAssistantLanguage(button.dataset.lang, true);
        }
    });
});

// Enter (or the Send button) sends the message
assistantForm.addEventListener("submit", function (event) {
    event.preventDefault();
    handleAssistantMessage(assistantInput.value);
    assistantInput.value = "";
});

// Quick actions at the top, and follow-up options inside answers
assistantPanel.addEventListener("click", function (event) {
    const quick = event.target.closest("[data-quick]");
    if (quick) {
        runAssistantQuickAction(quick.dataset.quick);
        return;
    }
    const chip = event.target.closest("[data-assistant-ask]");
    if (chip) {
        handleAssistantMessage(chip.dataset.assistantAsk);
    }
});

// On phones the chat sits below the site header; using the header closes it,
// so the menu, search, wishlist and cart are never hidden behind the chat
siteHeader.addEventListener("click", function (event) {
    if (window.innerWidth <= 700 && event.target.closest("a, button")) {
        closeAssistant(false);
    }
});

// Buttons inside answers reuse the website's own features
assistantMessages.addEventListener("click", function (event) {
    const button = event.target.closest("[data-assistant-action]");
    if (!button) {
        return;
    }
    const action = button.dataset.assistantAction;
    const T = ASSISTANT_TEXT[assistantLang];

    if (action === "view") {
        openProductModal(button.dataset.id);
    } else if (action === "add") {
        const product = findProduct(button.dataset.id);
        if (button.classList.contains("added")) {
            return;
        }
        addToCart(product.id, 1);            // the same cart logic as the product cards
        showToast(T.toastAdded(product.name));
        button.textContent = T.added;
        button.classList.add("added");
        setTimeout(function () {
            button.textContent = T.add;
            button.classList.remove("added");
        }, 1200);
    } else if (action === "shop") {
        applyShopFilters({
            category: button.dataset.category,
            min: button.dataset.min,
            max: button.dataset.max,
            sort: button.dataset.sort
        });
        if (window.innerWidth <= 700) {
            closeAssistant(false); // on phones the chat covers the shop
        }
    } else if (action === "compare") {
        compareList = button.dataset.ids.split(",").map(Number).slice(0, COMPARE_LIMIT);
        renderCompare();
        openCompare();
    } else if (action === "compare-toggle") {
        toggleCompare(button.dataset.id);    // the site's own comparison list (max 4)
    } else if (action === "compare-open") {
        if (compareList.length >= 2) {
            openCompare();
        } else {
            showToast(T.compareNeedTwo);
        }
    }
});


// =========================================================
// 14. START: draw everything once when the page loads
// =========================================================
renderFilterButtons();
renderProducts();
renderCart();
renderWishlist();
renderCompare();
