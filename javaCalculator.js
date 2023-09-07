let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}

function sine() {
    try {
        const result = Math.sin(eval(displayValue));
        if (!isNaN(result)) {
            displayValue = result;
            document.getElementById("display").value = displayValue;
        } else {
            throw "Invalid input";
        }
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}

function cosine() {
    try {
        const result = Math.cos(eval(displayValue));
        if (!isNaN(result)) {
            displayValue = result;
            document.getElementById("display").value = displayValue;
        } else {
            throw "Invalid input";
        }
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}

function exponential() {
    try {
        const result = Math.exp(eval(displayValue));
        if (!isNaN(result)) {
            displayValue = result;
            document.getElementById("display").value = displayValue;
        } else {
            throw "Invalid input";
        }
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}

function naturalLogarithm() {
    try {
        const result = Math.log(eval(displayValue));
        if (!isNaN(result)) {
            displayValue = result;
            document.getElementById("display").value = displayValue;
        } else {
            throw "Invalid input";
        }
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}