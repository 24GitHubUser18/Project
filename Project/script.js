// Function to append symbols (numbers or operators) to the result field
function appendSymbol(symbol) {
    document.getElementById('result').value += symbol;
}

// Function to clear the result field
function clearResult() {
    document.getElementById('result').value = '';
}

// Function to calculate the result
function calculateResult() {
    var result = document.getElementById('result').value;
    try {
        // Replace 'x' with '*' and '÷' with '/' before evaluating the expression
        result = result.replace(/x/g, '*').replace(/÷/g, '/');
        var calculatedResult = eval(result);
        document.getElementById('result').value = calculatedResult;

        // Add the calculation to the history
        addToHistory(result + ' = ' + calculatedResult);
    } catch (error) {
        alert('Invalid expression!');
    }
}

// Function to add a calculation to the history
function addToHistory(calculation) {
    var historyList = document.getElementById('historyList');
    var listItem = document.createElement('li');
    listItem.textContent = calculation;
    historyList.appendChild(listItem);
}

// Function to clear the history
function clearHistory() {
    document.getElementById('historyList').innerHTML = '';
}