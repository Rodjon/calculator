function Calc(){
    try {
        var result = eval(s);
        if (result == "Infinity"){
            throw new SyntaxError("Деление на ноль");
        }
        document.getElementById("result").innerText = s + " = " + result;
        
    } catch (error) {
        document.getElementById("result").innerText = "Ошибка";    
    } 
              
}

var s = "";

function retValue(value){
    s += value;
    document.getElementById("result").innerText = s;
}
function retDo(value){
    s += ' ' + value + ' ';
    document.getElementById("result").innerText = s;
}
function resetArea(){
    s = "";
    document.getElementById("result").innerText = 0;
}