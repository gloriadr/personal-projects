function insert (num) {
    var numb = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numb + num;
}
function clean() {
    document.getElementById('result').innerHTML = "";
}
function back() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}
function calculate() {
    var result = document.getElementById('result').innerHTML;
    if (result) {
        document.getElementById('result').innerHTML =  eval(result);
    }
}
