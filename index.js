let container = document.querySelector(".container");
let btn = document.getElementById("start");
let number = Math.ceil(Math.random() * 3000);

let numSector
let countOfClick = 0
let sum = 0
let rundomIndex = []
console.log(number)

 

function onClick() {
    countOfClick++
    btn.disabled = true
    setTimeout(function () { btn.disabled = false; }, 5000);

    if (countOfClick <= 10) {

        if (countOfClick == 2 || countOfClick == 5 || countOfClick == 9) { 
            //рабочая тема 
            let newRundomNum = Math.ceil(Math.random() * 3000)
            let newNum = number + newRundomNum
            //LOSE
            console.log(number)
            console.log(newNum)

            number = Math.round(newNum / 360) * 360 + 90
            console.log(number)

            container.style.transform = "rotate(" + number + "deg)"; 
            console.log('LOSE')

        } else if (countOfClick == 3 || countOfClick == 7) {

            let newRundomNum = Math.ceil(Math.random() * 3000)
            let newNum = number + newRundomNum
            //100$
            number = Math.round(newNum / 360) * 360 + 180
            console.log(number)

            container.style.transform = "rotate(" + number + "deg)";
console.log('100$')
        } else {

            number += Math.ceil(Math.random() * 3000)
            console.log(number)
            console.log(number % 360)



            if ((number % 360) >= 195 && (number % 360) <= 225) {

                console.log('FREESPINS')

                btn.disabled = true
    
                setTimeout(function () { btn.disabled = false; }, 15000);
                
                // number += Math.ceil(Math.random() * 1000)
                container.style.transform = "rotate(" + number + "deg)";
    
                // numSector = (number % 360)
                // calcSum(numSector)
                // console.log(numSector) 
                console.log(sum)
     
                onClick2()
    
                console.log('mmmmmmmmmmmmmmmmmmmmm')
    

            } else if ((number % 360) >= 75 && (number % 360) <= 105) {
                console.log(number)

                number += Math.ceil(Math.random() *5)*360 + 30;
                container.style.transform = "rotate(" + number + "deg)";
                console.log(number)
                console.log(number % 360)
                console.log('aaaaa')

            } else if ((number % 360) >= 165 && (number % 360) <= 195) {
                console.log(number)

                number += Math.ceil(Math.random() *5) *360 - 30;
                console.log(Math.ceil(Math.random() *10))

                console.log(number)
                console.log(number % 360)
                container.style.transform = "rotate(" + number + "deg)";
                console.log('bbbb')

            } else {
                number += Math.ceil(Math.random() * 3000)

                container.style.transform = "rotate(" + number + "deg)";
                console.log('cccc')
            }



            console.log(number % 360)
        }




        console.log(number % 360)

        console.log('ffffff')
 
    } else {
        countOfClick = 0
        number += Math.ceil(Math.random() * 3000)
        // if ((number % 360) > 90 && (number % 360) < 120) {
        //     number += Math.ceil(Math.random() * 60);
        //     container.style.transform = "rotate(" + number + "deg)";

        //     console.log('aaaaa')

        // } else {

            container.style.transform = "rotate(" + number + "deg)";
        // }
    }




    console.log(countOfClick)
}








function onClick2() {
    setTimeout(function () {
        btn.disabled = true
    
        setTimeout(function () { btn.disabled = false; }, 15000);
        number += Math.ceil(Math.random() * 3000)
        container.style.transform = "rotate(" + number + "deg)";

        numSector = (number % 360)
        console.log(numSector)

        calcSum(numSector)
        console.log(sum)

        console.log('1')
        // alert('You win')
        onClick3()
    }, 5000);

}

function onClick3() {

    setTimeout(function () {
        btn.disabled = true
    
        setTimeout(function () { btn.disabled = false; }, 15000);
        console.log(1);
        number += Math.ceil(Math.random() * 3000)
        container.style.transform = "rotate(" + number + "deg)";
        // container.style.transform ='none'
        numSector = (number % 360)
        console.log(numSector)
        calcSum(numSector)
        console.log(sum)

        console.log('2')
        onClick4()
    }, 5000);
}



function onClick4() {
    setTimeout( function(){
        btn.disabled = true
    
        setTimeout(function () { btn.disabled = false; }, 15000);
        number += Math.ceil(Math.random() * 3000)
        container.style.transform = "rotate(" + number + "deg)";
        //    container.style.transform ='none'
        // alert('You win3')
        numSector = (number % 360)

        console.log(numSector)

        calcSum(numSector)
        console.log(sum)
        console.log('3')

        onClickResult()

    }, 5000 );
    
}
function onClickResult(){
    setTimeout(function () {
        btn.disabled = true
    
        setTimeout(function () { btn.disabled = false; }, 5000);
    alert(`You win ${sum}$`)
    }, 5000);
}





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
        sum += 450

    } else if (number >= 195) {
        sum += 0

    } else if (number >= 165) {
        sum += 100

    } else if (number >= 135) {
        sum += 350

    } else if (number >= 105) {
        sum += 300

    } else if (number >= 75) {
        sum += 0

    } else if (number >= 45) {
        sum += 250

    } else if (number >= 15) {
        sum += 150
    } else{
        sum += 500

    }
}