
//Fendi Animation
var title = document.getElementById('titleFendi')
var subtitle = document.getElementById('subtitleFendi')

//Portfolio Animation
TweenMax.to('.header-wrapper h1', 1,{x: 0, opacity: 1})


//Work in Progres Pages
function workInProgress() {
  alert('Work in progres page')
}

//Fendi animations
TweenMax.from(title, .8, {x: 500, delay:.3, ease: Power4.easeOut})
TweenMax.from(subtitle, 1, {x: -500, delay:.3, ease: Power4.easeOut})
TweenMax.from('#fendiMainImg', 1, {y: 700, delay:.6, ease: Power4.easeOut})
