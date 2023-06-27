let container = document.querySelector(".container");
let btn = document.getElementById("start");
let number = Math.ceil(Math.random() * 3000);
let numSector
let countOfClick = 0
let sum = 0
let rundomIndex = []


function onClick() {
    countOfClick++
    btn.disabled = true
    setTimeout(function () { btn.disabled = false; }, 5000);

    if (countOfClick <= 10) {

        if (countOfClick == 2 || countOfClick == 5 || countOfClick == 9) {
            let newRundomNum = Math.ceil(Math.random() * 3000)
            let newNum = number + newRundomNum
            //LOSE
            number = Math.round(newNum / 360) * 360 + 90
            container.style.transform = "rotate(" + number + "deg)";
        } else if (countOfClick == 3 || countOfClick == 7) {
            let newRundomNum = Math.ceil(Math.random() * 3000)
            let newNum = number + newRundomNum
            //100$
            number = Math.round(newNum / 360) * 360 + 180
            container.style.transform = "rotate(" + number + "deg)";
        } else {
            number += Math.ceil(Math.random() * 3000)
            if ((number % 360) >= 195 && (number % 360) <= 225) {
                btn.disabled = true
                setTimeout(function () { btn.disabled = false; }, 15000);

                container.style.transform = "rotate(" + number + "deg)";
                onClick2()
            } else if ((number % 360) >= 75 && (number % 360) <= 105) {
                number += Math.ceil(Math.random() * 5) * 360 + 30;
                container.style.transform = "rotate(" + number + "deg)";

            } else if ((number % 360) >= 165 && (number % 360) <= 195) {
                number += Math.ceil(Math.random() * 5) * 360 - 30;
                container.style.transform = "rotate(" + number + "deg)";

            } else {
                number += Math.ceil(Math.random() * 3000)
                container.style.transform = "rotate(" + number + "deg)";
            }

        }

    } else {
        countOfClick = 0
        number += Math.ceil(Math.random() * 3000)
        container.style.transform = "rotate(" + number + "deg)";
    }

}


function onClick2() {
    setTimeout(function () {
        btn.disabled = true
        setTimeout(function () { btn.disabled = false; }, 15000);
        number += Math.ceil(Math.random() * 3000)
        container.style.transform = "rotate(" + number + "deg)";
        numSector = (number % 360)
        calcSum(numSector)
        onClick3()
    }, 5000);

}

function onClick3() {
    setTimeout(function () {
        btn.disabled = true
        setTimeout(function () { btn.disabled = false; }, 15000);
        number += Math.ceil(Math.random() * 3000)
        container.style.transform = "rotate(" + number + "deg)";
        numSector = (number % 360)
        calcSum(numSector)
        onClick4()
    }, 5000);
}



function onClick4() {
    setTimeout(function () {
        btn.disabled = true
        setTimeout(function () { btn.disabled = false; }, 15000);
        number += Math.ceil(Math.random() * 3000)
        container.style.transform = "rotate(" + number + "deg)";
        numSector = (number % 360)
        calcSum(numSector)
        onClickResult()
    }, 5000);

}
function onClickResult() {
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
    } else {
        sum += 500

    }
}