console.log('parte 1, Olá mundo:')
for (let lup=1; lup<=5; lup++){
    console.log('Olá mundo '+lup)
}

console.log('parte 2, números impares:')
//não consegui fazer
for(let imp=1; imp<=9; imp++){
    if(imp=1,imp=3,imp=5,imp=7,imp=9){
        console.log('Número impar: ', imp)
    }
}
console.log('parte 2, números impares com switch:')
//fiz uma gambiarra
for(let imp=1; imp<10; imp++){
    switch (imp) {
        case imp=1:
            console.log('Número impar: ', imp)
            imp++
            imp++
        case imp=3:
            console.log('Número impar: ', imp)
            imp++
            imp++
        case imp=5:
            console.log('Número impar: ', imp)
            imp++
            imp++
        case imp=7:
            console.log('Número impar: ', imp)
            imp++
            imp++
        case imp=9:
            console.log('Número impar: ', imp)
            imp++
        case imp=10:
            console.log('fim: ', imp)
    }
}
console.log('parte 3, a tabuada:')
//tem q mudar o valor da que esta na string e o que esta multiplicando a variavel
for(let imp=1; imp<=10; imp++){
    console.log("4 x ", imp, " = ", (4*imp)) 
}

console.log('parte 3, a tabuada 2:')
var t=88  //só alterar numero dessa var
for(var i=1; i<=10; i++){
    console.log(i, 'x', t,'=', i*t)
}