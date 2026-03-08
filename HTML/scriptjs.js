// alert("Hello Human")
//console.log do not need semicolon but recommended
console.log("Code is running...") /*Good for debugging*/

console.log("Variable and it types");

var a = 5
var b = 6.32;
var c = "Harry"
var d = true;
var e = undefined;
var f = null;
let z = [1, 2]
const a1 = 1;
// a1 = a1+1; Not allowed
// var b = prompt("Enter your number")
console.log(a + b)
console.log(typeof a, typeof b, typeof c, typeof d, typeof e, typeof f, typeof a1, typeof z)
// type of NULL is object and not null


console.log("SCOPE OF VARIABLE");
{
    let a = 10     //let scope is only available in in the box
    console.log(a);
}


console.log("OBJECT CLASS");
let o = {
    "name": "Akshat",
    "job code": 56000
}

console.log(o)
o.salary = "100crore"
console.log(o)
o.salary = "500crore"
console.log(o)

console.log("CONDITIONAL STATEMENT");
let age = 5;
let grace = 2;

if ((age - grace) > 10) {
    console.log("Ok")
}
else {
    console.log("No")
}

console.log("SPECIAL & IMPORTANT OPERATORS");
console.log(age ** grace)
age **= grace;
console.log(age)

a = 5
c = "5";
console.log(a == c)     //check only value
console.log(a === c)    //checks value and data type

console.log(a > b ? a - b : b - a)

console.log("LOOPS")
console.log("For Loop")
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("For In Loop(Object)")

let obj = {
    name: "Akshat",
    role: "Programmer",
    company: "ABC"
}

for (const key in obj) {
    console.log(obj[key])
}
for (const key in obj) {
    console.log(key)
}

console.log("For Of Loop(Keys in object)")
for (const c of "Akshat") {
    console.log(c)
}


console.log("While Loop")
let i = 0
while (i < 2) {
    console.log(i)
    i++
}

console.log("Do While")
i = 0
do {
    console.log(i)
    i++
} while (i < 2);

console.log("FUNCTION")

function nice(name) {
    console.log("Hey " + name + " How are you?")
}
nice("Akshat")// nice(Akshat)

function sum(a, b, c = 3)/*c=3 is called default parameter */ {
    console.log(a + b + c)
}
console.log("Sum is ", sum(2, 3)) //undefined because no return
sum(2, 3)
sum(2)

// Important
const func1 = (x) => {
    console.log("I am an arrow function", x)
}
func1(5)

console.log("STRING")

c = "Akshat"

console.log(c[0])
console.log(c[6])
console.log(c.length)

console.log("Hey " + c + " How are you?")
console.log(`Hey ${c} How are you?`) //Template Literal and use of back tick
console.log("For quotes we use \" ")
console.log(c.toUpperCase())
console.log(c.toLowerCase())
console.log(c.slice(1, 4))
console.log(c.replace("sh", "yy"))
console.log(c.concat(" Sonkar"))
console.log(c)

console.log("ARRAY")

let arr1 = [1, 2, 4, 7, 9]
console.log(arr1.length)

console.log(arr1)

arr1[1] = 3
console.log(arr1)

console.log(arr1.toString())
console.log(arr1)

console.log(arr1.join(" and "))
console.log(arr1)



console.log(arr1.pop())
console.log(arr1)

console.log(arr1.shift())
console.log(arr1)


arr1.push(100)
console.log(arr1)

arr1.push("Akshat")
console.log(arr1)

arr1.unshift(24)    //putting this in console.log will result in output being the length of array
console.log(arr1)

console.log(delete (arr1[6]))
delete (arr1[5])     //delete but space is not freed
console.log(arr1)

let arr2 = [12, 14, 16]
let arr3 = [12, 15, 18]

console.log(arr1.concat(arr2, arr3))
console.log(arr1)

// console.log(arr1.sort(arr1.concat(arr2, arr3))) This is wrong
console.log(arr1.concat(arr2, arr3).sort())     //Javascript sorts in string by default
console.log(arr1.concat(arr2, arr3).sort((a, b) => a - b))
console.log(arr1)

console.log(arr1.splice(1, 3))   //also deletes the indexes from original array
console.log(arr1)

arr1 = [24, 3, 4, 7, 100]
console.log(arr1)

for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    console.log(element)
}
console.log(arr1)

arr1.forEach(function (num) { console.log(num) })
console.log(arr1)
// or
arr1.forEach(num => console.log(num))
console.log(arr1)

for (const element of arr1) {
    console.log(element)
}
console.log(arr1)

let newarr = []
for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    newarr.push(element ** 2)
}
console.log(newarr)
// or
console.log(arr1)
let newArr = arr1.map(element => { return element ** 2 })
console.log(newArr)


console.log("Use of filter function")
console.log(newArr)
const greaterthanseven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
console.log(newArr.filter(greaterthanseven))

console.log("Use of Reduce Funtion")

const red = (a, b) => {
    return a * b
}
console.log(arr2.reduce(red))

console.log("DOCUMENT OBJECT MODEL")

document.title = "Akshat"       //This changes the title of the file from JAVA Script to Akshat
console.log(document.title)
console.log(document.body)      //This is used for changing elements and how you can see the html of any section thru java script

// document.body.style.backgroundColor="Green"  //This is working but I don't want my entire screen to look green

console.log(document.body.childNodes)   //Text Nodes in Node list are due to spaces in between the symantics and not due to the texts written by you

console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[3]);
console.log(document.body.childNodes[3].childNodes);

let cont = document.body.childNodes[3]
console.log(cont.firstChild)
console.log(cont.lastChild)
console.log(cont.lastElementChild.parentElement)

cont.lastElementChild.style.backgroundColor = "green"

console.log(document.body.childNodes[3].firstElementChild)
console.log(document.body.childNodes[3].childNodes)
console.log(document.body.childNodes[3].children)

console.log(document.body.childNodes[3].firstElementChild.nextElementSibling);
console.log(document.body.childNodes[3].firstElementChild.nextElementSibling);
console.log(document.body.childNodes[3].lastElementChild.previousElementSibling);
console.log(document.body.childNodes[3].firstElementChild.childNodes[2])     //This is not working because inside dombox there is only one child and childNode[2] does not exist so return undefines
console.log(document.body.childNodes[3].firstElementChild.childNodes[0])


console.log("DOM IN TABLE")
console.log(document.body.childNodes[5]);
console.log(document.body.childNodes[5].rows);       //This is not working beacuse Node[5] is class table and not the table itself instead use below
console.log(document.querySelector(".table table").rows);

// console.log(document.body.childNodes[5].tr.cells);   //This is not working and giving error


console.log("CHANGING STYLE IN ONE BOX ONLY")

console.log("Method-1")
let onebox = document.getElementsByClassName("Box")
// let onebox = document.getElementsByClassName(".Box") This is wrong  
console.log(onebox)
onebox[1].style.backgroundColor = "Red"

// This method causes problem when indexing is changed

console.log("Method-2")
document.getElementById("bluebox").style.backgroundColor = "blue"
// Id se hai so no problem on adding more boxes later on

console.log("METHOD-3")
document.querySelector(".Box").style.backgroundColor = "pink"
// document.querySelectorAll.style.backgroundColor      will give error whose reason is given below
console.log(document.querySelectorAll)      //gives html collection so cannot use style properties on all at once
//To apply to all we use loops
document.querySelectorAll(".Box_1").forEach(e => {
    e.style.backgroundColor = "green"
})

let conti = document.getElementsByClassName("Box")
console.log( conti[2].matches("#bluebox"))  //This # is used for id without # it will search for <bluebox> </bluebox>
console.log(conti[2].closest("#bluebox"))

console.log(document.querySelector(".DOMContainer").contains(document.querySelector("body")))

console.log("WAY TO GET DATA USING JS")
let x = document.querySelector(".Box")
let y = document.querySelector(".DOMContainer")

/*All can be used for x and y both */
console.log(y.innerHTML)
console.log(y.outerHTML)
console.log(x.innerHTML)
console.log(x.outerHTML)
console.log(x.innerText) 
console.log(x.tagName)
console.log(y.tagName)
console.log(y.nodeName)
console.log(y.textContent)
console.log(y.hidden)
y.hidden = "true"
console.log(y.hidden)

console.log(x.hasAttribute("style"));
console.log(x.attributes);
x.removeAttribute("style")  //This is responsible for removing pink color

document.designMode = "on";
console.log(document.querySelector(".Box").dataset);


console.log("WAYS TO INSERT")

let divi = document.createElement("div")
divi.setAttribute("class","created");
y.insert;

divi.innerHTML = "O have a box inserted" <b> "by Akshat" <b>
divi.setAttribute("class", "container") ;
y.append;
//You can refer cwh notes for more functions

y.insertAdjacentHTML("afterend","I am over the water") 


console.log(y.classList);
console.log(y.className);
y.classList.add("Hello")
y.classList.remove("Hello")
y.classList.add("Hello")
y.classList.toggle("Hello")

