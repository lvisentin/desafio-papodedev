document.addEventListener('DOMContentLoaded', () => {
    console.log('ahahah')
    document.querySelector('.posts-section').style.height = '0%';
    let timeLine = new TimelineMax();

    timeLine
        .fromTo('.bg-loader', 1,
            { width: '100%' },
            { width: '0%', delay: 5, ease: Expo.easeInOut })
        .fromTo('.posts-section', 1,
            { height: '0%' },
            { height: '100%', ease: Expo.easeInOut }, '-=0.7')
        .fromTo('.profile-img', 1,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.7')
        .fromTo('.profile-text', 1,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.7')
        .fromTo('.social-links', 1,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.7')
        .fromTo('.posts-section', 1,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, ease: Expo.easeInOut }, '-=0.7')
    //     timeLine

});