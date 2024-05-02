//adds event listener that runs once DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  //animation for page load -  "container" elements fade in with a slight upward movement.
  gsap.from(".container", {
      duration: 0.8,
      opacity: 0,
      y: 20,
      stagger: 0.1,  //staggers start time of animation for containers
      ease: "power1.out" 
  }); //end of ease in

  
  document.querySelectorAll(".container").forEach(container => {

      container.addEventListener('mouseenter', () => {
          //when mouse enter scale the image and the middle div up slightly
          gsap.to(container.querySelector('.image'), {scale: 1.05, duration: 0.3});
          gsap.to(container.querySelector('.middle'), {scale: 1.1, duration: 0.3});
      }); //end of mouseenter

      container.addEventListener('mouseleave', () => {
          //when mouse leave scale the image and the middle div back to normal
          gsap.to(container.querySelector('.image'), {scale: 1, duration: 0.3});
          gsap.to(container.querySelector('.middle'), {scale: 1, duration: 0.3});
      }); //end of mouse leave

  }); //end of function to add hover animations to each container

  
  gsap.registerPlugin(ScrollToPlugin);
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          let target = document.querySelector(this.getAttribute('href'));
          gsap.to(window, {duration: 1, scrollTo: {y: target, offsetY: 50}});
      });
  }); //end of ScrollToPlugin which does smooth scrolling animations.

  gsap.to('.background', {
      scrollTrigger: {
        trigger: ".film-gallery",
        scrub: true  
      },
      y: '-20%',
      ease: 'none'
  }); //end of parallax scroll effect

  
  document.querySelectorAll('.image').forEach(image => {
      gsap.from(image, {
        scrollTrigger: {
          trigger: image,
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1
      });
  }); //end of function for images fade in

  // Adds an enter animation for text elements inside each container
  document.querySelectorAll('.container').forEach(container => {
      container.addEventListener('mouseenter', () => {
          let texts = container.querySelectorAll('.text');
          texts.forEach((text, index) => {
              gsap.fromTo(text, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.5, delay: index * 0.2 });
          });//end of texts.forEach
      });//end of containter event listener
  }); //enter animation for text in the containers

  gsap.config({
      nullTargetWarn: false
  });

  document.querySelectorAll('.container').forEach(container => {
      let tl = gsap.timeline({
          paused: true,
          defaults: { duration: 0.3, ease: "power2.inOut" }
      });

      tl.to(container, { scale: 1.1 })
        .to(container.querySelector('.preview'), { opacity: 1, display: 'block' }, 0)
        .to(container.querySelector('.image'), { opacity: 0 }, 0);

      container.addEventListener('mouseenter', () => tl.play());
      container.addEventListener('mouseleave', () => tl.reverse());
      
  });  //end of timeline animations for mouseenter and mouseleave events on each container

}); //end of full event listener
