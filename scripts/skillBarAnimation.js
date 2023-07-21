$(function () { // wait for document ready
    var controller = new ScrollMagic.Controller();

    // header_skills
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