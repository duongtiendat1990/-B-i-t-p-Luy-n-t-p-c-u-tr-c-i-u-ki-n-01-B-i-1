function Calculate() {
    let numberOne = Number(document.getElementById('a').value);
    let numberTwo = Number(document.getElementById('b').value);
    result = Math.abs(numberOne)%Math.abs(numberTwo) > 0 ? "a is not divisable by b" : "a is divisable by b";
    document.getElementById("result").innerHTML = result;
}