var input=prompt('enter the number')
let first=1
    let second=1
for(let i=3;i<=input;i++){
    
   let  third=second+first    
   first=second    
   second=third     
}
console.log(second)