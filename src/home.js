import { getCompanyLogo, getLogoIcon } from "./logo";
import IceCream1 from "./images/ice-cream-01.jpg";
import IceCream2 from "./images/ice-cream-02.jpg";
import IceCream3 from "./images/ice-cream-03.jpg";
import IceCream4 from "./images/ice-cream-04.jpg";
import IceCream5 from "./images/ice-cream-05.jpg";
import IceCream6 from "./images/ice-cream-06.jpg";
import IceCream7 from "./images/ice-cream-07.jpg";
import IceCream8 from "./images/ice-cream-08.jpg";

export class HomePage {
    /**
     * Return a new instance of a home page.
     * @param {string} homeText - The text to display in the hero section.
     */
    constructor(homeText) {
        this.container = document.createElement("div");
        this.container.id = "home";
        this.container.classList.add("home");

        this.heroSection = document.createElement("section");
        this.heroSection.classList.add("hero__container");
        this.heroText = homeText;

        this.parlourSection = document.createElement("section");
        this.parlourSection.classList.add("parlour__container");

        this.discoverSection = document.createElement("section");
        this.discoverSection.classList.add("discover__container");

        this.addHeroContent();
        this.addParlourContent();
        this.addDiscoverContent();
    }

    addHeroContent() {
        const companyLogo = getCompanyLogo("hero");
        const content = `
            <div class="hero__text">
                <h3 class="hero__heading">Welcome to</h3>
                <h1 class="hero__heading">${companyLogo}</h1>
                <p>${this.heroText}</p>
                <div class="hero__buttons">
                    <button class="hero__button hero__button--cta">View Menu</button>
                    <button class="hero__button">Special Offers</button>
                </div>
            </div>`;

        this.heroSection.insertAdjacentHTML("beforeend", content);
        this.container.appendChild(this.heroSection);
    }

    addParlourContent() {
        const content = `
            <div class="parlour__content">
                <div class="parlour__text">
                    <span class="parlour__logo">${getLogoIcon()}</span>
                    <h2 class="parlour__heading">Hawkin's Ice Cream Parlour</h2>
                    <p class="parlour__paragraph">Rated as the #1 ice cream parlour in all of Hawkins, Indiana by The Hawkins Post.
                    Our in-house ice cream is made with American pride and features over 30 different toppings and sweet condiments.</p>
                </div>
                <div class="gallery">
                    <figure class="gallery__item">
                        <img src="${IceCream1}" alt="Ice cream with chocolate and nuts">
                    </figure>
                    <figure class="gallery__item">
                        <img src="${IceCream2}" alt="Banana Split">
                    </figure>
                    <figure class="gallery__item">
                        <img src="${IceCream3}" alt="Ice cream with donuts and M&M's">
                    </figure>
                    <figure class="gallery__item">
                        <img src="${IceCream4}" alt="Ice cream in a waffle cone">
                    </figure>
                </div>
            </div>`;

        this.parlourSection.insertAdjacentHTML("beforeend", content);
        this.container.appendChild(this.parlourSection);
    }

    addDiscoverContent() {
        const content = `
            <div class="discover__content">
                <div class="discover__text">
                    <h2 class="discover__heading">
                        <span class="discover__special">Discover </span>Our Menu
                    </h2>
                    <p class="discover__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex mauris. 
                    Nullam justo risus, pellentesque eu elementum ut, pretium ac orci. Ut eget nunc posuere neque commodo aliquam. 
                    Vivamus commodo congue augue, at imperdiet justo ullamcorper vel.</p>
                    <button class="discover__button">View Full Menu</button>
                </div>
                <div class="gallery">
                    <div class="gallery__column">
                        <figure class="gallery__item">
                            <img src="${IceCream5}" alt="Ice cream scoop">
                        </figure>
                        <figure class="gallery__item">
                            <img src="${IceCream6}" alt="Ice cream with waffle inside cup">
                        </figure>
                    </div>
                    <div class="gallery__column">
                        <figure class="gallery__item">
                            <img src="${IceCream7}" alt="Ice cream with American flag and decorations">
                        </figure>
                        <figure class="gallery__item">
                            <img src="${IceCream8}" alt="Demogorgan-inspired strawberry ice cream">
                        </figure>
                    </div>
                </div>
            </div>`;

        this.discoverSection.insertAdjacentHTML("beforeend", content);
        this.container.appendChild(this.discoverSection);
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
        return this.heroSection;
    }
}
