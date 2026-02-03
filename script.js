const numbers = document.querySelectorAll("#numbers button")
const screen = document.getElementById("screen")
const dot = document.querySelector(".dot")
const clear = document.querySelector(".clear")
const zero = document.querySelector(".zero")
const deleted = document.querySelector(".delete")
const lbracket = document.querySelector(".leftbracket")
const rbracket = document.querySelector(".rightbracket")
const operators = document.querySelectorAll(".op")
const result = document.querySelector(".result")

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

function addition(...nums) {
    let total = 0;
    for(let num of nums) {
        total += num
    }
    return total;
}

operators.forEach(operator => operator.addEventListener("click", function() {
    screen.textContent += this.textContent;
}))



result.addEventListener("click",() => {
    const total = 0;
    const first = screen.textContent[0];
    const operator = screen.textContent[1];
    const second = screen.textContent[2];
    console.log(screen.textContent)
    if(operator === '+') {
        total += first + second;
    }
    return total
})



