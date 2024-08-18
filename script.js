let currentInput = ''
let operator = ''
let previousInput = ''

function clearDisplay() {
  currentInput = ''
  operator = ''
  previousInput = ''
  document.getElementById('display').value = ''
}

function appendNumber(number) {
  currentInput += number
  document.getElementById('display').value = currentInput
}

function setOperator(op) {
  if (currentInput === '') return
  operator = op
  previousInput = currentInput
  currentInput = ''
}

function calculateResult() {
  if (currentInput === '' || previousInput === '' || operator === '') return
  const result = eval(`${previousInput} ${operator} ${currentInput}`)
  document.getElementById('display').value = result
  currentInput = result
  operator = ''
  previousInput = ''
}
