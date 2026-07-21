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


for (let i=0; i<5; i++) {
    console.log("for loop " + i);
}


let j=0;

while (j<4){
    console.log("while loop " + j);
    j++;
}



let k=0;
do{
    console.log("do while loop " +k);
    k++;
} while (k<4);

// js array

let array = [12,89,4, "hmm"];
console.log(typeof(array));

console.log(array);
let element = array[0];
console.log(element); //12
console.log(array[5]); //undefined
console.log(array[3]); //hmm

array[0]=90;
console.log(array); //(4) [90, 89, 4, 'hmm']
array[4] = "wow";
console.log(array); //(5) [90, 89, 4, 'hmm', 'wow']

document.getElementById("array").innerHTML=array;

// js array methods 

var friends = ["rohim", "karim", "jalim", "solim"];
console.log(friends);

console.log(friends.toString()); // rohim,karim,jalim,solim

console.log(friends.join(" # ")); // rohim # karim # jalim # solim

console.log("before pop: ", friends.length); //before pop:  4
var x = friends.pop();
console.log(friends); // ['rohim', 'karim', 'jalim']
console.log("after pop: ", friends.length); // after pop: 3
console.log(x); //solim

console.log("before push: ", friends.length); //3
var y = friends.push("dalim");
console.log(friends); //(4) ['rohim', 'karim', 'jalim', 'dalim']
console.log("after push: ", friends.length); // 4
console.log(y); // 4  (not dalim .. contain length of the updated array after push)

console.log(18*9);
debugger;
console.log("bye world");