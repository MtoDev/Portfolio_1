gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.content', {   // move content section down and fade it in
    y: '-30%',
    opacity: '0',
    duration: 1.5,
    ease: Power4.easeOut
});

tl.from('.stagger1', { // all elements with stagger1 class will come into view one after another with a delay (specified with the stagger parameter)
    opacity: 0,
    y: -50,
    stagger: 0.3,
    duration: 2,
    ease: Power4.easeOut
},
"-=1.5" // offest something
);

tl.from('.hero-design', {
    opacity: 0,
    y: 50,
    ease: Power4.easeOut,
    duration: 2
},
"-=1.85");

gsap.from(".square-anim", {
    stagger: 0.2,
    scale: 0.1,
    duration: 1,
    ease: Back.easeOut.config(1.7)
})


// scroll based animations

gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',    // any element with this css class, when the top of the element reaches the bottom of the scroll bar it will animate something
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3
});

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: '.transition3',    // any element with this css class, when the top of the element reaches the center of the scroll bar it will animate something
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.6
});