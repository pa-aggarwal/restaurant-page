import { getCompanyLogo } from "./logo";

export class ContactPage {
    constructor() {
        this.container = document.createElement("section");
        this.container.id = "contact";
        this.container.classList.add("contact");

        this.heroContainer = document.createElement("div");
        this.heroContainer.classList.add("hero__container");

        this.addContent();
    }

    addContent() {
        const companyLogo = getCompanyLogo("hero");
        const heroContent = `
            <div class="hero__text">
                <h3>${companyLogo}</h3>
                <h1>Contact</h1>
            </div>`;

        this.heroContainer.insertAdjacentHTML("beforeend", heroContent);
        this.container.appendChild(this.heroContainer);
    }

    /**
     * Return a container with the contact page content.
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
