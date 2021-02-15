let timeLine = new TimelineMax();

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.posts-section').style.display = 'none';

    timeLine
        .fromTo('.bg-loader', 1,
            { width: '100%' },
            { width: '0%', delay: 3, ease: Expo.easeInOut })
        .fromTo('.profile-img', 1,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.7')
        .fromTo('.profile-text', 1,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.7')
        .fromTo('.social-links', 1,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.7');
});


setTimeout(() => {
    document.querySelector('.posts-section').style.display = 'block';

    timeLine.fromTo('.posts-section', 1,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.7')
}, 3000);