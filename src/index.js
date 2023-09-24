import { HomePage } from "./home";
import { AboutPage } from "./about";
import { MenuPage } from "./menu";
import { ContactPage } from "./contact";
import { collapseNavOnMobile, getNavigationBar, tabIDs } from "./navigation";
import { Footer } from "./footer";
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
const heroContainer = defaultTab.getHeroContainer();
const navigationBar = getNavigationBar();

heroContainer.insertAdjacentElement("afterbegin", navigationBar);
container.appendChild(defaultTab.render());

collapseNavOnMobile();

const footer = new Footer();
container.appendChild(footer.render());

// Tab elements created by navigation bar function
const homeTab = document.getElementById(tabIDs.home);
const aboutTab = document.getElementById(tabIDs.about);
const menuTab = document.getElementById(tabIDs.menu);
const contactTab = document.getElementById(tabIDs.contact);

function switchTab() {
    const newTabContainer = tabPages[this.id].render();
    const heroContainer = tabPages[this.id].getHeroContainer();
    heroContainer.insertAdjacentElement("afterbegin", navigationBar);
    container.replaceChild(newTabContainer, container.firstChild);
}

homeTab.addEventListener("click", switchTab);
aboutTab.addEventListener("click", switchTab);
menuTab.addEventListener("click", switchTab);
contactTab.addEventListener("click", switchTab);
