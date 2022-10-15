//Question 4
var question=["Where is a good dentist?","Where is the fireman?",
"Who is a good lawyer?","Who is a plumber?","Who are the firemen?",
"Why is he a good teacher?","Why is he a good teacher?",
"What are badger reporters what are good teachers?",
"How are the classes?","Why is he a good teacher?"
];

var questionDisplayField=document.getElementById("question");
var nextBtn=document.getElementById("next");
var prevBtn=document.getElementById("prev");
var counter=0;
questionDisplayField.innerHTML=question[0];
nextBtn.addEventListener("click",function(){
    if(counter<question.length-1){
        counter++;
        questionDisplayField.innerHTML=question[counter];
        
    }
    else{
        alert("no Next Question");
    }
});
prevBtn.addEventListener("click",function(){
    if(counter>0){
        counter--;
        questionDisplayField.innerHTML=question[counter];
        
    }
    else{
        alert("no prev Question");
    }
});



//Question 5
var resultBtn=document.querySelector(".calculator #result");
var clearBtn=document.getElementById("clear");
var calculatorbtns=document.querySelectorAll(".calculator > div:not(:first-of-type) #cal");
console.log(calculatorbtns);
var textField="";
for(let i=0;i<calculatorbtns.length;i++){
    
    calculatorbtns[i].addEventListener('click',function(){
        textField+=this.innerText;
        document.getElementById("claculatorField").value=textField;
    });
  
}
resultBtn.addEventListener("click",function(){
    var result=eval(document.getElementById("claculatorField").value);
    document.getElementById("claculatorField").value=result;
});

clearBtn.addEventListener("click",function(){
    document.getElementById("claculatorField").value="";
    textField="";
});
