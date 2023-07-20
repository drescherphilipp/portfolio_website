$(function () { // wait for document ready

    function animateProgrammingSkillBars() {
        TweenMax.fromTo("#skill_c", 2, { width: "0%" }, { width: "60%" });
        TweenMax.fromTo("#skill_cpp", 2, { width: "0%" }, { width: "60%" });
        TweenMax.fromTo("#skill_cs", 2, { width: "0%" }, { width: "80%" });
        TweenMax.fromTo("#skill_python", 2, { width: "0%" }, { width: "90%" });
    }

    function animateEngineSkillBars() {
        TweenMax.fromTo("#skill_unreal", 2, { width: "0%" }, { width: "10%" });
        TweenMax.fromTo("#skill_unity", 2, { width: "0%" }, { width: "70%" });
    }

    function animateMiscSkillBars() {
        TweenMax.fromTo("#skill_fmod", 2, { width: "0%" }, { width: "70%" });
        TweenMax.fromTo("#skill_ableton", 2, { width: "0%" }, { width: "90%" });
        TweenMax.fromTo("#skill_blender", 2, { width: "0%" }, { width: "40%" });
        TweenMax.fromTo("#skill_photoshop", 2, { width: "0%" }, { width: "50%" });
    }

    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo("#panelCartridge", 1, {y: "-150%"}, {y: "0%", ease: Linear.easeNone})
        .fromTo("#panelGameboy", 1, {scale: "1"}, {scale: "30", ease: Linear.easeNone, onComplete: function() {console.log("complete")}})
        .fromTo("#panel0", 1, {y: "150%"}, {y: "0%", ease: Linear.easeNone, onComplete: function() {(new Typewriter(document.getElementById('header_name'), { loop: false, autoStart: true, cursor: "■", delay: 1})).typeString("Philipp Drescher");} })
        .fromTo("#panel1", 1, {y: "150%"}, {y: "0%", ease: Linear.easeNone})
        .fromTo("#panel2", 1, {y: "150%"}, {y: "0%", ease: Linear.easeNone, onComplete: function() {(new Typewriter(document.getElementById('header_portfolio'), { loop: false, autoStart: true, cursor: "■", delay: 1})).typeString("Portfolio");} })
        .fromTo("#panelAltCtrl", 1, {x: "150%"}, {x: "0%", ease: Linear.easeNone})
        .fromTo("#panelEP", 1, {x: "150%"}, {x: "0%", ease: Linear.easeNone})
        .fromTo("#panelTeardown", 1, {x: "150%"}, {x: "0%", ease: Linear.easeNone})
        .fromTo("#panelViewer", 1, {x: "150%"}, {x: "0%", ease: Linear.easeNone})
        .fromTo("#skills0", 1, {y: "150%"}, {y: "0%", ease: Linear.easeNone, onComplete: function() {(new Typewriter(document.getElementById('header_skills'), { loop: false, autoStart: true, cursor: "■", delay: 1})).typeString("Skills");} })
        .fromTo("#skillsProgramming", 1, {x: "150%"}, {x: "0%", ease: Linear.easeNone, onComplete: animateProgrammingSkillBars})
        .fromTo("#skillsGameEngines", 1, {x: "150%"}, {x: "0%", ease: Linear.easeNone, onComplete: animateEngineSkillBars})
        .fromTo("#skillsMisc", 1, {x: "150%"}, {x: "0%", ease: Linear.easeNone, onComplete: animateMiscSkillBars})
        .fromTo("#contact0", 1, {y: "150%"}, {y: "0%", ease: Linear.easeNone, onComplete: function() {(new Typewriter(document.getElementById('header_contact'), { loop: false, autoStart: true, cursor: "■", delay: 1})).typeString("Contact");} })
        .fromTo("#contact1", 1, {x: "150%"}, {x: "0%", ease: Linear.easeNone})
        ; 


    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "1800%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);
});