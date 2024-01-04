let img22
let img33
let value=0;
let myinterval
 
btn=document.getElementById('btn')
btn.classList.add('btnBlock')
btn.addEventListener('click',()=>{
  if(myinterval){
    return ;
    }
  
  else{
    myinterval=setInterval(fun,1000)
  }})
  
   
  
 
 
window.onload=function(){
  for(let i=0;i<9;i++){
     
    mole=document.createElement('div')
    mole.id=i.toString()
    
   
    main=document.getElementById('main_sections').appendChild(mole)
    
   let img=document.getElementById(i)
    img.appendChild(document.createElement('img')).src='/image/images.jpg'
    img.classList.add('pipeimage')
    h1=document.getElementById('title')
    
    h1.innerHTML='Start Game Again'
  
      
    
 
     
  
}
}
  
 
 
 


function fun(){
randomnumber=Math.floor(Math.random()*9)
randomnumber2=Math.floor(Math.random()*9)
if(randomnumber==randomnumber2){
  myfun(randomnumber+1)
  myfun2(randomnumber2)
}else{
  myfun(randomnumber)
  myfun2(randomnumber2)
}
 
}


function myfun(num){   
  if(img22){
     img22.remove() 
     
   }
   
 
  guessimg=document.getElementById(num)
   
  img=document.createElement('img')
  img.id=(num+10).toString()
  guessimg.appendChild(img).src='/image/800px-MontymoleNSMBU.webp'
  randomNum=num+10
  img22=document.getElementById(randomNum) 
  img22.addEventListener('click',myClick)
  img22.classList.add('molo')
 
}
  
function myfun2(num){   
  if(img33){
     img33.remove() 
      
   }
   
   
  guessimg=document.getElementById(num)
 
  img=document.createElement('img')
  img.id=num+20
  guessimg.appendChild(img).src='/image/PiranhaPlant.png'
  randomNum=num+20
  img33=document.getElementById(randomNum) 
  img33.addEventListener('click',myClick2)
  img33.classList.add('molo')
 
}

function myClick(){
   h1=document.getElementById('title')
   if(myinterval){
    value+=10 
    h1.innerHTML='YOUR SCORE IS:'+value
   
   } 
   
   
}

function myClick2(){
   
  location.reload()
 
  
  
  
}


 