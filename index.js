console.log(`Welcome to HVAC`)

const userInput= `When did you last change your air filter?`
prompt(userInput)

if(userInput === 1){console.log(`Fantastic Job`);}
else if(userInput>2){console.log(`Please Change It`);}
else if(userInput>=3){console.log(`Your System Wants Fresh Air`);}
