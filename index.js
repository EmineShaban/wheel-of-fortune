let container = document.querySelector(".container");
let btn = document.getElementById("start");
let number = Math.ceil(Math.random() * 3000);
//  number = Math.round(number / 360) * 360 + 180
let freespins = document.getElementById("freespins");

let countOfClick = 0

let rundomIndex = []
console.log(number)

console.log(180 % 360)

console.log(freespins)

function onClick() {
  countOfClick++
  btn.disabled = true
  setTimeout(function () { btn.disabled = false; }, 5000);

  if (countOfClick < 10) {

    if (countOfClick == 2 || countOfClick == 5 || countOfClick == 9) {

      let newRundomNum = Math.ceil(Math.random() * 1000)

      let newNum = number + newRundomNum


      //LOSE
      number = Math.round(newNum / 360) * 360 + 90
      container.style.transform = "rotate(" + number + "deg)";



    } else if (countOfClick == 3 || countOfClick == 7) {

      let newRundomNum = Math.ceil(Math.random() * 1000)

      let newNum = number + newRundomNum

      //100$
      number = Math.round(newNum / 360) * 360 + 210
      container.style.transform = "rotate(" + number + "deg)";

    } else {

      number += Math.ceil(Math.random() * 1000)



      if ((number % 360) >= 165 && (number % 360) <= 195) {

        console.log('JFLXKDJLKFDLJKISDFLJKIFSDSJLKIDFFDKLJSDFJKLSDFLKJ')

        btn.disabled = true

        setTimeout(function () { btn.disabled = false; }, 15000);

        for (let i = 0; i < 3; i++) {
          container.style.rotation.y += 0.01;
          // setTimeout(function () {
          //   container.style.transform = "rotate(" + number + "deg)";
          //   number += Math.ceil(Math.random() * 1000)
          // }, 5000);

         
          
          console.log('mmmmmmmmmmmmmmmmmmmmm')
        }

      } else if ((number % 360) > 75 && (number % 360) < 105) {
        number += Math.ceil(Math.random() * 60);
        container.style.transform = "rotate(" + number + "deg)";

        console.log('aaaaa')

      } else if ((number % 360) > 135 && (number % 360) < 165) {
        number += Math.ceil(Math.random() * 270);
        container.style.transform = "rotate(" + number + "deg)";
        console.log('bbbb')

      } else {

        container.style.transform = "rotate(" + number + "deg)";
        console.log('cccc')
      }



      console.log(number % 360)
    }





    console.log('ffffff')
    console.log(Math.ceil(Math.random() * 10))

  } else {
    countOfClick = 0
    number += Math.ceil(Math.random() * 1000)
    if ((number % 360) > 90 && (number % 360) < 120) {
      number += Math.ceil(Math.random() * 60);
      container.style.transform = "rotate(" + number + "deg)";

      console.log('aaaaa')

    } else {

      container.style.transform = "rotate(" + number + "deg)";
    }
  }




  console.log(countOfClick)
}