const clear = document.querySelector(".clear")
const deleted = document.querySelector(".delete")
const result = document.querySelector(".result")
const screen = document.getElementById("screen")

clear.addEventListener("click", () => {
    screen.textContent = ''
})

deleted.addEventListener("click", () => {
    const query = screen.textContent;
    screen.textContent = query.slice(0,query.length-1)
})

const handleDisplay = input => {
    screen.textContent += input;
}

result.addEventListener("click", () => {
    const query = screen.textContent;
    try {
        screen.textContent = eval(query);
    }
    catch(error) {
        screen.textContent = 'Err'
    }
})










// const zero = document.querySelector(".zero")
// const numbers = document.querySelectorAll("#numbers button")
// const dot = document.querySelector(".dot")

// const lbracket = document.querySelector(".leftbracket")
// const rbracket = document.querySelector(".rightbracket")
// const operators = document.querySelectorAll(".op")


// const addition = document.querySelector(".add")
// const subtraction = document.querySelector(".subtract")
// const multiplication = document.querySelector(".multiply")
// const division = document.querySelector(".divide")
// const exponention = document.querySelector(".exponent")
// const remainder = document.querySelector(".remainder")
// const sqrt = document.querySelector(".sqrt")


// numbers.forEach(number => number.addEventListener("click", function() {
//     screen.textContent += this.textContent;
// }))

// dot.addEventListener("click", function() {
//     screen.textContent += this.textContent;   
// })

// zero.addEventListener("click", function() {
//     screen.textContent += this.textContent;   
// })

// lbracket.addEventListener("click", function() {
//     screen.textContent += this.textContent;   
// })

// rbracket.addEventListener("click", function() {
//     screen.textContent += this.textContent;   
// })

// operators.forEach(operator => operator.addEventListener("click", function() {
//     screen.textContent += this.textContent;
// }))

// result.addEventListener("click", () => {
//     const operators = [];
//     const numbers = screen.textContent.match(/\d+/g,'')
//     for(let i=0; i<screen.textContent.length; i++) {
//         if(screen.textContent[i] === '+' ||
//             screen.textContent[i] === '-' ||
//             screen.textContent[i] === 'x' ||
//             screen.textContent[i] === '/' ||
//             screen.textContent[i] === '%' ||
//             screen.textContent[i] === '^' ||
//             screen.textContent[i] === '√' ||
//             screen.textContent[i] === '(' ||
//             screen.textContent[i] === ')')
//             {
//             operators.push(screen.textContent[i])
//         }
//     }
 
// })

