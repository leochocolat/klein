$('.content').click(function(e){
  setTimeout(function(){
    window.location.href = '../index.html';
  },1000);

  let ajax = new TimelineMax();

  ajax.add([
    TweenMax.fromTo( '.text', 1.5, {autoAlpha:1, y:0}, {autoAlpha:0, y:"-50px", ease: Power4.easeInOut}),
    TweenMax.fromTo( '.block_title', 1.5, {autoAlpha:1, y:0}, {autoAlpha:0, y:"-50px", ease: Power4.easeInOut}),
  ])

});

$('body').click(function(e){

  let cursorGrow = new TimelineMax();

  cursorGrow.add(TweenMax.to(".circle-cursor", .1, {width:"30px", height:"30px", ease: Power2.easeOut}),)
            .add(TweenMax.to(".circle-cursor", .2, {width:"20px", height:"20px", ease: Power2.easeOut}),)


});

$('.block_title').click(function(e){

  setTimeout(function(){
      window.location.href = '../index.html';
    },1000);

    let ajax = new TimelineMax();

    ajax.add([
      TweenMax.to( '.before', 1, {x:0, ease: Power4.easeInOut}),
      TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5, y:0}, {autoAlpha:0, y:"-50px", ease: Power4.easeInOut}),
      TweenMax.fromTo( '.block_title', 1.5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut})
    ])

});

// $('.about').click(function(e){
//   setTimeout(function(){
//     window.history.back();
//   },1000);
//
//   let ajax = new TimelineMax();
//
//   ajax.add([
//     TweenMax.fromTo( '.text', 1.5, {autoAlpha:1, y:0}, {autoAlpha:0, y:"-50px", ease: Power4.easeInOut}),
//   ])
//
// });

//LOADER

function codeAddress() {
  setTimeout(function(){
    $(".loader").addClass("blink");
    console.log('blink');
  }, 1000);

  // let ajax = new TimelineMax();
  //
  //   ajax.add([
  //     TweenMax.fromTo( '.title', 1, {autoAlpha:0}, {autoAlpha:.5, ease: Power4.easeInOut}),
  //   ])
}
window.onload = codeAddress;


$("body").mousemove(function(e) {

  // console.log("mouse move");

  let mouseX = e.pageX;
  let mouseY = e.pageY;


  // let mouseYCenter = e.pageY - innerHeight/2;

  // Name following cursor animation --------------------------------------
  let movingDelay = new TimelineMax();

  movingDelay.add([
    TweenMax.fromTo(".circle-cursor", .5, {autoAlpha:1, css:{position:"fixed"}}, {left: mouseX, top: mouseY, ease: Power2.easeOut}, 0.1),
    TweenMax.fromTo(".text-cursor", 1, {autoAlpha:1, css:{position:"fixed"}}, {left: mouseX, top: mouseY, autoAlpha:0, ease: Power2.easeOut}, 0.5),
  ])


});

//MOUSE MOVE ON WORDS

$('.word1').mousemove(function(e) {
  let mouseXCenter = e.pageX - innerWidth/2;
  let gradient = new TimelineMax();
  gradient.add([
    TweenMax.to(".word1", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])
});

$('.word2').mousemove(function(e) {
  let mouseXCenter = e.pageX - innerWidth/2;
  let gradient2 = new TimelineMax();
  gradient2.add([
    TweenMax.to(".word2", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])
});

$('.word3').mousemove(function(e) {
  let mouseXCenter = e.pageX - innerWidth/2;
  let gradient3 = new TimelineMax();
  gradient3.add([
    TweenMax.to(".word3", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])
});

$('.word4').mousemove(function(e) {
  let mouseXCenter = e.pageX - innerWidth/2;
  let gradient4 = new TimelineMax();
  gradient4.add([
    TweenMax.to(".word4", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])
});


$('.word5').mousemove(function(e) {
  let mouseXCenter = e.pageX - innerWidth/2;
  let gradient5 = new TimelineMax();
  gradient5.add([
    TweenMax.to(".word5", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])
});

$('.word6').mousemove(function(e) {
  let mouseXCenter = e.pageX - innerWidth/2;
  let gradient6 = new TimelineMax();
  gradient6.add([
    TweenMax.to(".word6", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])
});


//MOUSE LEAVE


$('.word1').mouseleave(function(e){
  let gradientRestart1 = new TimelineMax();
  gradientRestart1.add([
    TweenMax.to(".word1", 2, {left: '-100%', ease: Power2.easeOut, delay:.5}),
  ])
});

$('.word2').mouseleave(function(e){
  let gradientRestart2 = new TimelineMax();
  gradientRestart2.add([
    TweenMax.to(".word2", 2, {left: '-100%', ease: Power2.easeOut, delay:.5}),
  ])
});

$('.word3').mouseleave(function(e){
  let gradientRestart3 = new TimelineMax();
  gradientRestart3.add([
    TweenMax.to(".word3", 2, {left: '-100%', ease: Power2.easeOut, delay:.5}),
  ])
});

$('.word4').mouseleave(function(e){
  let gradientRestart4 = new TimelineMax();
  gradientRestart4.add([
    TweenMax.to(".word4", 2, {left: '-100%', ease: Power2.easeOut, delay:.5}),
  ])
});

$('.word5').mouseleave(function(e){
  let gradientRestart5 = new TimelineMax();
  gradientRestart5.add([
    TweenMax.to(".word5", 2, {left: '-100%', ease: Power2.easeOut, delay:.5}),
  ])
});

$('.word6').mouseleave(function(e){
  let gradientRestart6 = new TimelineMax();
  gradientRestart6.add([
    TweenMax.to(".word6", 2, {left: '-100%', ease: Power2.easeOut, delay:.5}),
  ])
});


$('.word1').mousemove(function(e) {

  let mouseXCenter = e.pageX - innerWidth/2;

  let gradient = new TimelineMax();

  gradient.add([
    TweenMax.to(".word1", .5, {left: mouseXCenter, ease: Power2.easeOut}),
  ])

});




$('.page-home').click(function(e){

    setTimeout(function(){
      window.location.href = 'about/index.html';
    },1500);

    // $(".page-home").toggleClass("page-change");

    renderer.setClearColor(0xffff00);

    let ajax = new TimelineMax();

    ajax.add([
      TweenMax.to("h1", 1, {autoAlpha:0, ease: Power4.easeInOut}),
      TweenMax.staggerFromTo("#myCanvas", 2, {autoAlpha:1}, {autoAlpha:0, scaleX:5, scaleY:5 , ease: Power4.easeInOut}),
    ])

});

$('.word1').click(function(){
  setTimeout(function(){
    window.location.href = '../print/index.html';
  },1500);

  let ajax = new TimelineMax();

  ajax.add([
    TweenMax.to( '.before', 1, {x:0, ease: Power4.easeInOut}),
    TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5, y:0}, {autoAlpha:0, y:"-50px", ease: Power4.easeInOut}),
    TweenMax.fromTo( '.block_title', 1.5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut})
  ])



});

$('.word2').click(function(){
  setTimeout(function(){
    window.location.href = '../copyrights/index.html';
  },1500);

  let ajax = new TimelineMax();

  ajax.add([
    TweenMax.to( '.before', 1, {x:0, ease: Power4.easeInOut}),
    TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5, y:0}, {autoAlpha:0, y:"-50px", ease: Power4.easeInOut}),
    TweenMax.fromTo( '.block_title', 1.5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut})
  ])

});

$('.word3').click(function(){
  setTimeout(function(){
    window.location.href = '../pigments/index.html';
  },1500);

  let ajax = new TimelineMax();

  ajax.add([
    TweenMax.to( '.before', 1, {x:0, ease: Power4.easeInOut}),
    TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5, y:0}, {autoAlpha:0, y:"-50px", ease: Power4.easeInOut}),
    TweenMax.fromTo( '.block_title', 1.5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut})
  ])
});

$('.word4').click(function(){
  setTimeout(function(){
    window.location.href = '../uniqueness/index.html';
  },1500);

  let ajax = new TimelineMax();

  ajax.add([
    TweenMax.to( '.before', 1, {x:0, ease: Power4.easeInOut}),
    TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5, y:0}, {autoAlpha:0, y:"-50px", ease: Power4.easeInOut}),
    TweenMax.fromTo( '.block_title', 1.5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut})
  ])

});

$('.word5').click(function(){
  setTimeout(function(){
    window.location.href = '../monochrome/index.html';
  },1500);

  let ajax = new TimelineMax();

  ajax.add([
    TweenMax.to( '.before', 1, {x:0, ease: Power4.easeInOut}),
    TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5, y:0}, {autoAlpha:0, y:"-50px", ease: Power4.easeInOut}),
    TweenMax.fromTo( '.block_title', 1.5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut})
  ])
});

$('.word6').click(function(){
  setTimeout(function(){
    window.location.href = '../anthropometry/index.html';
  },1500);

  let ajax = new TimelineMax();

  ajax.add([
    TweenMax.to( '.before', 1, {x:0, ease: Power4.easeInOut}),
    TweenMax.fromTo( '.list', 1.5, {autoAlpha:.5, y:0}, {autoAlpha:0, y:"-50px", ease: Power4.easeInOut}),
    TweenMax.fromTo( '.block_title', 1.5, {autoAlpha:1}, {autoAlpha:0, ease: Power4.easeInOut})
  ])
});


//SCROLLMAGIC CONTENT PAGE
var controller = new ScrollMagic.Controller();


// let intro = new TimelineMax();
//
// intro.add([
//   TweenMax.fromTo('.paragraphe', 1,{autoAlpha:0, y:"100px"} , {autoAlpha:1, y:0, ease: Power4.easeInOut})
// ])

// Create scene
var myScene = new ScrollMagic.Scene({
    triggerElement: ".content",
    triggerHook: 0
})
.setClassToggle(".paragraphe", "animOn")
.addTo(controller);

var falling = new TimelineMax();

falling.add(TweenMax.to(".falling", 1, {opacity: .6, y:"-60%" , ease: Linear.easeOut}),);
// .add(TweenMax.to(".falling", 1, {opacity: 0.0, ease: Linear.easeOut}),);


var myScene = new ScrollMagic.Scene({
    triggerElement: ".section-vide",
    duration: '1000%',
    triggerHook: .5
})
.setTween(falling)
.addTo(controller);
