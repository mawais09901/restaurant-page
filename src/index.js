import "./styles.css"
import {GenerateHomePageContent} from "./modules/Home.js"
import { GenerateMenuPageContent } from "./modules/Menu.js";
import { GenerateAboutPageContent } from "./modules/About.js";
import { GenerateContactPageContent } from "./modules/Contact.js";

GenerateHomePageContent();
document.querySelector(".home-button").addEventListener("click",() => {
    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = "";
    GenerateHomePageContent();
});

document.querySelector(".menu-button").addEventListener("click",() => {
    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = "";
    GenerateMenuPageContent();
});

document.querySelector(".about-button").addEventListener("click",() => {
    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = "";
    GenerateAboutPageContent();
});

document.querySelector(".contact-button").addEventListener("click",() => {
    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = "";
    GenerateContactPageContent();
});