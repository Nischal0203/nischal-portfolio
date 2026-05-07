const menuItems = [
  { name: "Viral Nash Box", price: "$28", desc: "The ultimate Nashville experience — tenders, fries, slaw and our signature hot sauce. The one everyone's talking about.", tag: "viral", tag2: "🔥 Most Ordered", category: ["all","viral","fried"] },
  { name: "Firecracker Vibez", price: "$18", desc: "Crispy Nashville chicken loaded with firecracker heat and our secret sauce. Not for the faint-hearted.", tag: "hot", tag2: "🌶️ Spicy", category: ["all","viral","fried"] },
  { name: "OG Loaded Vibez", price: "$15", desc: "The classic that started it all. Golden-fried chicken with the OG Fried Vibez seasoning. Simple. Perfect.", tag: "", tag2: "", category: ["all","fried"] },
  { name: "Fire Cracker Tenders", price: "$10", desc: "3 crispy, juicy tenders with our signature firecracker coating and dipping sauce on the side.", tag: "hot", tag2: "🌶️ Spicy", category: ["all","viral","fried"] },
  { name: "Nash Box", price: "$28", desc: "Packed box featuring our viral Nashville chicken with all the sides. Feed yourself right.", tag: "viral", tag2: "⚡ Viral", category: ["all","viral","burgers"] },
  { name: "Smash Burger", price: "$16", desc: "Double smashed patty, American cheese, pickles, caramelised onion and our house sauce on a toasted brioche bun.", tag: "", tag2: "", category: ["all","burgers"] },
  { name: "Firecracker Burger", price: "$18", desc: "Nashville hot chicken fillet, slaw, pickles and firecracker aioli stacked in a soft potato bun.", tag: "hot", tag2: "🌶️ Spicy", category: ["all","burgers"] },
  { name: "Fire Cracker Loaded Fries", price: "$15", desc: "Shoestring fries smothered in cheese, jalapeños, bacon bits and firecracker aioli drizzle.", tag: "viral", tag2: "⚡ Viral", category: ["all","viral","sides"] },
  { name: "OG Loaded Fries", price: "$12", desc: "Crispy fries topped with melted cheese, bacon and creamy ranch sauce. The go-to side.", tag: "", tag2: "", category: ["all","sides"] },
  { name: "Mozzarella Sticks", price: "$20", desc: "3 golden-fried mozzarella sticks, perfectly gooey inside with marinara dipping sauce.", tag: "", tag2: "", category: ["all","viral","sides"] },
  { name: "Nashville Wrap", price: "$14", desc: "Nashville hot chicken, slaw, pickles and ranch wrapped up in a soft flour tortilla. On-the-go fire.", tag: "", tag2: "", category: ["all","wraps"] },
  { name: "Firecracker Wrap", price: "$15", desc: "Firecracker tenders, mixed slaw, cheese and sriracha mayo in a toasted wrap.", tag: "hot", tag2: "🌶️ Spicy", category: ["all","wraps"] },
  { name: "Signature Sauces", price: "$2", desc: "Choose from OG Nashville, Firecracker, Ranch, Smoky BBQ or Garlic Aioli. Upgrade any meal.", tag: "", tag2: "", category: ["all","sides"] },
  { name: "Soft Drink", price: "$4", desc: "Coke, Sprite, Fanta or Water. Keep it cold.", tag: "", tag2: "", category: ["all","dessert"] },
  { name: "Dessert of the Day", price: "$8", desc: "Ask us what's on today — from churros to cookies and cream shakes, we keep it fresh.", tag: "viral", tag2: "⚡ Viral", category: ["all","dessert"] },
];

function renderMenu(filter = "all") {
  const grid = document.getElementById("menu-grid");
  grid.innerHTML = "";
  const items = filter === "all" ? menuItems : menuItems.filter(i => i.category.includes(filter));
  items.forEach(item => {
    const tagClass = item.tag === "viral" ? "tag-viral" : item.tag === "hot" ? "tag-hot" : "";
    grid.innerHTML += `
      <div class="menu-card">
        <div class="menu-card-top">
          <div class="menu-card-name">${item.name}</div>
          <div class="menu-card-price">${item.price}</div>
        </div>
        ${item.tag2 ? `<span class="menu-card-tag ${tagClass}">${item.tag2}</span>` : ""}
        <div class="menu-card-desc">${item.desc}</div>
        <button class="add-btn" onclick="addToCart('${item.name}')">+ Add to Order</button>
      </div>
    `;
  });
}

function addToCart(name) {
  const toast = document.getElementById("cart-toast");
  toast.textContent = `✓ ${name} added!`;
  toast.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.tab);
  });
});

renderMenu();
