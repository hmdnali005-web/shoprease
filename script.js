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
// 14. START: draw everything once when the page loads
// =========================================================
renderFilterButtons();
renderProducts();
renderCart();
renderWishlist();
renderCompare();
