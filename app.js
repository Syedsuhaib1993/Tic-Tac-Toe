let box1 = document.querySelector('.child1')
let box2 = document.querySelector('.child2')
let box3 = document.querySelector('.child3')
let box4 = document.querySelector('.child4')
let box5 = document.querySelector('.child5')
let box6 = document.querySelector('.child6')
let box7 = document.querySelector('.child7')
let box8 = document.querySelector('.child8')
let box9 = document.querySelector('.child9')
let parent = document.getElementById('parent')
let Xwin = document.getElementById('xwin')
let Owin = document.getElementById('owin')

let counterX = 0
let counterO = 0
let flag=true
function play(ele){
    // console.log(ele);
    if(flag){
        ele.innerHTML = 'X' 
        ele.style.color="white"
        flag = false
        let xturn = document.getElementById('xturn')
        xturn.setAttribute('class','bg-red-600 text-white font-bold border-2 border-black text-2xl rounded-xl p-2 mr-2')
        oturn.setAttribute('class','border-2 border-black text-2xl rounded-xl p-2 mr-2')
        counterX++
        console.log(counterX);
        
    }else{
        ele.innerHTML = 'O'
        ele.style.color="red" 
        flag = true
        let oturn = document.getElementById('oturn')
        oturn.setAttribute('class','text-red-600 font-bold bg-black border-2 border-black text-2xl rounded-xl p-2 mr-2')
        xturn.setAttribute('class',' border-2 border-black text-2xl rounded-xl p-2 mr-2')
        counterO++
        console.log(counterO);
        
    }
  
    if((box1.innerHTML=='X' && box2.innerHTML=='X' && box3.innerHTML=='X') || 
        (box4.innerHTML=='X' && box5.innerHTML=='X' && box6.innerHTML=='X') || 
        (box7.innerHTML=='X' && box8.innerHTML=='X' && box9.innerHTML=='X') ||
        (box1.innerHTML=='X' && box4.innerHTML=='X' && box7.innerHTML=='X') ||
        (box2.innerHTML=='X' && box5.innerHTML=='X' && box8.innerHTML=='X') ||
        (box3.innerHTML=='X' && box6.innerHTML=='X' && box9.innerHTML=='X') ||
        (box1.innerHTML=='X' && box5.innerHTML=='X' && box9.innerHTML=='X') ||
        (box3.innerHTML=='X' && box5.innerHTML=='X' && box7.innerHTML=='X')){
        Xwin.style.display="block"
        parent.style.display="none"
            parent.setAttribute('class',"pointer-events-none h-[50%] justify-self-center bg-gradient-to-r from-cyan-500 to-blue-500 ...")

}else 
    if((box1.innerHTML=='O' && box2.innerHTML=='O' && box3.innerHTML=='O') || 
    (box4.innerHTML=='O' && box5.innerHTML=='O' && box6.innerHTML=='O') || 
    (box7.innerHTML=='O' && box8.innerHTML=='O' && box9.innerHTML=='O') ||
    (box1.innerHTML=='O' && box4.innerHTML=='O' && box7.innerHTML=='O') ||
    (box2.innerHTML=='O' && box5.innerHTML=='O' && box8.innerHTML=='O') ||
    (box3.innerHTML=='O' && box6.innerHTML=='O' && box9.innerHTML=='O') ||
    (box1.innerHTML=='O' && box5.innerHTML=='O' && box9.innerHTML=='O') ||
    (box3.innerHTML=='O' && box5.innerHTML=='O' && box7.innerHTML=='O')) {
        parent.style.display="none"
        Owin.style.display="block"
            parent.setAttribute('class',"pointer-events-none h-[50%] justify-self-center bg-gradient-to-r from-cyan-500 to-blue-500 ...")
    }
 if(box1.innerHTML){
        box1.style.pointerEvents = "none"; 
    }
 if(box2.innerHTML){
        box2.style.pointerEvents = "none"; 
    }
 if(box3.innerHTML){
        box3.style.pointerEvents = "none"; 
    }
 if(box4.innerHTML){
        box4.style.pointerEvents = "none"; 
    }
 if(box5.innerHTML){
        box5.style.pointerEvents = "none"; 
    }
 if(box6.innerHTML){
        box6.style.pointerEvents = "none"; 
    }
 if(box7.innerHTML){
        box7.style.pointerEvents = "none"; 
    }
 if(box8.innerHTML){
        box8.style.pointerEvents = "none"; 
    }
 if(box9.innerHTML){
        box9.style.pointerEvents = "none"; 
    }
}
