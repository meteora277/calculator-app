let slider = document.getElementById("sliderValue")
let theme = document.getElementById("theme-num")
let screen = document.getElementById("window")

const windowRefresh = () => screen.innerHTML = (screenNum).toString(10)

let screenNum = "0";
let firstNum = 0;
let secondNum = 0;
let operation = ""
let repeatOperation = false
windowRefresh();


function btnClick(elem) {

    if (firstNum && secondNum) {
        clr();
    }

    if (screenNum == "0") {

        screenNum = elem

    } else if (screenNum.length >= 14) {

    } else {

        screenNum += elem
    }
    windowRefresh();
}


//resets all variables 
function clr() {

    screenNum = "0"
    firstNum = 0;
    secondNum = 0;
    operation = ""
    windowRefresh();
}


//parses number to a string to use slice method, and then returns value as a string
function del() {

    if (typeof screenNum == "number") {

        screenNum = screenNum.toString(10)
    }

    screenNum = screenNum.slice(0, screenNum.length - 1)

    if (screenNum == "") {

        screenNum = "0"
    }

    windowRefresh()
}

function operator(str) {

    operation = str
    firstNum = parseFloat(screenNum)
    screenNum = "0"
    repeatOperation = false

    windowRefresh();
}

function equals() {
    let total = firstNum
    if (repeatOperation == false) {

        secondNum = parseFloat(screenNum)

    }

    if (operation == "multiply") {


        screenNum = firstNum *= secondNum

        repeatOperation = true

    }

    if (operation == "add") {

        screenNum = firstNum += secondNum

        repeatOperation = true

    }

    if (operation == "subtract") {

        screenNum = firstNum -= secondNum

        repeatOperation = true

    }
    if (operation == "divide") {

        screenNum = parseFloat((firstNum /= secondNum).toPrecision(5))

        repeatOperation = true

    }
    windowRefresh()
}

let mainBG = document.body

let toggleBG = document.getElementById("sliderValue")

let screenBG = document.getElementById("window")

let key = document.getElementsByClassName("small-btn")

let keypadBG = document.getElementById("button-input")

let blueKey = document.getElementsByClassName("blue-btn")

let redKey = document.getElementsByClassName("red-btn")

slider.onchange = function theme() {

    theme.innerHTML = this.value;
    if (this.value == 1) {

        themeChange("hsl(222, 26%, 31%)", "hsl(223, 31%, 20%)", "hsl(224, 36%, 15%)", "hsl(30, 25%, 89%)", " hsl(28, 16%, 65%)", "hsl(223, 31%, 20%)", "hsl(225, 21%, 49%)", "hsl(224, 28%, 35%)", "hsl(6, 63%, 50%)", "hsl(6, 70%, 34%)")
        screenBG.style.color = "white"

        document.getElementById('nav').style.color = "white"

        for (let i = 0; i < key.length; i++) {

            key[i].style.color = "hsl(221, 14%, 31%)"

        }

    } else if (this.value == 2) {

        themeChange("hsl(0, 0%, 90%)", "hsl(0, 5%, 81%)", "hsl(0, 0%, 93%)", "hsl(45, 7%, 89%)", "hsl(35, 11%, 61%)", "hsl(0, 5%, 81%)", "hsl(185, 42%, 37%", "hsl(185, 58%, 25%)", "hsl(25, 98%, 40%)", "hsl(25, 99%, 27%)")
        screenBG.style.color = "hsl(221, 14%, 31%)"
        document.getElementById('nav').style.color = "hsl(221, 14%, 31%)"

        for (let i = 0; i < key.length; i++) {

            key[i].style.color = "hsl(60, 10%, 19%)"

        }



    } else if (this.value == 3) {

        themeChange("hsl(268, 75%, 9%)", "hsl(268, 71%, 12%)", "hsl(268, 71%, 12%)", " hsl(268, 47%, 21%)", "hsl(290, 70%, 36%)", "hsl(268, 71%, 12%)", "hsl(281, 89%, 26%)", "hsl(285, 91%, 52%)", "hsl(176, 100%, 44%)", " hsl(177, 92%, 70%)")
        screenBG.style.color = "hsl(52, 100%, 62%)"
        document.getElementById('nav').style.color = "hsl(52, 100%, 62%)"

        for (let i = 0; i < key.length; i++) {

            key[i].style.color = "hsl(52, 100%, 62%)"

        }
    }

}


function themeChange(main, sliderBg, screen, buttonBG, shadow, keypad, blue, blueShadow, red, redShadow) {


    mainBG.style.backgroundColor = main
    toggleBG.style.backgroundColor = sliderBg
    screenBG.style.backgroundColor = screen
    keypadBG.style.backgroundColor = keypad


    //button color

    for (let i = 0; i < key.length; i++) {

        key[i].style.backgroundColor = buttonBG
        key[i].style.boxShadow = "0rem 0.15rem " + shadow
    }
    for (let i = 0; i < blueKey.length; i++) {

        blueKey[i].style.backgroundColor = blue
        blueKey[i].style.boxShadow = "0rem 0.15rem " + blueShadow
    }
    document.getElementsByClassName("red-btn")[0].style.backgroundColor = red
    document.getElementsByClassName("red-btn")[0].style.boxShadow = "0rem 0.15rem " + redShadow
}

function textColor() {

    screenBG.style.color = "white"
    document.getElementById('nav').style.color = "white"

}