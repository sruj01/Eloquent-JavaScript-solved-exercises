let string = "";
for(let i = 0; i < 7; i++){
  for(let j = 0; j <= i; j ++){
    string = string + "#";
  }
  console.log(string);  //console.log is invoked 7 times
  string = "";
}

//OR


let string = "";
for(let i = 0; i < 7; i++){
  for(let j = 0; j <= i; j ++){
    string = string + "#"
  }
 string = string + "\n"
}
console.log(string);  //console.log is invoked once