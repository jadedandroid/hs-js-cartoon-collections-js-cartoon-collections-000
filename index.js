function dwarfRollCall(dwarves) {
 let dwarf = []
 for(let dwarve = dwarve.length/2 ; dwarve< dwarves.length ; dwarve++){
  let dwarfCount = parseInt(dwarve) + 1;
   let theDwarf = String(dwarfCount) +'. '+ `${dwarves[dwarve]}`
  dwarf.push(theDwarf );
 }
 return String(dwarf);
}

function dwarfRollCall(dwarves) {
   var newStr = "";
 dwarves.forEach(function(name, Pos) {
   	newStr += (Pos+1 + ". " + name + " ");
   });
  return newStr;
}



function summonCaptainPlanet(planeteerCalls){
  let array = [];
  for (let i=0;i<planeteerCalls.length; i++){
    array.push(`${planeteerCalls[i]}!`.toUpperCase())
    
  }
  return array
}

function longPlaneteerCalls(words){
  for(var i=0;i<words.length;i++){
    if (words[i].length>4){
      return true
    } else {
    return false  
    }
  }
}

function findTheCheese (food) {
  for(let i=0; i < food.length ; i++) {
    if (food[i] === 'camembert' || food[i] === 'gouda' || food[i] === 'cheddar' || food[i] === 'Swiss Cheese') {
      return food[i]
    }
  }
  return "no cheese!"
}










function wordsWithB(words){
  let array = [];
  for(i=0; i<words.length; i++){
    if (words[i][0] === 'b'){
      array.push(words[i])
    }
  }
}