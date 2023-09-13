export class Carousel {
    constructor() {
        this.container = document.createElement("div");
        this.container.classList.add("carousel");

        this.slider = document.createElement("div");
        this.slider.classList.add("slider");

        this.sliderDots = document.createElement("div");
        this.sliderDots.classList.add("dots");

        this.backButton = document.createElement("button");
        this.nextButton = document.createElement("button");
        this.backButton.classList.add("carousel__button", "back");
        this.nextButton.classList.add("carousel__button", "next");

        this.backButton.innerHTML = "&#10094;";
        this.nextButton.innerHTML = "&#10095;";

        const backEventHandler = this.decrementSlide.bind(this);
        const nextEventHandler = this.incrementSlide.bind(this);
        this.backButton.addEventListener("click", backEventHandler);
        this.nextButton.addEventListener("click", nextEventHandler);

        this.container.appendChild(this.slider);
        this.container.appendChild(this.backButton);
        this.container.appendChild(this.nextButton);
        this.container.appendChild(this.sliderDots);

        this.slideIndex = 0;
        this.slides = [];
        this.dots = [];
    }

    incrementSlide() {
        this.slideIndex += 1;
        this.moveToSlide(this.slideIndex);
    }

    decrementSlide() {
        this.slideIndex -= 1;
        this.moveToSlide(this.slideIndex);
    }

    currentSlide(n) {
        this.slideIndex = n;
        this.moveToSlide(this.slideIndex);
    }

    moveToSlide(slideNumber) {
        if (slideNumber >= this.slides.length) {
            this.slideIndex = 0;
        } else if (slideNumber < 0) {
            this.slideIndex = this.slides.length - 1;
        }

        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].classList.add("hide");
        }

        for (let i = 0; i < this.dots.length; i++) {
            this.dots[i].classList.remove("dot--active");
        }

        this.slides[this.slideIndex].classList.remove("hide");
        this.dots[this.slideIndex].classList.add("dot--active");
    }

    /**
     * Show the first slide of this carousel.
     */
    moveToFirstSlide() {
        this.moveToSlide(0);
    }

    /**
     * Add another slide with the given content to this carousel.
     * @param {string} slideContent - HTML content to put on the new slide.
     */
    addSlide(slideContent) {
        const slide = document.createElement("div");
        slide.classList.add(this.getSlideBlockName());
        slide.insertAdjacentHTML("beforeend", slideContent);
        this.slides.push(slide);
        this.slider.appendChild(slide);

        const dot = document.createElement("span");
        const dotHandler = this.currentSlide.bind(this, this.dots.length);
        dot.classList.add("dot");
        dot.addEventListener("click", dotHandler);
        this.dots.push(dot);
        this.sliderDots.appendChild(dot);
    }

    /**
     * Return the CSS block name for each slide of this carousel.
     * @returns string
     */
    getSlideBlockName() {
        return "slide";
    }

    /**
     * Return the container element for this carousel.
     * @returns HTMLElement
     */
    render() {
        return this.container;
    }
}
