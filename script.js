let expression = "";

function appendNumber(num) {
  expression += num;
  document.getElementById("result").value = expression;
}

function appendOperator(operator) {
  expression += operator;
  document.getElementById("result").value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById("result").value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById("result").value = "Error";
  }
}

function clearInput() {
  expression = "";
  document.getElementById("result").value = "";
}
