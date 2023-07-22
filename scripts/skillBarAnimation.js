$(function () { // wait for document ready
    var trigger_pos = 0.7;
    var animationDuration = 2;
    var controller = new ScrollMagic.Controller();

    // PROGRAMMING
    new ScrollMagic.Scene({triggerElement: '#header_programming', triggerHook: trigger_pos})
    .setTween(TweenMax.fromTo('#skill_c', animationDuration, { width: '0%' }, { width: '50%' }))
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: '#header_programming', triggerHook: trigger_pos})
    .setTween(TweenMax.fromTo('#skill_cpp', animationDuration, { width: '0%' }, { width: '60%' }))
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: '#header_programming', triggerHook: trigger_pos})
    .setTween(TweenMax.fromTo('#skill_cs', animationDuration, { width: '0%' }, { width: '80%' }))
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: '#header_programming', triggerHook: trigger_pos})
    .setTween(TweenMax.fromTo('#skill_python', animationDuration, { width: '0%' }, { width: '90%' }))
    .addTo(controller);


    // ENGINES
    new ScrollMagic.Scene({triggerElement: '#header_engines', triggerHook: trigger_pos})
    .setTween(TweenMax.fromTo('#skill_unreal', animationDuration, { width: '0%' }, { width: '15%' }))
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: '#header_engines', triggerHook: trigger_pos})
    .setTween(TweenMax.fromTo('#skill_unity', animationDuration, { width: '0%' }, { width: '80%' }))
    .addTo(controller);


    // MISC
    new ScrollMagic.Scene({triggerElement: '#header_misc', triggerHook: trigger_pos})
    .setTween(TweenMax.fromTo('#skill_fmod', animationDuration, { width: '0%' }, { width: '70%' }))
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: '#header_misc', triggerHook: trigger_pos})
    .setTween(TweenMax.fromTo('#skill_ableton', animationDuration, { width: '0%' }, { width: '90%' }))
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: '#header_misc', triggerHook: trigger_pos})
    .setTween(TweenMax.fromTo('#skill_blender', animationDuration, { width: '0%' }, { width: '40%' }))
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: '#header_misc', triggerHook: trigger_pos})
    .setTween(TweenMax.fromTo('#skill_photoshop', animationDuration, { width: '0%' }, { width: '60%' }))
    .addTo(controller);


});