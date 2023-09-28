import { HomePage } from "./home";
import { AboutPage } from "./about";
import { MenuPage } from "./menu";
import { ContactPage } from "./contact";
import { Footer } from "./footer";
import {
    animateNavigationBarOnScroll,
    collapseNavOnMobile,
    getNavigationBar,
    toggleMenu,
    tabIDs,
} from "./navigation";
import "./assets/styles.css";

const container = document.getElementById("content");

const homeDescription =
    "A nautical-themed ice cream parlour located in Starcourt Mall " +
    "of Hawkins, Indiana. We offer dozens of unique and " +
    "limited edition flavours only available at this location.";

const tabPages = {};
tabPages[tabIDs.home] = new HomePage(homeDescription);
tabPages[tabIDs.about] = new AboutPage();
tabPages[tabIDs.menu] = new MenuPage();
tabPages[tabIDs.contact] = new ContactPage();

const defaultTab = tabPages[tabIDs.home];
const navigationBar = getNavigationBar();

container.appendChild(navigationBar);
container.appendChild(defaultTab.render());

collapseNavOnMobile();
animateNavigationBarOnScroll();

const footer = new Footer();
container.appendChild(footer.render());

// Tab elements created by navigation bar function
const homeTab = document.getElementById(tabIDs.home);
const aboutTab = document.getElementById(tabIDs.about);
const menuTab = document.getElementById(tabIDs.menu);
const contactTab = document.getElementById(tabIDs.contact);

function switchTab() {
    const newTabContainer = tabPages[this.id].render();
    const oldTabContainer = container.firstChild.nextSibling;
    container.replaceChild(newTabContainer, oldTabContainer);
    window.scrollTo(0, 0);
    toggleMenu();
}

homeTab.addEventListener("click", switchTab);
aboutTab.addEventListener("click", switchTab);
menuTab.addEventListener("click", switchTab);
contactTab.addEventListener("click", switchTab);
