let titles = document.querySelectorAll('.title');
let background = document.querySelector('#background');
let currentIndex = -1; //initialize below valid index to start cycle from first element.

document.addEventListener('DOMContentLoaded', () => {
    //fetch all elements with class title and the background element
    const titles = document.querySelectorAll('.title');
    const background = document.getElementById('background');
    let currentIndex = -1; //reset currentIndex for the image cycling

    function changeBackground(index) {
        const imagePath = titles[index].getAttribute('data-image');
        gsap.to(background, {
            duration: 1,
            opacity: 0.5, // Reduce opacity to half during transition
            ease: 'power1.inOut', // Use an easing function for a smooth transition
            onComplete: () => { // After fading out, change the image and fade back in
                background.style.backgroundImage = `url(${imagePath})`;
                gsap.to(background, {
                    duration: 1,
                    opacity: 1, // Restore full opacity
                    ease: 'power1.inOut'
                }); //end of background
            }
        });
    } //end of changeBackground

    titles.forEach((title, index) => {
        title.addEventListener('mouseenter', () => {
            const imagePath = title.getAttribute('data-image');
        }); //switches to new image based on hover
    }); //end of mouseenter event listener for image change

    
    document.querySelector('.titles-container').addEventListener('mouseleave', () => {
        gsap.to(background, { duration: 1, opacity: 0, ease: 'power1.out' });
    }); //end of mouseleave event listener to shift away
}); //end of DOMContentLoaded Event Listener

// document.querySelector('.titles-container').addEventListener('mouseleave', () => {
//     gsap.to(background, {
//         duration: 0.5,
//         opacity: 0,
//         ease: 'power1.out'
//     });
//     console.log('Mouse left the titles container, fading out background.');
// });
// console.log for testing

document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.title');
    let activeBackground = document.getElementById('background1');
    let inactiveBackground = document.getElementById('background2');
    
    // Function to initialize and play a video
    function initVideo(videoElement, videoPath) {
        videoElement.src = videoPath;
        videoElement.play();
        videoElement.style.opacity = 1;
    } //end of initVideo, which makes video opaque for viewing
    
    function changeBackground(videoPath) {
        [activeBackground, inactiveBackground] = [inactiveBackground, activeBackground]; //swap the currently active and inactive video elements
        
        activeBackground.src = videoPath;
        activeBackground.play();
        gsap.to(activeBackground, { duration: 1, opacity: 1 }); //start playing new video and THEN fade in, so fade doesn't mess up playback

        gsap.to(inactiveBackground, { duration: 1, opacity: 0 }); //fade out old video

    } //end of changeBackground, which changes background (wow!)
    
    initVideo(activeBackground, titles[0].getAttribute('data-video')); //initializes first video on page load
    
    titles.forEach(title => {
        title.addEventListener('mouseenter', () => {
            const videoPath = title.getAttribute('data-video');
            changeBackground(videoPath);
        });
    }); //end of events for changes based on hover
});

