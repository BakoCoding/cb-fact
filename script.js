let html = document.getElementById("facto");


function getAFact() {
  var values = ['He thinks minecraft w/ friends is fun!','He thinks netherite is the best!','He thinks netherite is the best!',"He Can't watch youtube!","He has full netherite armor in under a week that's also ENCHANTED!","He has LOTS of IRL Friends!","He likes country music!","He has pets!","His favorite color is blue!","He LOVES deer!"],
  valueToUse = values[Math.floor(Math.random() * values.length)];
  html.innerHTML = valueToUse;
}