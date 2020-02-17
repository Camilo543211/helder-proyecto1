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
    var x=document.getElementById("x").value*1
    var y=document.getElementById("y").value*1
    var sum=suma(x,y)
    var res=document.getElementById("resultado")
    res.innerHTML="<h1>"+sum+"</h1>"

    var rest=resta(x,y)
    var re=document.getElementById("resultadoresta")
    re.innerHTML="<h1>"+rest+"</h1>"

    var div= division(x,y)
    var di=document.getElementById("resultadodivision")
    di.innerHTML="<h1>"+div+"</h1>"

    var mult= multiplicacion (x,y)
    var mu=document.getElementById("resultadomultiplicacion")
    mu.innerHTML="<h1>"+mult+"</h1>"

    var resi= residuo (x,y)
    var r=document.getElementById("resultadoresiduo")
    r.innerHTML="<h1>"+resi+"</h1>"

    var pot= potencia (x,y)
    var p=document.getElementById("resultadopotencia")
    p.innerHTML="<h1>"+pot+"</h1>" 


}




