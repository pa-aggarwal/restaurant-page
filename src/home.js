import { Carousel } from "./carousel";
import { getCompanyLogo, getLogoIcon } from "./logo";
import IceCream1 from "./images/ice-cream-01.jpg";
import IceCream2 from "./images/ice-cream-02.jpg";
import IceCream3 from "./images/ice-cream-03.jpg";
import IceCream4 from "./images/ice-cream-04.jpg";
import IceCream5 from "./images/ice-cream-05.jpg";
import IceCream6 from "./images/ice-cream-06.jpg";
import IceCream7 from "./images/ice-cream-07.jpg";
import IceCream8 from "./images/ice-cream-08.jpg";
import Customer1 from "./images/customer-01.jpg";
import Customer2 from "./images/customer-02.jpg";
import Customer3 from "./images/customer-03.jpg";

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

        this.customerSection = document.createElement("section");
        this.customerSection.classList.add("customer__container");

        this.addHeroContent();
        this.addParlourContent();
        this.addDiscoverContent();
        this.addCustomerContent();
    }

    addHeroContent() {
        const companyLogo = getCompanyLogo("hero");
        const content = `
            <div class="hero__text">
                <h3 class="hero__heading">Welcome to</h3>
                <h1 class="hero__heading">${companyLogo}</h1>
                <p>${this.heroText}</p>
                <div class="hero__buttons">
                    <button type="button" class="button button--primary">View Menu</button>
                    <button type="button" class="button button--secondary">Special Offers</button>
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
                    <h2 class="parlour__heading">Hawkin's Best Ice Cream</h2>
                    <p class="parlour__paragraph light-text">Rated as the #1 ice cream parlour in all of Hawkins, Indiana by The Hawkins Post.
                    Our in-house ice cream is made with American pride and features over 30 different toppings and sweet condiments.</p>
                </div>
                <div class="gallery">
                    <figure class="gallery__item">
                        <img class="image" src="${IceCream1}" alt="Ice cream with chocolate and nuts">
                    </figure>
                    <figure class="gallery__item">
                        <img class="image" src="${IceCream2}" alt="Banana Split">
                    </figure>
                    <figure class="gallery__item">
                        <img class="image" src="${IceCream3}" alt="Ice cream with donuts and M&M's">
                    </figure>
                    <figure class="gallery__item">
                        <img class="image" src="${IceCream4}" alt="Ice cream in a waffle cone">
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
                    <p class="discover__paragraph light-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis ex mauris.
                    Nullam justo risus, pellentesque eu elementum ut, pretium ac orci. Ut eget nunc posuere neque commodo aliquam.
                    Vivamus commodo congue augue.</p>
                    <button type="button" class="button button--primary">View Full Menu</button>
                </div>
                <div class="gallery">
                    <figure class="gallery__item">
                        <img class="image" src="${IceCream5}" alt="Ice cream scoop">
                    </figure>
                    <figure class="gallery__item">
                        <img class="image" src="${IceCream6}" alt="Ice cream with waffle inside cup">
                    </figure>
                    <figure class="gallery__item">
                        <img class="image" src="${IceCream7}" alt="Ice cream with American flag and decorations">
                    </figure>
                    <figure class="gallery__item">
                        <img class="image" src="${IceCream8}" alt="Demogorgan-inspired strawberry ice cream">
                    </figure>
                </div>
            </div>`;

        this.discoverSection.insertAdjacentHTML("beforeend", content);
        this.container.appendChild(this.discoverSection);
    }

    addCustomerContent() {
        const carousel = new Carousel();
        const blockName = carousel.getSlideBlockName();

        function getSlideContent(slideTitle, slideImage) {
            return `
                <div class="${blockName}__photo">
                    <img class="image" src="${slideImage}" alt="Scoops Ahoy customer">
                </div>
                <div class="${blockName}__text">
                    <blockquote class="${blockName}__quote">
                        <p class="light-text">I have been visiting Scoops Ahoy for over a year now and I love it! I can't imagine life without
                        their amazing ice cream. It's the best, and the customer service is great.</p>
                    </blockquote>
                    <span class="${blockName}__customer">${slideTitle}</span>
                </div>`;
        }

        const customerSlides = [
            getSlideContent("Erica Sinclair", Customer1),
            getSlideContent("Jane Hopper (Eleven)", Customer2),
            getSlideContent("Max Mayfield", Customer3),
        ];

        customerSlides.forEach((slide) => carousel.addSlide(slide));
        carousel.moveToFirstSlide();

        const content = `
            <div class="customer__text">
                <span class="customer__logo">${getLogoIcon()}</span>
                <h2 class="customer__heading">Our Customers Say</h2>
            </div>`;

        this.customerSection.insertAdjacentHTML("beforeend", content);
        this.customerSection.appendChild(carousel.render());
        this.container.appendChild(this.customerSection);
    }

    /**
     * Return a container with the home page content.
     * @returns HTMLElement
     */
    render() {
        return this.container;
    }
}
