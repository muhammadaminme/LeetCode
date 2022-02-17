var num1= "11"
var num2= "123";
z=parseInt(num1) + parseInt(num2)
console.log(z.toFixed())

function name(param){

}
name([2,2,1])

var num="123".split('')
a = num.reverse().join('')
console.log(+a)

function num(x){
    
    let a = x.split('').reverse().join('')
    return +a 
}
console.log(num('123'))

const sortByLength = arr => arr.sort((a,b) => a.length - b.length);
console.log(sortByLength(["aa","c","vvvv","vvv"]))

function minMax(par){
   
    
    return [Math.max(...par), Math.min(...par)]
}

console.log(minMax([1, 2, 3, 4, 5]))