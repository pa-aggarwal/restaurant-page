import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

/**
 * Return the icon inside Scoop's Ahoy's restaurant logo.
 * @returns string
 */
export const getLogoIcon = function () {
    return `<span class="logo-icon"><i class="fa-solid fa-anchor"></i></span>`;
};

/**
 * Return the HTML for Scoop's Ahoy's restaurant logo.
 * @param {string} blockName - The BEM block the logo is inside.
 * @returns string
 */
export const getCompanyLogo = function (blockName) {
    return `
        <div class="${blockName}__logo">
            Scoops ${getLogoIcon()} Ahoy
        </div>
    `;
};
