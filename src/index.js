import { createHomePageContent } from "./home";
import RestaurantImage from "./images/restaurant.jpg";

const container = document.getElementById("content");
const homeContent = createHomePageContent({
    imageSrc: RestaurantImage,
    descriptionText:
        "A nautical-themed ice cream parlour located in Starcourt Mall " +
        "of Hawkins, Indiana. We offer dozens of unique flavours as " +
        "well as limited edition flavours only available at this location.",
});

container.insertAdjacentHTML("beforeend", homeContent);
