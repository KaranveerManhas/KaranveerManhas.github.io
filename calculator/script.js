var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

var operand1 = "";
var operand2 = null;
var operator = null;



for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var value = this.getAttribute('data-value');
        if (value == '+') {
            operand1 = display.textContent;
            operator = '+';
            display.innerText = operand1+operator;
        }
        else if (value == '-') {
            operand1 = display.textContent;
            operator = '-';
            display.innerText = operand1+operator;
        }

        else if (value == '*') {
            operand1 = display.textContent;
            operator = '*';
            display.innerText = operand1+operator;
        }
        else if (value == '/') {
            operand1 = display.textContent;
            operator = '/';
            display.innerText = operand1+operator;
        }
        else if (value == '%') {
            operand1 = display.textContent;
            operator = '%';
            display.innerText = operand1+operator;
        }
        else if (value == '=') {
                operand2 = display.textContent;
                operand2 = operand2.slice(operand1.length+1, operand2.length);
                if (operator == "/" && operand2 == "0") {
                    display.innerText = "Error";
                }
                else {
                    display.innerText = eval(operand1+" "+operator+" "+operand2);
                    operand1 = 0;
                    operator = null;
                    operand2 = null;
                }
        }
        
        else if (value == 'AC') {
            display.innerText = "";
            value = "";
        }
    
        else {
            display.innerText += value;
        }
    });
}

