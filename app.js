const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multuplyBtn = document.getElementById('multiply')
const divisionBtn = document.getElementById('division')
let mathAct

plusBtn.onclick = () => {
    mathAct = '+'
}
minusBtn.onclick = () => {
    mathAct = '-'
}
multuplyBtn.onclick = () => {
    mathAct = '*'
}
divisionBtn.onclick = () => {
    mathAct = '/'
}

function computeNumbersWithAction(inp1, inp2, action) {
    const val1 = Number(inp1.value)
    const val2 = Number(inp2.value)
    if (action == '+') {
        return val1 + val2
    } else if (action == '-') {
        return val1 - val2
    } else if (action == '*') {
        return val1 * val2
    } else if (action == '/') {
        return val1 / val2
    }
    // return action == '+' ? val1 + val2 : val1 - val2
}
function printResult(res) {
    if (res < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = res
}
submit.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, mathAct)
    printResult(result)
}
