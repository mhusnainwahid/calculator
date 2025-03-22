

function inpVal(num){
    var inpval = document.getElementById("result")
    inpval.value += num;
}
function getResult(){
    var inpval = document.getElementById("result")
    inpval.value = eval(inpval.value)
}
function clearBtn(){
    var inpval = document.getElementById("result")
    inpval.value = "";
}