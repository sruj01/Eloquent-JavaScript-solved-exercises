function countBs(string,char){
  let counter = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i] === char) counter += 1;
  }
 console.log(counter);
}
countBs("oompaloompa","o");