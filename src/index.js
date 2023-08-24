import { HomePage } from "./home";
import { getNavigationBar } from "./navigation";
import "./assets/styles.css";

const container = document.getElementById("content");

const homePage = new HomePage();
const homeContent = homePage.render({
    heroText:
        "A nautical-themed ice cream parlour located in Starcourt Mall " +
        "of Hawkins, Indiana. We offer dozens of unique flavours as " +
        "well as limited edition flavours only available at this location.",
});

const heroContainer = homePage.getHeroContainer();
const navigationBar = getNavigationBar();

heroContainer.insertAdjacentElement("afterbegin", navigationBar);
container.appendChild(homeContent);
