let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 let area = length * width;
 document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;

}

function calculateTotal() {
    let amount1 = parseFloat(document.getElementById('amount-1').value);
    let amount2 = parseFloat(document.getElementById('amount-2').value);
    let amount3 = parseFloat(document.getElementById('amount-3').value);

    let total = amount1 + amount2 + amount3;
    document.getElementById('amount-result').innerText = `The total amount is: $ ${total}`;
}

