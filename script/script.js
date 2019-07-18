
//Fendi Animation
var title = document.getElementById('titleFendi')
var subtitle = document.getElementById('subtitleFendi')

TweenMax.from(title, .8, {x: 500, delay:.3, ease: Power4.easeOut})
TweenMax.from(subtitle, 1, {x: -500, delay:.3, ease: Power4.easeOut})
TweenMax.from('#fendiMainImg', 1, {y: 700, delay:.6, ease: Power4.easeOut})

var myAnimation = new TimelineMax();
var myAnimation2 = new TimelineMax();

myAnimation.from("#beginning-h1", 0.5, {y: -500});
myAnimation2.from("#beginning-img", 0.5, {x: 400});

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: "#beginnerTrigger",
  triggerHook: .1,
  offset: 0,
  duration: 300,
  opacity:1
}).setTween(myAnimation).addTo(controller)

//Portfolio Animation
TweenMax.to('.header-wrapper h1', 1,{x: 0, opacity: 1})


//Work in Progres Pages
function workInProgress() {
  alert('Work in progres page')
}

