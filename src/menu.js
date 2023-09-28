import { getCompanyLogo, getLogoIcon } from "./logo";
import MenuItem1 from "./images/menu-01.jpg";
import MenuItem2 from "./images/menu-02.jpg";
import MenuItem3 from "./images/menu-03.jpg";
import MenuItem4 from "./images/menu-04.jpg";
import MenuItem5 from "./images/menu-05.jpg";

export class MenuPage {
    constructor() {
        this.container = document.createElement("div");
        this.container.id = "menu";
        this.container.classList.add("menu");

        this.heroSection = document.createElement("section");
        this.heroSection.classList.add("hero__container");

        this.menuSection = document.createElement("section");
        this.menuSection.classList.add("menu__container");

        this.addContent();
        this.addMenuItemsContent();
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

    addMenuItemsContent() {
        const menuItemDescription =
            "Lorem ipsum dolor sit amet, consectetur " +
            "adipiscing elit, sed do eiusmod tempor incididunt ut labore.";
        const content = `
            <div class="menu__content">
                <div class="menu__text">
                    <span class="menu__logo">
                        ${getLogoIcon()}
                    </span>
                    <h2 class="menu__heading">Our Specials</h2>
                    <p class="light-text">These limited edition ice cream sundaes,
                    cones, and milkshakes are only available at this location. We
                    can accomodate those with special dietary requests for an
                    additional cost.</p>
                </div>
                <div class="menu__grid">
                    ${this.createMenuItemMarkup({
                        imageSrc: MenuItem1,
                        name: "Upside Down Sundae",
                        price: 6.99,
                        description: menuItemDescription,
                    })}
                    ${this.createMenuItemMarkup({
                        imageSrc: MenuItem2,
                        name: "U.S.S. Butterscotch Sundae",
                        price: 9.99,
                        description: menuItemDescription,
                    })}
                    ${this.createMenuItemMarkup({
                        imageSrc: MenuItem3,
                        name: "U.S.S. Butterscotch Cone",
                        price: 5.99,
                        description: menuItemDescription,
                    })}
                    ${this.createMenuItemMarkup({
                        imageSrc: MenuItem4,
                        name: "Demogorgan Sundae",
                        price: 7.99,
                        description: menuItemDescription,
                    })}
                    ${this.createMenuItemMarkup({
                        imageSrc: MenuItem5,
                        name: "U.S.S. Butterscotch Cone",
                        price: 5.99,
                        description: menuItemDescription,
                    })}
                </div>
            </div>`;

        this.menuSection.insertAdjacentHTML("beforeend", content);
        this.container.appendChild(this.menuSection);
    }

    createMenuItemMarkup({ imageSrc, name, price, description }) {
        return `
            <div class="card">
                <div class="card__image-wrapper">
                    <img class="card__image image" src="${imageSrc}" alt="${name}">
                </div>
                <div class="card__text">
                    <div class="card__title">
                        <h3 class="card__heading">${name}</h3>
                        <span class="card__price">${price}</span>
                    </div>
                    <p class="card__description light-text">${description}</p>
                </div>
            </div>`;
    }

    /**
     * Return a container with the menu page content.
     * @returns HTMLElement
     */
    render() {
        return this.container;
    }
}
