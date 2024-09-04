const name="Yahya"
const RollNo =81
//console.log(name +RollNo+"value")
//console.log(`hello my name is ${name} and my roll No is ${RollNo}`)//use this syntax as it is modern and most useable
const NewName=new String('Yahya Gujjar')
//console.log(NewName.charAt(2));
//console.log(NewName.indexOf('a'))
const anotherName=NewName.substring(0,5)
//console.log(anotherName)
const sliceName=NewName.slice(-12,6)
//console.log(sliceName);
const spaceName=new String ('      yahya   ')
//console.log(spaceName);
console.log(spaceName.trim());// used if there is a space in the start of strings 
// you can use trimstrat() and trimend() to end the space infront
const gameName='Yahya._.ayaz'
const url = "https://instagram.com/yahya%20ayz"

console.log(url.replace('%20', '._.'))
console.log(gameName.split('._.'))


