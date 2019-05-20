// $(function() {
//   var randomColor = Math.floor(Math.random() * 16777215).toString(16)

//   $('body').css({
//     backgroundColor: '#' + randomColor,
//   })

//   $('#colorcode').text('#' + randomColor)
// })
$(
  function() {
    testFunction()
  },

  function testFunction() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16)

    $('#background-text').css({
      color: '#' + randomColor,
    })
  }
)
