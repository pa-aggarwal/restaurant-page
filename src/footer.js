import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/brands";

export class Footer {
    constructor() {
        this.container = document.createElement("footer");
        this.container.classList.add("footer");

        this.addContent();
    }

    addContent() {
        const content = `
            <div class="footer__body">
                <div class="footer__column">
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    In id congue lacus, eu scelerisque tortor. Maecenas sodales
                    aliquam nunc vitae malesuada.</p>
                    <div class="footer__social">
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div class="footer__column">
                    <div class="footer__item">
                        <h4>Opening Hours</h4>
                        <p>Monday-Thursday <br> 10AM - 9PM</p>
                        <p>Friday-Sunday <br> 10AM - 12AM</p>
                    </div>
                    <div class="footer__item">
                        <h4>Contact Info</h4>
                        <div class="footer__contact">
                            <address>Address:<br> Starcourt Mall, Hawkins, Indiana</address>
                            <address>Phone:<br> +1 123 456 7890</address>
                            <address>Email:<br> scoopsahoy@fake.com</address>
                        </div>
                    </div>
                </div>
                <div class="footer__column footer__column--small">
                    <h4>Quick Links</h4>
                    <div class="footer__links">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Disclaimers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p>Copyright &copy; 2023 All rights reserved | Made with ❤️ by <a href="https://github.com/pa-aggarwal">Priya Aggarwal</a></p>`;

        this.container.insertAdjacentHTML("beforeend", content);
    }

    /**
     * Return a container with the footer content.
     * @returns HTMLElement
     */
    render() {
        return this.container;
    }
}
