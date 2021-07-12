let slider = document.getElementById("sliderValue")
let theme = document.getElementById("theme-num")
let screen = document.getElementById("window")


theme.innerHTML = slider.value

slider.onchange = function() {

        theme.innerHTML = this.value;

    }
    //console.log(slider.value)


let defaultNum = "0";
let firstNum = 0;
let secondNum = 0;
let arithmetic = ""
screen.innerHTML = defaultNum;

function btnClick(elem) {

    if (defaultNum == 0) {

        defaultNum = elem


    } else {

        defaultNum += elem
    }

    screen.innerHTML = defaultNum
}

function clr() {

    screen.innerHTML = "0"
    defaultNum = "0"
    firstNum = 0;
    arithmetic = ""

}

function del() {

    if (typeof defaultNum == "number") {

        defaultNum = defaultNum.toString(10)
        console.log(defaultNum)
    }


    defaultNum = defaultNum.slice(0, defaultNum.length - 1)

    if (defaultNum == "") {

        defaultNum = "0"

    }

    screen.innerHTML = defaultNum

}

function operator(str) {


    if (defaultNum !== "0" && arithmetic !== "") {

        console.log("uwu")

    }


    firstNum = parseInt(defaultNum)
    console.log(firstNum)
    arithmetic = str
    defaultNum = "0"

    screen.innerHTML = defaultNum



}


function equals() {

    if (arithmetic == "multiply") {
        secondNum = parseInt(defaultNum)
        defaultNum = firstNum * secondNum
        defaultNum = defaultNum.toString()
        screen.innerHTML = defaultNum

    } else if (arithmetic == "add") {
        secondNum = parseInt(defaultNum)

        defaultNum = firstNum + secondNum
        defaultNum = defaultNum.toString()
        screen.innerHTML = defaultNum

    }
    if (arithmetic == "subtract") {
        secondNum = parseInt(defaultNum)
        defaultNum = firstNum - secondNum
        defaultNum = defaultNum.toString()
        screen.innerHTML = defaultNum

    }
    if (arithmetic == "divide") {
        secondNum = parseInt(defaultNum)
        defaultNum = firstNum / secondNum
        defaultNum = defaultNum.toString()
        screen.innerHTML = defaultNum

    }

}