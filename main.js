/* collect global variable*/
let name = prompt('what is your name?');

/* function to error check name*/
function errorCheck(name){
    if(name === ''){
    /* if the name is blank ask again and overwrite the old value with the new one*/
        name = prompt("No really,  what's your name?");
        /* RECURSION fxn calls itself again*/
        name = errorCheck(name);
    }

    return name;
}
/* capture what is returned by checkname and return that value*/
name = errorCheck(name);

let output = document.querySelector('#greeting');

output.textContent = 'Thanks for visiting, ' + name + '.';
/* Functional Expression
          let errorCheck = function (){};
          */