function isEven(num){
  if(num < 0) num = -num;
  if(num == 0) return console.log(true);
  else if(num == 1) return console.log(false);
  else if( isEven(num - 2));
}
isEven(-2);