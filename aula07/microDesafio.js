//flecha gorda

let prinT=_=>console.log('Olá, boa madrugada')
prinT()

let soma=(n1,n2)=>console.log(n1+n2)
soma(10,10)


//callback
let andar=_=>console.log('o carro está andando')
let parar=_=>console.log('o carro parou')



function andaR(){
    setTimeout(andar,4000)
}
function paraR(){
    parar()
}
function acaoCar(){
    andaR();
    paraR();
}
acaoCar()//só não entendi porque imprime invertido kkkkkk