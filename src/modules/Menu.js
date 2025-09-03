export const GenerateMenuPageContent = () => {

    const contentContainer = document.querySelector(".content-container");
    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    const heading = document.createElement("div");
    heading.classList.add("heading");

    const h1 = document.createElement("h1");
    h1.textContent = "🍽 Our Menu";

    const p = document.createElement("p");
    p.textContent = "At Relax Foods, every dish is made with love, passion, and the freshest ingredients. From hearty classics to chef's modern creations, our menu has something for everyone."

    heading.appendChild(h1);
    heading.appendChild(p);

    const content = document.createElement("div");
    content.classList.add("content");

    const items = [
        ["🌟 Chef’s Specials","✨ Signature Steak with Garlic Butter","✨ Grilled Salmon with Lemon Herb Sauce","✨ Creamy Alfredo Pasta with Fresh Parmesan"],
        ["🥗 Starters & Appetizers","Crispy Mozzarella Sticks","Loaded Nachos with Salsa & Guacamole","Fresh Garden Salad with House Dressing"],
        ["🍕 Main Courses","Margherita Pizza with Fresh Basil","Spicy Chicken Burger with Fries","Paneer Tikka Masala with Naan"],
        ["🍷 Drinks & Beverages","Freshly Squeezed Juices","Iced Coffee & Smoothies","House Special Mocktails"],
        ["🍰 Desserts","Classic Tiramisu","Chocolate Lava Cake","Seasonal Fruit Tart"]
    ];
    items.forEach(innerItems => {
        const h2 = document.createElement("h2");
        h2.textContent = innerItems[0];

        const ul = document.createElement("ul");
        ul.classList.add("menu-ul")
        innerItems.slice(1).forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        })
        content.appendChild(h2);
        content.appendChild(ul);
    })

    mainContent.appendChild(heading);
    mainContent.appendChild(content);
    contentContainer.appendChild(mainContent);

};