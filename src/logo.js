import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

/**
 * Return the HTML for Scoop's Ahoy's restaurant logo.
 * @param {string} blockName - The BEM block the logo is inside.
 * @returns string
 */
export const getCompanyLogo = function (blockName) {
    return `
        <div class="${blockName}__logo">
            Scoops <span class="logo-icon"><i class="fa-solid fa-anchor"></i></span> Ahoy
        </div>
    `;
};
