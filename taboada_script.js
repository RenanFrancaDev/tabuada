function taboada(){
    var num = window.document.getElementById('numero')
    var end = window.document.getElementById('end')
    if(!num.value|| !end.value){
        window.alert('Digite Um Numero')

    }else{

    var n = Number(num.value)
    var e = Number(end.value)
    
    var x = 0
    var r = ''
    var res = window.document.getElementById('resposta')
    
    r = n * e
    res.innerHTML = `A tabuada do ${n} é:`

    do{
        r = n * x
        res.innerHTML += (`<br>${x} x ${n} = ${r}`)
        x++
            
    }while(x <= e)

    }
}