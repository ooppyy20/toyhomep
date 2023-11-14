var tl = anime.timeline({
    targets: '.chapstick',
    delay: function(el, i) { return i * 200 },
    duration: 500, // Can be inherited
    easing: 'easeOutExpo', // Can be inherited
    direction: 'alternate', // Is not inherited
    loop: true // Is not inherited
  });
  
  tl
  .add({
    translateX: 250,
    // override the easing parameter
    easing: 'spring',
  })
  .add({
    // override the targets parameter
    targets: '.chapstick',
    rotate: 20
  })
  .add({
    translateX: 0,
    scale: 1
  });
