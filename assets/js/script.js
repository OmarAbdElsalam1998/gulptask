// Question 1 Change images Opacity When Mouse Over It
//when mouse over on image function
over=(e)=>{
    var opacity=1;
    var interval=setInterval(function(){
        if(opacity>0.3){
        e.style.opacity=opacity;
        opacity=opacity-0.1;
        }
        else{
            clearInterval(interval);
        }
    },100);
}
//when mouse out from image function

out=(e)=>{
    var opacity=0.3;
   var int=setInterval(function(){
        if(opacity<=1){
        e.style.opacity=opacity;
        opacity=opacity+0.1;
        }
        else{
        clearInterval(int);

        }
    },100);
}

var imagesCollection=document.querySelectorAll(".image-opacity .img img");
for(let i=0;i<imagesCollection.length;i++){
    imagesCollection[i].addEventListener('mouseover',function(){
            over(this);
    
    });
    imagesCollection[i].addEventListener('mouseout',function(){
        out(this);
    
    });
}



//Start Question 2 change span color and background Randomly

//get RandomNumber in given range{x,y}
getRandomNumber=(min,max)=>{
    return Math.floor(Math.random() * (max - min)) + min;
}
//Array Of Colors
var colors=["red","green","blue","orange","black","brown",
"dodgerblue","gray","yellow","#526e2d"];

var spanCollection=document.querySelectorAll(".question2 span");
console.log(spanCollection);
var changeColorBtn=document.getElementById("changeColorBtn");
//On ChangeColor Button Click event
changeColorBtn.addEventListener('click',function(){
    var colorsCopy=Array(...colors);
    var colorsCopy2=Array(...colors);
    for(let i=0;i<spanCollection.length;i++){
        var randomnum=getRandomNumber(0,colorsCopy.length);
        console.log(randomnum);
        spanCollection[i].style.backgroundColor=colorsCopy[randomnum];
         colorsCopy.splice(randomnum,1);
        var randomnum2=getRandomNumber(0,colorsCopy2.length);
        spanCollection[i].style.color=colorsCopy2[randomnum2];
        colorsCopy2.splice(randomnum2,1);


    }
});


//
function toggleClass(x) {
    if (x.classList.contains('fa-eye-slash')) {
      x.classList.remove('fa-eye-slash');
      x.classList.add('fa-eye');

    } else {
        x.classList.add('fa-eye-slash');
        x.classList.remove('fa-eye');
    }
}
var showHidePasswordButton=document.getElementById("showHidePassword");
var eye=document.getElementsByClassName("fa-solid")[0];
var password=document.querySelector("input[type='password']");
showHidePasswordButton.addEventListener('click',function(){
    if(eye.classList.contains('fa-eye-slash')){
        toggleClass(eye);
        password.setAttribute('type','text')

    }
    else{
        toggleClass(eye);
        password.setAttribute('type','password');
    }
});



