console.log("Hello World!")
console.log("123")
// const lis=document.querySelectorAll('li');
// lis.appendChild(editb)
// for(var i=0;i<lis.length;i++){
//     const editb=document.createElement('button');
// const editbtext=document.createTextNode('Edit')
// editb.appendChild(editbtext);
// editb.className='edit-btn'
//   lis[i].appendChild(editb)
// }
// console.log(document.getElementsByClassName)
const form=document.getElementById('myform');
const fruits=document.querySelector('.fruits');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const fruitadd=document.getElementById('fruit-to-add')
   
   // console.log(fruitadd.value)
   const newli=document.createElement('li');
   console.log(newli)
   newli.innerHTML=fruitadd.value + `<button class="delete-btn">x</button>`
   console.log(newli)
   fruits.appendChild(newli);
   console.log("Hello")
})