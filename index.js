const log = console.log;

function nameCreate(firstName, lastName){
    let fullName = `My name is ${firstName}${lastName}`;
    return fullName;
};
log(nameCreate (`Pedro `, `Brieno`));

let nameMaker = (firstName, lastName) => {
    return (`I love ${firstName} ${lastName}`)
}

log(nameMaker(`Estefani`, `Lopez`));

let askAreWeThereYet = () => alert('Are we there yet?')
setInterval(askAreWeThereYet, 5000)

let stringArray = ["batman", "thor", 'wonder woman', 'dead pool', 'cat-woman', 'black panther']

function processSplicedValue(array, index, callback){
  let splicedValue = array.splice(index, 1)
  callback(splicedValue)
}
processSplicedValue(stringArray, 2, log)
processSplicedValue(stringArray, 2, alert)
processSplicedValue(stringArray, 2, (value) => alert(value))

function dido(string){
  let final = ""
  for (let i = 0; i < 10; i++){
    final = final + " " + string
  }
  log(final)
}
processSplicedValue(stringArray, 1, dido)