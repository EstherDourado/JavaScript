function cont(){
    let inicio = document.getElementById("Inicio")
    let fim = document.getElementById('Fim')
    let passo = document.getElementById('Passo')
    let res = document.getElementById('res') 
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] faltam dados.')
        res.innerHTML = 'Impossivel Contar'
    }else {
        res.innerHTML = 'Contando: <br>' //quebra de linha 
        let i= Number(inicio.value)
        let p= Number(passo.value)
        let f= Number (fim.value)
        if (i < f){ //contagem crescente
            for(let c = i; c <= f; c += p){
           res.innerHTML += ` ${c} \U{1F929} `
            }
        } else {// contagem regressiva
            for( let c = i; c>=f; c-= p){
                res.innerHTML += ` ${c} \U{1F929} ` 
            }
        }
        res.innerHTML += `\U{1F3C1}`
    }
}


