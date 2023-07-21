  $(function () { // wait for document ready

		// Initialize ScrollMagic controller








    var controller = new ScrollMagic.Controller();


		// Select the pinned <div> element using its id "gameboy"

		// Create a ScrollMagic scene to pin the <div> for 100vh
    
		new ScrollMagic.Scene({
			triggerElement: '#gameboy',
			duration: "100%", // Pin the element for 100vh units of scrolling
			triggerHook: "onLeave", // Pin when the top of the <div> reaches the top of the viewport
		})
    .setTween("#gameboy", { scale: 20 })
		.setPin('#gameboy')
		.addTo(controller);





    var typewriter_portfolio = new Typewriter(document.getElementById('header_portfolio'), { loop: false, autoStart: true, cursor: "■"});
    var typewriter_skills = new Typewriter(document.getElementById('header_skills'), { loop: false, autoStart: true, cursor: "■"});
    var typewriter_contact = new Typewriter(document.getElementById('header_contact'), { loop: false, autoStart: true, cursor: "■"});


    var scene_portfolio = new ScrollMagic.Scene({triggerElement: '#header_portfolio', triggerHook: 1})
    .on("enter", function (event) {
      typewriter_portfolio.deleteAll();
      typewriter_portfolio.typeString('Portfolio');
    })
    .addTo(controller);

    var scene_skills = new ScrollMagic.Scene({triggerElement: '#header_skills', triggerHook: 1})
    .on("enter", function (event) {
      typewriter_skills.deleteAll();
      typewriter_skills.typeString('Skills');
    })
    .addTo(controller);


    var scene_contact = new ScrollMagic.Scene({triggerElement: '#header_contact', triggerHook: 1})
    .on("enter", function (event) {
      typewriter_contact.deleteAll();
      typewriter_contact.typeString('Contact');
    })
    .addTo(controller);
  });

  let currentAnimation;

function scrollToProgress(percentage) {
  if (currentAnimation) {
    // An animation is already running, interrupt it
    clearTimeout(currentAnimation);
  }

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollTo = (scrollableHeight * percentage) / 100;
  const currentPosition = window.pageYOffset;
  const distance = scrollTo - currentPosition;

  duration = distance / 5; // Adjust the duration as desired (in milliseconds)

  if (duration < 0) {
    duration = -duration;
  }

  if (duration <= 1) {
    return;
  }

  const increment = 10;
  let currentTime = 0;

  const animateScroll = function() {
    currentTime += increment;
    const easing = easeInOutQuad(currentTime, currentPosition, distance, duration);
    window.scrollTo(0, easing);
    if (currentTime < duration) {
      currentAnimation = setTimeout(animateScroll, increment);
    } else {
      currentAnimation = null; // Animation is complete, reset the reference
    }
  };

  animateScroll();
}

// Easing function for smooth scrolling
function easeInOutQuad(currentTime, startPosition, distance, duration) {
  currentTime /= duration / 2;
  if (currentTime < 1) {
    return distance / 2 * currentTime * currentTime + startPosition;
  }
  currentTime--;
  return -distance / 2 * (currentTime * (currentTime - 2) - 1) + startPosition;
}