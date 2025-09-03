export const GenerateHomePageContent = () => {

    const contentContainer = document.querySelector(".content-container");

    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    const heading = document.createElement("div");
    heading.classList.add("heading");

    const h1 = document.createElement("h1");
    h1.textContent = "🍴 Welcome to Relax Foods";

    const p = document.createElement("p");
    p.textContent = "At Relax Foods we believe every meal should be more than just food — it should be an experience. From farm-fresh ingredients to handcrafted recipes, we bring you flavors that celebrate tradition with a modern twist."

    heading.appendChild(h1);
    heading.appendChild(p);

    const content = document.createElement("div");
    content.classList.add("content");

    const h2 = document.createElement("h2");
    h2.textContent = "Why Dine With Us?";

    const ul = document.createElement("ul");

    const items = [
        "✅ Fresh Ingredients - We source the best local produce and premium quality ingredients.",
        "✅ Authentic Recipes - Traditional flavors cooked with passion and creativity.",
        "✅ Cozy Ambience - A warm and welcoming environment for every occasion.",
        "✅ Friendly Service - We treat every guest like family."
    ];
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;

        ul.appendChild(li);
    });

    const h3 = document.createElement("h3");
    h3.textContent = "🍷 Taste. Relax. Enjoy.";

    const p2 = document.createElement("p");
    p2.textContent = "From sizzling appetizers to chef's signature specials and decadent desserts, every plate is crafted to delight your senses. Pair your meal with our curated beverages and enjoy unforgettable dining moments.";

    const h4 = document.createElement("h4");
    h4.textContent = "👉 Call to Action Buttons:";

    const ul2 = document.createElement("ul");
    const items2 = [
        "Reserve a Table",
        "View Menu",
        "Order Online"
    ];
    items2.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;

        ul2.appendChild(li);
    })

    const items3 = [h2,ul,h3,p2,h4,ul2];
    items3.forEach(item => {
        content.appendChild(item);
    })

    mainContent.appendChild(heading);
    mainContent.appendChild(content);
    contentContainer.appendChild(mainContent);

};