var a=prompt('enter gp 1st num ')
var b=prompt('enter gp 2nd num')
var n=prompt('enter nth number')
function nthnum(first,second,num){
    let r=second/first
    let fact= r **(num-1)
    let res=parseInt(first) *  parseInt(fact)
    return res
}
console.log(nthnum(a,b,n))