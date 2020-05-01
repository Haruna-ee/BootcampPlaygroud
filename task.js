var person ={name: "Aaron", age: 13, sex:"male"};
console.log(person);
var age = 13;
// var getBirthYear;
function getBirthYear(age){
    return 2020-age
}
// getBirthYear(13);
console.log(getBirthYear(age));

var getBirthYear;
function millenialChecker(age){
    if (getBirthYear(age)> 2000){
        return "millenial"
        // console.log("millenial");
    }
    else{
        return "not millenial"
        // console.log("not millenial");
    }
console.log(millenialChecker(age));

}