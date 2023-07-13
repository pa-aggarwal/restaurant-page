import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

/**
 * Return the HTML markup for the home page.
 * @param {string} imageSrc - The value for an image's src attribute.
 * @param {string} descriptionText - Text to display in the hero section.
 * @returns string
 */
export const createHomePageContent = function ({ imageSrc, descriptionText }) {
    return `<h1>Scoops
    <span class="brand-anchor">
        <i class="fa-solid fa-anchor"></i>
    </span>Ahoy</h1>
    <h2>Ice Cream Parlour</h2>
    <img src="${imageSrc}" alt="Scoops Ahoy restaurant">
    <p>${descriptionText}</p>`;
};
