export const GenerateContactPageContent = () => {

    const contentContainer = document.querySelector(".content-container");

    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    const heading = document.createElement("div");
    heading.classList.add("heading");
    
    const h1 = document.createElement("h1");
    h1.textContent = "📞 Contact Us";

    const p1 = document.createElement("p");
    p1.textContent = "We'd love to hear from you! Whether you're booking a table, placing an order, or just have a question, our team is here to help.";

    heading.appendChild(h1);
    heading.appendChild(p1);

    const content = document.createElement("div");
    content.classList.add("content");

    const h2 = document.createElement("h2");
    h2.textContent = "Get in Touch With Us";

    const ul = document.createElement("ul");
    const items = [
        "📍 Visit us at: 123 Main Street, Your City",
        "📞 Call us at: (123) 456-7890",
        "📧 Email us at: info@yourrestaurant.com",
        "🕒 Open daily: 11:00 AM - 10:00 PM",
        "💬 Fill out our contact form and we'll reply quickly"
    ];
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });

    content.appendChild(h2)
    content.appendChild(ul)

    mainContent.appendChild(heading);
    mainContent.appendChild(content);
    contentContainer.appendChild(mainContent);
    
};