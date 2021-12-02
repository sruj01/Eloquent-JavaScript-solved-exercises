let size = Number(prompt("Enter grid size"));
let string = "";
for(let i = 0 ; i < size ; i++) {
  for( let j = 0; j<(size/2) ; j ++){
     if(i % 2 === 0)  string = string + " " + "#";
     else if(i % 2 === 1)  string = string + "#" + " ";
  }
  string = string + "\n";
}
console.log(string);