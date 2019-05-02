/* create global variable*/
let nameArr = []; // creates nameArr as an empty array//

nameArr[0] = prompt('what is your first name?');
nameArr[1] = prompt('what is your last name?');

/* function to error check name*/
function checkName(name){
    /* Use !name to check if name has a value. !name is false if the string is empty */

    if(!name[0] || !name[1]){
    /* if either name is blank ask again and overwrite the old value with the new one*/
        nameArr[0] = prompt("No really,  what's your first name?");
        nameArr[1] = prompt("No really,  what's your last name?");

        /* RECURSION fxn calls itself again*/
        name = checkName(name);
    }

    return name;
}
/* capture what is returned by checkname and return that value*/
nameArr = checkName(nameArr);

let output = document.querySelector('#greeting');

output.innerHTML = `<h1>${nameArr[0]} ${nameArr[1]}</h1>`;
// output.textContent = `<p>${name}</p>`;

/* Functional Expression
          let errorCheck = function() {
              code
          };
          */
