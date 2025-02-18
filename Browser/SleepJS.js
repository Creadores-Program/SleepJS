window.Sleep = function(ms){
  if(ms == null || isNaN(parseFloat(ms))){
    throw new Error("Error: Argument must be a Number!");
  }
  ms = parseFloat(ms);
  let timeEnd = Date.now() + ms;
  while(Date.now() != timeEnd || Date.now() < timeEnd){
  }
};
