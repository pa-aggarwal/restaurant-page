import { getCompanyLogo } from "./logo";

export class AboutPage {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "about";
        this.container.classList.add("about");

        this.heroSection = document.createElement("section");
        this.heroSection.classList.add("hero__container");

        this.addContent();
    }

    addContent() {
        const companyLogo = getCompanyLogo("hero");
        const heroContent = `
            <div class="hero__text">
                <h3>${companyLogo}</h3>
                <h1>About Us</h1>
            </div>`;

        this.heroSection.insertAdjacentHTML("beforeend", heroContent);
        this.container.appendChild(this.heroSection);
    }

    /**
     * Return a container with the about page content.
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
