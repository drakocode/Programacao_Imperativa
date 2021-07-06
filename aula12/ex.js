

//      EX 1 


let num =[2,4,6,8]
let impares= num.map(function(imp){
    return imp-1;
})
console.log(impares)


//       EX 2

let nomes=['Erik','Eric','Erique','Erico','Erik']
let eriks=nomes.filter(function(nome){
    return nome=='Erik';
})
console.log(eriks)


//       EX3


let numers=[1,2,3,4,56,6,78,34]
let multi=numers.reduce(function(acu,num){
    return acu*num;
})
console.log(multi)


//     EX4



let animals=['jacaré','tigre','crocodilo','cobra','mariposa','lobo']
let anima=animals.forEach(function(animal){
    console.log(animal)
})
console.log(anima)