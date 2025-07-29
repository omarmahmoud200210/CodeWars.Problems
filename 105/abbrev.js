/*
    - Creating the function
    - intial or declare the parameter
    - for loop on characters in the string
    - if statement to find the space coz space means that
     i find the family name.
    - return first character and the first character from family name
*/
function abbrevName(name){
    for (let i = 0; i < name.length; i++) {
        if (name[i] === " ")  
            return `${name[0].toUpperCase()}.${name[i+1].toUpperCase()}`;
    }
}
console.log(abbrevName("Omar Mahmoud"));

// Another way to solve the problem
function abbrevNameEdit(name){
    let fullName = name.split(' ');
    return `${name[0][0].toUpperCase()}.${name[1][0].toUpperCase()}`;
}

console.log(abbrevNameEdit("Omar Mahmoud"));

// Also another way to solve the problem
const AbbrevName = (name) => {
    let Name = name.split(' ');
    return Name.map((ele) => ele[0].toUpperCase()).join('.');
}
console.log(AbbrevName("Omar Mahmoud"));

// Regular expression way
const regWay = name => name.match(/\b\w/ig).join('.');
console.log(regWay("Omar Mahmoud"));