var katzDeliLine = [];

/*Another way to return position

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

*/

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var position = katzDeliLine.indexOf(name);
  return `Welcome, ${name}. You are number ${position + 1} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return `There is nobody waiting to be served!`;
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

/*example with help
function currentLine(katzDeliLine){
  var str = "The line is currently: ";
  var line = [];
  if(katzDeliLine.length < 1){
    return `The line is currently empty.`;
  }else{
    for(let i = 0; i <katzDeliLine.length; i++){
      line[i] = `${[i+1]}. ${katzDeliLine[i]}`;
    }str += line.join(', ');
    return str;
  }
}*/
/*Not looping correctly
function currentLine(katzDeliLine){
  var str = `The line is currently: 1. ${katzDeliLine[0]}`;
  if(katzDeliLine.length === 0){
    return `The line is currently empty.`
  }else if(katzDeliLine.length === 1){
    return `${str}`;
  }else if(katzDeliLine.length > 1){
    for(let i = 0; i < katzDeliLine.length; i++){
      return `${str}, ${i+1}. ${katzDeliLine[i+1]}`
    }
  }
}*/
function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return `The line is currently empty.`;
  }
  var str = `The line is currently: 1. ${katzDeliLine[0]}`;
  for(let i = 1; i < katzDeliLine.length; i++){
    str += `, ${i + 1}. ${katzDeliLine[i]}`;
  }
  return str
}