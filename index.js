let container = document.querySelector(".container");
let btn = document.getElementById("start");
let number = Math.ceil(Math.random() * 1000);

let countOfClick = 0

let rundomIndex = []
console.log(number)

 

function onClick() {
  countOfClick++
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
      if ((number % 360) > 90 && (number % 360) < 120) {
       number+= Math.ceil(Math.random() * 60);
       container.style.transform = "rotate(" + number + "deg)";

        console.log('aaaaa')

      } else if ((number % 360) > 180 && (number % 360) < 210) {
        number+= Math.ceil(Math.random() * 270);
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
    number+= Math.ceil(Math.random() * 60);
    container.style.transform = "rotate(" + number + "deg)";

     console.log('aaaaa')

   }else{

     container.style.transform = "rotate(" + number + "deg)";
   }
}


 

console.log(countOfClick)
}