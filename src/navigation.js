import { getCompanyLogo } from "./logo";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

const inTabletMode = () => window.innerWidth <= 950;

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
                    <li class="navbar__item" id=${about}>About</li>
                    <li class="navbar__item" id=${menu}>Menu</li>
                    <li class="navbar__item" id=${contact}>Contact</li>
                </ul>
            </div>
            <div class="navbar__buttons">
                <button type="button" class="button button--primary">Special Offers</button>
            </div>
            <div class="navbar__menu hide">
                <button type="button" class="navbar__menu-button">
                    <span class="navbar__hamburger"></span>
                </button>
            </div>
        </nav>`;

    container.id = "navbar-container";
    container.classList.add("navbar-container");
    container.insertAdjacentHTML("beforeend", navigationBar);
    return container;
};

/**
 * Show or hide the navigation menu in tablet mode.
 */
export const toggleMenu = function () {
    if (!inTabletMode()) {
        return;
    }
    const mobileNavbar = document.querySelector(".navbar__mobile");
    const navbarMenu = document.querySelector(".navbar__menu");
    mobileNavbar.classList.toggle("hide");
    navbarMenu.classList.toggle("active");
};

/**
 * Hide navigation bar links and buttons in tablet mode and show
 * when the hamburger menu is clicked by the user.
 */
export const collapseNavOnMobile = function () {
    if (!inTabletMode()) {
        return;
    }

    const mobileNavbar = document.createElement("div");
    mobileNavbar.classList.add("navbar__mobile");
    mobileNavbar.classList.add("hide");

    const navbarLinks = document.querySelector(".navbar__links");
    const navbarButtons = document.querySelector(".navbar__buttons");
    mobileNavbar.appendChild(navbarLinks);
    mobileNavbar.appendChild(navbarButtons);

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.classList.add("navbar__close-button");
    closeButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    mobileNavbar.appendChild(closeButton);

    const mainNavbar = document.getElementById("navbar");
    mainNavbar.appendChild(mobileNavbar);

    const navbarMenu = document.querySelector(".navbar__menu");
    navbarMenu.classList.remove("hide");

    const menuButton = document.querySelector(".navbar__menu-button");
    menuButton.addEventListener("click", toggleMenu);
    closeButton.addEventListener("click", toggleMenu);
};

/**
 * Add animation styles to the navigation bar when the scroll event
 * fires on the window object.
 */
export const animateNavigationBarOnScroll = function () {
    const navbarContainer = document.querySelector(".navbar-container");
    const threshold = 10;
    let scrolling = false;

    function scrollHandler() {
        if (!scrolling) {
            return;
        }

        const scrollPositionY = Math.round(this.scrollY);
        if (scrollPositionY >= threshold) {
            navbarContainer.classList.add("navbar-container--scrolled");
        } else {
            navbarContainer.classList.remove("navbar-container--scrolled");
        }
    }

    window.addEventListener("scroll", () => {
        scrolling = true;
    });

    // Use throttling for expensive dom manipulation operations
    window.setInterval(scrollHandler, 100);
};
