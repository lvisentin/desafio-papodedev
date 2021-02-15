let timeLine = new TimelineMax();

document.addEventListener('DOMContentLoaded', () => {
    timeLine
        .fromTo('.profile-img', 1,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.7')
        .fromTo('.profile-text', 1,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.7')
        .fromTo('.social-links', 1,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.7')
        .fromTo('.notPosts', 1,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.7');
});