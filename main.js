/* collect global variable*/
let name = prompt('what is your name?');

/* function to error check name*/
function checkName(name){
    /* Use !name to check if name has a value. !name is false if the string is empty */    
    if(!name){
    /* if the name is blank ask again and overwrite the old value with the new one*/
        name = prompt("No really,  what's your name?");
        /* RECURSION fxn calls itself again*/
        name = checkName(name);
    }

    return name;
}
/* capture what is returned by checkname and return that value*/
name = checkName(name);

let output = document.querySelector('h1');

output.textContent = 'Thanks for visiting, ' + name + '.';
/* Functional Expression
          let errorCheck = function (){};
          */