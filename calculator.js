function clac(val){
    document.querySelector(".display").value+=val;
}
function cle(){
    document.querySelector('.display').value=" ";
}
function equalclac(){
    var text = document.querySelector('.display').value;
    var result = eval(text);
    document.querySelector('.display').value=result
}
