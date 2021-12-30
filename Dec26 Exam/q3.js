var input=prompt('enter the number')
var count=0
for(let i=1;i<=input;i++){
if(input%i==0){
    count=count+1
}
}
if(count==2){
    console.log("the given number is prime")
}
else{
    console.log("the given number is not prime")
}