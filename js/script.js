var k = Number(prompt("Please,input amount of Fibonacci numbers to calculate."));
//-------------function using cycle
function fibonacciCounter(amount_of_numbers) {
    var arr = [];
    arr[0] = 1;
    arr[1] = 1;
    document.write("<table border='1' cellpadding='20px'>")
    for (var i = 2; i <= amount_of_numbers; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    tr();
    for (var i = 1; i <= amount_of_numbers; i++) {
        if (i == 1) document.write("<th>Current Fibonacci Number</th>");
        document.write("<th>" + i + "</th>");
    }
    closeTr();
    tr();
    for (var i = 0; i < amount_of_numbers; i++) {
        if (i == 0) document.write("<th>Numeric</th>");
        document.write("<td>" + arr[i] + "</td>");
    }
    closeTr();
    document.write("</table>")
}

function tr() {
    document.write("<tr>");
}

function closeTr() {
    document.write("</tr>")
}
fibonacciCounter(k);

function fibonacciRecursion(amountOfNumbers) {
    return amountOfNumbers <= 1 ? amountOfNumbers : fibonacciRecursion(amountOfNumbers - 1) + fibonacciRecursion(amountOfNumbers - 2);
}
document.write("<br>Last fibonacci number is '(using recursion)' is " + fibonacciRecursion(k));