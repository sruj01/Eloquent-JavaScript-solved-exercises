let min = function(num1,num2){
    num1=Number(num1);
    num2=Number(num2);
    if(num1>num2) console.log(num1);
    else if(num1<num2) console.log(num2);
    else console.log(`both the numbers -${num1} and ${num2}- are equal`);
}
min(00005,500);