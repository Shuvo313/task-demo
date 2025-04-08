/* let DATA = "Information";

class User {
    constructor(name, email){
    this.name = name;
    this.email = email;
}
viewData(){
    console.log("website data")
}
}
class Admin extends User{
    editData(){
        DATA = "some new value";
    }
}
let student1 = new User("Naim Shuvo", "abc@gmail.com");
let student2 = new User("Sajjal Ali","sajjad@yahoo.com");

let teacher1 = new User("Dean","dean@gmail.com"); */

/* let a = 5;
let b = 10;
console.log("a = ",a);
console.log("b = ",b);
console.log("a+b = ",a+b);

try{
    console.log("a+b = ",a+c); 
} catch(err) {
    console.log(err);
} */

/* function hello() {
    console.log("hello");
}

setTimeout(hello, 4000); */

/* console.log("one");
console.log("two");
setTimeout(() => {
    console.log("hello");
}, 4000);

console.log("three");
console.log("four");
 */

//callback 
/* function sum(a,b){
    console.log(a+b);
}

function calculator(a,b, sumCallback) {
    sumCallback(a,b);
}
calculator(1,2,sum); */

/* const hello = () => {
    console.log("hello");
};

setTimeout(hello, 3000); */

//nesting
/* let age = 19;
if(age>=18){
    if(age>=60){
        console.log("senior");
    }else{
        console.log("middle");
    }
 } else {
        console.log("child");
    } */

/* for(let i=0; i<5; i++){
    let str ="";
    for(j=0;j<5;j++){
        str = str+j;
    }
    console.log(i,str);
} */
function getData(dataId,getNextData){
    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData){
        getNextData();
        }
    },2000 );
}
getData(1, () => {
    getData(2)
});