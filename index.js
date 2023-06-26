let container = document.querySelector(".container");
let btn = document.getElementById("start");
let number = Math.ceil(Math.random() * 3000);

// let oneP = document.getElementById("oneP");
// let twoP = document.getElementById("twoP");
// let threeP = document.getElementById("threeP");
// let fourP = document.getElementById("fourP");
// let fiveP = document.getElementById("fiveP");
// let sixP = document.getElementById("sixP");
// let sevenP = document.getElementById("sevenP");
// let eightP = document.getElementById("eightP");
// let nineP = document.getElementById("nineP");
// let tenP = document.getElementById("tenP");
// let elevenP = document.getElementById("elevenP");
// let twelveP = document.getElementById("twelveP");
let numSector
let countOfClick = 0
let sum = 0
let rundomIndex = []
console.log(number)


console.log(freespinsP.innerText)

function onClick() {
    countOfClick++
    btn.disabled = true
    setTimeout(function () { btn.disabled = false; }, 5000);

    if (countOfClick < 10) {

        if (countOfClick == 2 || countOfClick == 5 || countOfClick == 9) {
          


            //рабочая тема

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
    
                setTimeout(function () { btn.disabled = false; }, 3000);
                
                number += Math.ceil(Math.random() * 1000)
                container.style.transform = "rotate(" + number + "deg)";
    
                numSector = (number % 360)
                calcSum(numSector)
                console.log(numSector)
    
    
    
    
                console.log(sum)
    
    
    
    
                // alert('ddd')
                onClick2()
    
                console.log('mmmmmmmmmmmmmmmmmmmmm')
    

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








function onClick2() {
    setTimeout(function () {

        number += Math.ceil(Math.random() * 1000)
        container.style.transform = "rotate(" + number + "deg)";

        numSector = (number % 360)

        calcSum(numSector)
        console.log(sum)

        console.log('1')
        // alert('You win')
        onClick3()
    }, 5000);

}

function onClick3() {

    setTimeout(function () {
        console.log(1);
        number += Math.ceil(Math.random() * 1000)
        container.style.transform = "rotate(" + number + "deg)";
        // container.style.transform ='none'
        numSector = (number % 360)

        calcSum(numSector)
        console.log(sum)

        console.log('2')
        onClickResult()

    }, 5000);
}

function onClickResult(){
    setTimeout(function () {

    alert(`You win ${sum}$`)
    }, 5000);
}


//  function onClick4() {
//     setTimeout( function(){

//     number += Math.ceil(Math.random() * 1000)
//    container.style.transform = "rotate(" + number + "deg)";
// //    container.style.transform ='none'
// alert('You win3')

//    console.log('3')
// }, 5000 );

// }





function calcSum(number) {
    if (number >= 345) {
        sum += 500
    } else if (number >= 315) {
        sum += 200

    } else if (number >= 285) {
        sum += 400

    } else if (number >= 255) {
        sum += 0

    } else if (number >= 225) {
        sum += 500

    } else if (number >= 195) {
        sum += 100

    } else if (number >= 165) {
        sum += 0

    } else if (number >= 135) {
        sum += 500

    } else if (number >= 105) {
        sum += 300

    } else if (number >= 75) {
        sum += 0

    } else if (number >= 45) {
        sum += 400

    } else if (number <= 15) {
        sum += 500
    }
}