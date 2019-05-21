$(function cColor() {
  console.log('cColor function')
  var colorArray = ['red', 'orange', 'green', 'blue', 'purple', 'limegreen', 'deepskyblue', 'navy', 'slategray', 'orangered', 'darkred', 'darkorange']
  var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]

  var randomColor2 = colorArray[Math.floor(Math.random() * colorArray.length)]

  $('#background-text').css({
    color: randomColor,
    // color: '#ffcb35',
    //color: 'orange',
  })
  $('.title').css({
    color: randomColor2,
    // color: '#ffcb35',
    //color: 'orange',
  })
})

// $(window).scroll(function() {
//   var theta = ($(window).scrollTop() / 500) % Math.PI
//   $('#background-text').css({ transform: 'rotate(-' + theta + 'rad)' })
// })
