const numbers = document.querySelectorAll("#numbers button")
const screen = document.getElementById("screen")
const dot = document.querySelector(".dot")
const clear = document.querySelector(".clear")
const zero = document.querySelector(".zero")
const deleted = document.querySelector(".delete")
const lbracket = document.querySelector(".leftbracket")
const rbracket = document.querySelector(".rightbracket")
const subtract = document.querySelector(".subtract")
const multiply = document.querySelector(".multiply")
const divide = document.querySelector(".divide")
const exponent = document.querySelector(".exponent")
const sqrt = document.querySelector(".sqrt")
const add = document.querySelector(".add")
const remainder = document.querySelector(".remainder")

numbers.forEach(number => number.addEventListener("click", function() {
    screen.textContent += this.textContent;
}))

dot.addEventListener("click", function() {
    screen.textContent += this.textContent;   
},{once:true})

zero.addEventListener("click", function() {
    screen.textContent += this.textContent;   
})

lbracket.addEventListener("click", function() {
    screen.textContent += this.textContent;   
})

rbracket.addEventListener("click", function() {
    screen.textContent += this.textContent;   
})

clear.addEventListener("click", () => {
    screen.textContent = ''
})

deleted.addEventListener("click", () => {
    const query = screen.textContent;
    screen.textContent = query.slice(0,query.length-1)
})




