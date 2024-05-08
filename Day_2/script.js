let product=[
    {
    name:"samung M51",
    price:25000
}
,{
    name:"oppo 17",
    price:55000
},{
    name:"iphone 11",
    price:100000

}]

for(let i=0; i<product.length; i++){
    let parent = document.createElement('div');
parent.classList.add("product");

let pName= document.createElement("h2");
pName.innerHTML=product[i].name
let pPrise = document.createElement("h3");
pPrise.innerHTML=product[i].price;
let btn= document.createElement("button");
btn.innerText="buy"

btn.addEventListener("click",()=>{
    console.log(product[i]);
})
parent.appendChild(pName);
parent.appendChild(pPrise);
parent.appendChild(btn);
console.log(parent);


parent.style.backgroundColor = 'green';
parent.style.borderRadius = '10px';
document.getElementById('parent').appendChild(parent);

}