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
        displayValue = Math.sin(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}

function cosine() {
    try {
        displayValue = Math.cos(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}

function exponential() {
    try {
        displayValue = Math.exp(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}

function naturalLogarithm() {
    try {
        displayValue = Math.log(eval(displayValue));
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}