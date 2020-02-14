var x=2;
var y = 3;
var z =0;


function potencia(x,y){
    let p=1;
    for(var i=0; i<y;i++){
        p=p*x
    }
    return(p)
}
function suma(x,y){
    return x+y
}

function resta(x,y){
    return x-y
}
function multiplicacion(x,y){
    return x*y
}

function division(x,y){
    return x/y
}

function residuo(x,y){
    return x%y
}
function calcular(){
    var x = document.getElementById("x").value*1
    var y = document.getElementById("y").value*1
    var sum = suma (x,y)
    var res = document.getElementById("resultados")
    res.innerHTML=sum



}
