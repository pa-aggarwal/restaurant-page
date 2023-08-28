import { getCompanyLogo } from "./logo";

export class HomePage {
    /**
     * Return a new instance of a home page.
     * @param {string} homeText - The text to display in the hero section.
     */
    constructor(homeText) {
        this.container = document.createElement("section");
        this.container.id = "home";
        this.container.classList.add("home");

        this.heroContainer = document.createElement("div");
        this.heroContainer.classList.add("hero__container");
        this.heroText = homeText;

        this.addContent();
    }

    addContent() {
        const companyLogo = getCompanyLogo("hero");
        const heroContent = `
            <div class="hero__text">
                <h3 class="hero__heading">Welcome to</h3>
                <h1 class="hero__heading">${companyLogo}</h1>
                <p>${this.heroText}</p>
                <div class="hero__buttons">
                    <button class="hero__button hero__button--cta">View Menu</button>
                    <button class="hero__button">Special Offers</button>
                </div>
            </div>`;

        this.heroContainer.insertAdjacentHTML("beforeend", heroContent);
        this.container.appendChild(this.heroContainer);
    }

    /**
     * Return a container with the home page content.
     * @returns HTMLElement
     */
    render() {
        return this.container;
    }

    /**
     * Return the container for this page's hero section.
     * @returns HTMLElement
     */
    getHeroContainer() {
        return this.heroContainer;
    }
}
