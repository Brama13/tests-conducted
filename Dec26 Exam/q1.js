var a=prompt('enter ap 1st num ')
var b=prompt('enter ap 2nd num')
var n=prompt('enter nth number')
function nthnum(first,second,num){
    let d=second-first
    let fact=(num-1)*d
    let res=parseInt(first) +  parseInt(fact)
    return res
}
console.log(nthnum(a,b,n))