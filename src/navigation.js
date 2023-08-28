import { getCompanyLogo } from "./logo";

export const tabIDs = {
    home: "home-tab",
    about: "about-tab",
    menu: "menu-tab",
    contact: "contact-tab",
};

/**
 * Return an HTML element containing navigation elements.
 * @returns HTMLElement
 */
export const getNavigationBar = function () {
    const container = document.createElement("div");
    const companyLogo = getCompanyLogo("navbar");
    const { home, about, menu, contact } = tabIDs;
    const navigationBar = `
        <nav id="navbar" class="navbar">
            <div class="navbar__brand">
                <h2 class="navbar__heading">${companyLogo}</h2>
            </div>
            <div class="navbar__links">
                <ul class="navbar__list">
                    <li class="navbar__item" id=${home}>Home</li>
                    <li class="navbar__item" id=${about}>About Us</li>
                    <li class="navbar__item" id=${menu}>Menu</li>
                    <li class="navbar__item" id=${contact}>Contact</li>
                </ul>
            </div>
            <div class="navbar__buttons">
                <button>Special Offers</button>
            </div>
        </nav>
    `;

    container.id = "navbar-container";
    container.classList.add("navbar-container");
    container.insertAdjacentHTML("beforeend", navigationBar);
    return container;
};
