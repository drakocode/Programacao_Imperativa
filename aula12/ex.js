

//      EX 1 


let num =[1,2,3,4,5,6,7,8,9]
let impares= num.map(function i(imp){
    return imp-1;
})
console.log(impares)

// aprendido em aula
const pares=num.filter(element=>element%2==0)//resto da divisão"%" for igual a 0 o numero é par
const impares2=num.filter(element=>element%2!=0)
const multiDe3=num.filter(element=>element%3==0)//verificação se é multiplo de 3

console.log(pares)
console.log(impares2)
console.log(multiDe3)


//       EX 2


let nomes=['Erik','Eric','Erique','Erico','Erik']
let eriks=nomes.filter(nome=>nome=='Erik')
console.log(eriks)


//       EX3


let numers=[1,2,3,4,56,6,78,34]

let multi1=numers.reduce((acu,num)=>acu+'-'+num)
console.log(multi1)

let multi=numers.reduce((acu,num)=>acu*num)
console.log(multi)


// aprendido em aula
const numeross=[11,22,33,44,55,66,77,88,99,111]
const result=numeross.reduce((acumulador,atual,loop)=>{
    console.log('loop:',loop,'-',acumulador,':',atual)
})
console.log(result)

const result1=numeross.reduce((acumulador,atual,loop)=>{
    console.log('loop:',loop,'-',acumulador,'+',atual)
    return acumulador+atual
})
console.log(result1)



//     EX4



let animals=['jacaré','tigre','crocodilo','cobra','mariposa','lobo']
let anima=animals.forEach(animal=>console.log(animal))
console.log(anima)