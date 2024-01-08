const gsapAndScrollTrigger = () => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true },
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
};

gsapAndScrollTrigger();


const fixed = document.querySelector('#fixed-image');

const elemContainer = document.querySelector('.elem-container');

elemContainer.addEventListener('mouseenter', () => {
    fixed.style.display = 'block';
});
elemContainer.addEventListener('mouseleave', () => {
    fixed.style.display = 'none';
});

const elems = document.querySelectorAll('.elem');

elems.forEach((elem) => {
    elem.addEventListener("mouseenter",() => {
        let img = elem.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${img})`
    })
})