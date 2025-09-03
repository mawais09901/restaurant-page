export const GenerateAboutPageContent = () => {

    const contentContainer = document.querySelector(".content-container");

    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    const heading = document.createElement("div");
    heading.classList.add("heading");

    const h1 = document.createElement("h1");
    h1.textContent = "🌿 About Us";

    const p = document.createElement("p");
    p.textContent = "At Relax Foods, food is more than just a meal — it's a way of bringing people together. Founded with a passion for authentic flavors and a love for hospitality, we set out to create a place where every guest feels like family.";

    heading.appendChild(h1);
    heading.appendChild(p);

    const content = document.createElement("div");
    content.classList.add("content");

    const h2 = document.createElement("h2");
    h2.textContent = "Our Story";

    const p2 = document.createElement("p");
    p2.textContent = "It all started with a simple idea: great food, great people, great memories. From sourcing fresh local ingredients to perfecting recipes passed down through generations, our journey has always been about blending tradition with creativity.";

    const h3 = document.createElement("h3");
    h3.textContent = "Our Promise";

    const ul = document.createElement("ul");
    const items = [
        "✅ Freshness First - We handpick the finest ingredients daily.",
        "✅ Authentic Flavors - Every dish is crafted with care and passion.",
        "✅ Warm Hospitality - We believe every guest deserves comfort and joy."
    ];
    items.forEach(item => {
        let splittedItem = item.split("-");
        const li = document.createElement("li");
        li.innerHTML = `<strong>${splittedItem[0]}</strong> - <span>${splittedItem[1]}<span>`
        ul.appendChild(li);
    });

    const items2 = [h2,p2,h3,ul];
    items2.forEach(item => {
        content.appendChild(item);
    })

    mainContent.appendChild(heading);
    mainContent.appendChild(content);
    contentContainer.appendChild(mainContent);

}