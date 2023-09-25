import { getCompanyLogo } from "./logo";

export class MenuPage {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "menu";
        this.container.classList.add("menu");

        this.heroSection = document.createElement("section");
        this.heroSection.classList.add("hero__container");

        this.addContent();
    }

    addContent() {
        const companyLogo = getCompanyLogo("hero");
        const heroContent = `
            <div class="hero__text">
                <h3>${companyLogo}</h3>
                <h1>The Menu</h1>
            </div>`;

        this.heroSection.insertAdjacentHTML("beforeend", heroContent);
        this.container.appendChild(this.heroSection);
    }

    /**
     * Return a container with the menu page content.
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
        return this.heroSection;
    }
}
