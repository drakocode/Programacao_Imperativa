let autorizado = "Acesso autorizado"
let negado = "Acesso negado"
let acompanhado = "Acesso autorizado somente com acompanhante"


function podeSubir(alt, acomp){
    if (alt,acomp) {
        alt >=1.4 && alt >=2,
            acomp==false
            console.log(autorizado)
    }else if (alt, acomp) {
        alt <=1.4,
            acomp==true
            console.log(acompanhado)
    }else{
        alt <=1.2,
            acomp==false,
            console.log(negado)
    }
}

podeSubir(1.4, false)

//desafio 2
function estacao(est){
    switch (est){
        case est = 'Verão':
            console.log('Que calor hein?')
            break;
        case est = 'Inverno':
            console.log('Frio dms!')
            break;
        case est = 'Outono':
            console.log('É a estação em que as folhas caem')
            break;
        case est = 'Primavera':
            console.log('O momento em que as flores crescem')
            break;
        default:
            console.log('Ops, estação inválida')
        

    }
}
