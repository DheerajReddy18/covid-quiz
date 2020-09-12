var currentquestion=0;
var score=0;
var totalquestions=questions.length;
var cq=0;
var answers=[];
var n='';

var container=document.getElementById("quiz");
var questionEL=document.getElementById("question");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var nextbutton=document.getElementById("nextbutton");
var resultcont=document.getElementById("result");

function shuffle(array){
  array.sort(()=>Math.random()-0.5);
}

shuffle(questions);

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

var min,sec,msec;
var time=0
var count=setInterval(function(){
       time++;
       min=Math.floor(time/100/60);
       sec=Math.floor(time/100);
       msec=time%100;
       if(min<10)
        min="0"+min;
       if (sec>=60)
        sec=sec%60;
       if(sec<10)
        sec="0"+sec;
       document.getElementById("timer").innerHTML=min + ":"+ sec + ":" +msec;
})

function instructions(){
  alert("after choosing a answer click on next question button to save,all the best")

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
    if(q==questions[currentquestion].answer)
    document.body.style.backgroundColor="limegreen";
  else
    document.body.style.backgroundColor="red"; 
 

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
      var wrong=10-score;
      resultcont.style.display='';
      clearInterval(count);
      var highscore=storage(time);
      resultcont.textContent="hi "+n+" your score:"+score+" correct to wrong="+score+" : "+wrong +" best time ="+highscore ;
      return;
  }
  loadquestion(currentquestion);
}

var best;
function storage(time){
  if(localStorage.getItem("best")!=null)
    best=JSON.parse(localStorage.getItem("best"));
  else
    best=999999;
  if(best>time)
    best=time;  
  localStorage.setItem(("best"),JSON.stringify(best));
  min=Math.floor(best/100/60);
  sec=Math.floor(best/100);
  msec=best%100;
  if(min<10)
    min="0"+min;
  if (sec>=60)
    sec=sec%60;
  if(sec<10)
    sec="0"+sec;
  return (min + ":"+ sec + ":" +msec);
  }

function Name(){
   var name=document.getElementById("name");
   var submitbutton=document.getElementById("submit")
   name.style.display="none";
   submitbutton.style.display="none";
    n=name.value;
   

}



function loadpreviousquestion(){
   currentquestion--;
   loadquestion(currentquestion);
   document.body.style.backgroundColor="skyblue";
   var r=document.getElementsByClassName("options");
   var q=answers[currentquestion];
   r[q-1].disabled=true;
   r[q-1].checked=true;
   for (var i=0;i<4;i++)
  {
     if(r[i].checked==false)
      r[i].disabled=true;
  }
  
  if(q==questions[currentquestion].answer)
    document.body.style.backgroundColor="limegreen";
  else
    document.body.style.backgroundColor="red";
  if(question==totalquestions-1)
    {
        nextbutton.textContent="submit";

    }
    else
       nextbutton.textContent="Next question";
loadquestion(currentquestion);
  }

  loadquestion(currentquestion);