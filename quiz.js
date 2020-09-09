var currentquestion=0;
var score=0;
var totalquestions=questions.length;
var cq=0;
var answers=[];

var container=document.getElementById("quiz");
var questionEL=document.getElementById("question");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var nextbutton=document.getElementById("nextbutton");
var resultcont=document.getElementById("result");

function loadquestion(questionindex){

    var q=questions[questionindex];
    questionEL.textContent=(questionindex+1)+ '. '+q.question;
    opt1.textContent=q.option1;
    opt2.textContent=q.option2;
    opt3.textContent=q.option3;
    opt4.textContent=q.option4;



};

function check(){
    var optioncheck=document.querySelector('input[type=radio]:checked');
    var a=optioncheck.value;
    var r=document.getElementsByClassName("options");
      

      for (var i=0;i<4;i++)
      {
         if(r[i].checked==false)
          r[i].disabled=true;
      }
    if(questions[currentquestion].answer==a)
    {
      
      document.body.style.backgroundColor="limegreen";
      
      setTimeout(function(){
        alert("CORRECT");
      },500);
    
    }
    else
    { 
        document.body.style.backgroundColor="red";
        setTimeout(function(){
          alert("WRONG");
        },250);
    }
}

function loadnextquestion(){
   
    document.body.style.backgroundColor="skyblue";
    var r=document.getElementsByClassName("options");
    var c=currentquestion+1;
    var q=answers[c];
    for (var i=0;i<4;i++)
    {
       
        
        r[i].disabled=false;
    }
    if(q>0)
    {
      
      
      r[q-1].checked=true;
      for (var i=0;i<4;i++)
      {
        if(r[i].checked==false)
            r[i].disabled=true;
      }       
    
    }
   else
   { 
    var selectedoption=document.querySelector('input[type=radio]:checked');
    if(!selectedoption){
        alert("select ur answer");
        return;
     }
     var answer=selectedoption.value;
     answers.push(answer);
     if(questions[currentquestion].answer==answer)
    {
        
        score+=1;

    }
    selectedoption.checked=false;
  }  
    ++currentquestion;
    cq++;
    
    if(currentquestion==totalquestions-1)
    {
        nextbutton.textContent="submit";

    }
    if(currentquestion==totalquestions)
    {
        container.style.display='none';
        resultcont.style.display='';
        resultcont.textContent="your score:"+score;
        return;
    }
   
    

    loadquestion(currentquestion);
  
}

function loadpreviousquestion(){
   currentquestion--;
   loadquestion(currentquestion);
   document.body.style.backgroundColor="skyblue";
   var r=document.getElementsByClassName("options");
   var q=answers[currentquestion];
  for (var i=0;i<4;i++)
  {
     if(r[i].checked==false)
      
      r[i].disabled=true;
  }
  
  r[q-1].disabled=false;
   if(r[q-1].checked!=true)   
   {
   
    r[q-1].checked=true;
   }
  if(question==totalquestions-1)
    {
        nextbutton.textContent="submit";

    }
    else
       nextbutton.textContent="Next question";



}
loadquestion(currentquestion);