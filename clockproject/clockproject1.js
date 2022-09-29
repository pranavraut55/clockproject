let a;
let date;
let time;
const options = { weekday: 'long' , year: 'numeric' , month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    let date = a.toLocaleDateString(undefined, options);
    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = "<br>On Date: "+ date +"<br>Time: "+ time;
}, 1000);

// document.getElementById("stz").addEventListener("click", doThis);

// function doThis(){
//     let para=document.createElement("p");
//     let paraadt=document.createTextNode("Time is now now");
//     para.appendChild(paraadt);
//     document.getElementById.appendChild(para);

// }

document.getElementById("stz").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("1").innerHTML = Date();
}