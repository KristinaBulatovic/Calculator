/**
 * Created by Tina on 6.3.2017..
 */
var result = "";

function calc_result(option) {
    var last_char = "";
    for (var e in result) {
        last_char = result[e];
    }
    var option = option;

    if (option == '1') {
        if (result.length < 13) {
            result += "1";
            document.getElementById("span1").innerHTML = result;
        }
    }
    else if (option == '2') {
        if (result.length < 13) {
            result += "2";
            document.getElementById("span1").innerHTML = result;
        }
    }
    else if (option == '3') {
        if (result.length < 13) {
            result += "3";
            document.getElementById("span1").innerHTML = result;
        }
    }
    else if (option == '4') {
        if (result.length < 13) {
            result += "4";
            document.getElementById("span1").innerHTML = result;
        }
    }
    else if (option == '5') {
        if (result.length < 13) {
            result += "5";
            document.getElementById("span1").innerHTML = result;
        }
    }
    else if (option == '6') {
        if (result.length < 13) {
            result += "6";
            document.getElementById("span1").innerHTML = result;
        }
    }
    else if (option == '7') {
        if (result.length < 13) {
            result += "7";
            document.getElementById("span1").innerHTML = result;
        }
    }
    else if (option == '8') {
        if (result.length < 13) {
            result += "8";
            document.getElementById("span1").innerHTML = result;
        }
    }
    else if (option == '9') {
        if (result.length < 13) {
            result += "9";
            document.getElementById("span1").innerHTML = result;
        }
    }
    else if (option == '0') {
        if (result.length < 13 && result.length != 0) {
            result += "0";
            document.getElementById("span1").innerHTML = result;
        }
    }
    else if (option == 'C') {
        result = "";
        document.getElementById("span1").innerHTML = "0";
    }
    else if (option == '<=') {
        var new_result = "";
        for (var k in result) {
            if (k < result.length - 1) {
                new_result += result[k];
            }
        }
        result = new_result;
        if (new_result.length == 0) {
            result = "";
            document.getElementById("span1").innerHTML = "0";
        }
        else {
            result = new_result;
            document.getElementById("span1").innerHTML = result;
        }
    }
    else if (option == '+/-' && result != "") {
        if (result.length < 13) {
            result = replacement(result);
            document.getElementById("span1").innerHTML = result;
        }
    }
    else if (option == '.') {
        if (result.length < 13) {
            if (result.length == 0) {
                result += "0.";
            }
            else {
                result += ".";
            }
            document.getElementById("span1").innerHTML = result;
        }
    }
    if (last_char != "+" && last_char != "-" && last_char != "/" && last_char != "x" && last_char != "%") {
        if (option == "x^2") {
            if (result.length < 13 && result != "") {
                result += "^2";
                document.getElementById("span1").innerHTML = result;
            }
        }
        else if (option == '/' && result != "") {
            if (result.length < 13) {
                result += "/";
                document.getElementById("span1").innerHTML = result;
            }
        }
        else if (option == 'x' && result != "") {
            if (result.length < 13) {
                result += "x";
                document.getElementById("span1").innerHTML = result;
            }
        }
        else if (option == '-') {
            if (result.length < 13) {
                result += "-";
                document.getElementById("span1").innerHTML = result;
            }
        }
        else if (option == '+' && result != "") {
            if (result.length < 13) {
                result += "+";
                document.getElementById("span1").innerHTML = result;
            }
        }
        else if (option == '=') {
            if (result != "") {
                result = calculation().toString();
                document.getElementById("span1").innerHTML = result;
            }
        }
    }
}
function calculation() {
    var number = 0;
    var num1 = 0;
    var num2 = "";
    var n = "";
    var j = 0;
    for (var i in result) {
        if (result[i] == '+' || result[i] == '-' || result[i] == 'x' || result[i] == "/" || result[i] == "^") {
            if (j == 0) {
                if(num2.length == 0){
                    num1 = 0;
                }
                else {
                    num1 = parseFloat(num2);
                }
                num2 = "";
                n = result[i];
                j++;
                number = num1;
            }
            else if (j == 1) {
                if (n == '+') {
                    number = num1 + parseFloat(num2);
                }
                else if (n == '-') {
                        number = num1 - parseFloat(num2);
                }
                else if (n == 'x') {
                    number = num1 * parseFloat(num2);
                }
                else if (n == '/') {
                    number = num1 / parseFloat(num2);
                }
                else if (n == '^'){
                    if(num1 != 1){
                        var nu = 1;
                        for(var t = 0; t < num2; t++){
                            nu *= num1;
                        }
                        number = nu;
                    }
                    else{
                        number = 1;
                    }
                }
                n = result[i];
                num1 = number;
                num2 = "";
            }
        }

        else {
            num2 += result[i];
        }
    }
    if (n == '+') {
        number += parseFloat(num2);
    }
    else if (n == '-') {
        number -= parseFloat(num2);
    }
    else if (n == 'x') {
        number *= parseFloat(num2);
    }
    else if (n == '/') {
        number /= parseFloat(num2);
    }
    else if (n == '^'){
        if(num1 != 1){
            var nu = 1;
            for(var t = 0; t < num2; t++){
                nu *= num1;
            }
            number = nu;
        }
        else{
            number = 1;
        }
    }

    var t = number.toString();
    var num = "";
    if (t.length > 13) {
        for (var o = 0; o < 14; o++) {
            num += t[o];
        }
        return num;
    }
    if (n == "") {
        number = num2;
    }
    return number;
}

function replacement(result) {
    var text = result;
    var r1 = 0;
    var r2 = "";
    var r3 = 0;
    for (var r in text) {
        if (text[r] == "+" || text[r] == "-") {
            r1++;
        }
    }
    if (r1 != 0) {
        if(r1 == 1){
            if(text[0] == "-"){
                for(var y in text){
                    if(text[y] != "-"){
                        r2 += text[y];
                    }
                }
                return r2;
            }
        }
        for (var r4 in text) {
            if (text[r4] == "+" || text[r4] == "-") {
                r3++;
                if (r3 == r1) {
                    if (text[r4] == "+") {
                        r2 += "-";
                    }
                    else {
                        r2 += "+";
                    }
                }
                else {
                    r2 += text[r4];
                }
            }
            else {
                r2 += text[r4];
            }
        }
    }
    else{
        r2 = "-"
        for(var x in text){
            r2 += text[x];
        }
    }
    return r2;
}