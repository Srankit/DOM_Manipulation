// document.getElementById('para').innerText = "my name is ankit";

// let ele = document.getElementsByClassName('ele');
// console.log(ele);

let eles = document.getElementsByTagName('p');
let chng = eles[1].innerText = "i am an kit"

console.log(eles)
let para = document.getElementById('para');
para.style.backgroundColor = "skyblue"

let box = document.getElementById('box').innerText;
console.log(box);


// box1.style.paddingLeft="10px",box1.style.paddingRight="10px";
// console.log(box1);
// let box1= document.getElementById('box');
// box1.innerHTML = "<h1>new Hello</h1>"
// let styl= document.getElementById('box');

// event handling

function logSomthing(){
    let box1 = document.getElementById('box');
box1.innerText= "This command will commit your changes with the message All code Add. If you want to include more descriptive information in your commit message, you can use a longer message by omitting the -m option, which will open your default text editor for you to write the commit message. For example";
}
document.getElementById('box')
.addEventListener('mouseenter', logSomthing);