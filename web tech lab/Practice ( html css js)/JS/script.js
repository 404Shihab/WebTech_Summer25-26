console.log(" js file connected")


var a = "3";
var b = 4;
var c = a+b;
console.log(c) // 34

var x;
console.log(typeof(x)); // undefined

var num1 = 100;
console.log(num1);
var num1;
console.log(num1);

var name = "something";
var name = "anything";
console.log(name); // anything


let d = 'nothing';
console.log(d);
// let d = 'everything';
// console.log(d); Uncaught SyntaxError: Identifier 'd' has already been declared

var x = 0.4;
var y = 0.2;
console.log((x*10+y*10)/10); //0.6
var u = 0.02;
var v = 0.04;
console.log((u*100 + v*100)/100) // 0.06

var w = 0.009;
var z= 0.1;
console.log((w*1000 + z*1000)/1000) //0.109

var username = "Shihab Uddin Bhuiyan ";
console.log(username.length); // count with space  //21

var aa = null;
var bb ;
var cc = undefined;
console.log(typeof(aa)) //object
console.log(typeof(bb)) // undefined
console.log(typeof(cc)) // undefined

var ee = 2;
var dd =3;
dd **= ee; // dd = dd * ee
console.log(dd); // 3*3 = 9

