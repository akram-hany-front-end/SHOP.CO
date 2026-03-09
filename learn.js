/*exam-1*/ 
let btn = document.getElementById("btn")
let txt = document.getElementById("text")

btn.onclick = ()=>{
txt.innerText = txt.innerText +   " akram"
}
/*exam-2*/ 
let body = document.getElementById("body")
let colors = document.getElementById("colors")

colors.onclick = () => {
    let r = Math.floor(Math.random() * 256 )
    let g = Math.floor(Math.random() * 256 )
    let b = Math.floor(Math.random() * 256 )
    body.style.backgroundColor = `rgb(${r},${g},${b})`
}
/*exam-3*/ 
let write = document.getElementById("write")
let h1v = document.getElementById("h1v")

write.oninput = () => {
    write.addEventListener;
     h1v.innerText = write.value;
     if (write.value.length > 10) {
    h1v.style.color = "rgb(255, 0, 0)"

     } else {
    h1v.style.color = "rgb(0, 0, 0)"

     }
}
/*exam-4*/
let box = document.getElementById("box")
let hide = document.getElementById("hide")

hide.onclick = () => {
    if (    box.style.display === "none"
        

) {
box.style.display = "block"
hide.innerText = "hide"
} else {
box.style.display = "none"
hide.innerText = "show"

}
}
/*exam-5*/
let bigger =document.getElementById("bigger-font")
let klb5wl =document.getElementById("klb5wl")
let smaller =document.getElementById("smaller-font")

 let  hhh = 20

bigger.onclick = () => {

    if(hhh < 100 ) {
 hhh += 5
    klb5wl.style.fontSize = hhh + "px" ;

    }
 }
smaller.onclick = ( ) => {
    if(hhh > 10)
  {
      hhh -= 5
        klb5wl.style.fontSize = hhh + "px" ;
  }

}

 