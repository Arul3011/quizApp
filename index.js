const questions=[
    
    {
    
    question : "What is the missing number in the sequence: 2, 6, 12, 20, ?",
    
    options: [
        {text:"24", correct: false},
        {text:"26", correct: false},
        {text:"28", correct: true},
        {text:"30", correct: false},
        ],
    
    },
    
    {
    
    question: "If 3 people can build 3 houses in 3 days, how many days will it take 6 people to build 6 houses?",
    
    options: [
        {text:"3", correct: true},
        {text:"6", correct: false},
        {text:"9", correct: false},
        {text:"12", correct: false},
        ]
    },
    
    {
    
    question: "What is the next letter in the series: M, V, E, M, J, ?",
    
    options: [
        {text:"D", correct: false},
        {text:"F", correct: false},
        {text:"L", correct: true},
        {text:"S", correct: false},
        ],
    },
    
    {
    
        question: "Which number should come next in the series: 1, 4, 9, 16, ?",
    
    options: [
        {text:"25", correct: false},
        {text:"30", correct: false},
        {text:"36", correct: false},
        {text:"49", correct: true},
        ]
    },
    
    {
    
    question: "If all the 6 brothers share a cake equally, they get 1/6 of the cake each. How many cakes would 5 brothers get?",
    
    options: [
        {text:"5/6", correct: false},
        {text:"1", correct: false},
        {text:"5", correct: false},
        {text:"6", correct: true},
        ],
    
    }
    
    ];
let score = 0
let currentindex = 0;
const nxtbtnn = document.getElementById('nextbtn');
const btnflead = document.getElementById("answers");
const quextarea = document.getElementById('question');
const ansscore = document.querySelectorAll('#answers > button');
const resultBtn = document.getElementById('submitBtn');
const startBtnFeald =document.getElementById('start');
const questBtnFeald =document.getElementById('quizFeld');
const startBtn =document.getElementById('strtBtn');
const Reatartbtn =document.getElementById('RESTARTbtn');
const Scoreres =document.getElementById('SCOREres');
const resultfeld = document.getElementById('rel');
rel.style.display='none';
function displayQuestion(index) {//main functionon
    let questionEl = questions[index].question;// set value from json
    let options = questions[index].options;// set value from json

    btnflead.innerHTML = ''; // Clear previous options
   
    options.forEach((value) => {
        let button = document.createElement('button');//create button 
        button.className = 'd-flex';
        button.innerText = value.text;
        button.value = value.correct;
        button.id='vava';
        
        btnflead.appendChild(button);
        button.addEventListener('click',(e)=>{ 
        
            button.className = 'checked';
           if(button.value=== 'true'){// check answer 
            score = score+1;     
           };
           Array.from(btnflead.children).forEach(button => {
               button.disabled='true';
            
           });
        });
        
        
        
    });
  
    quextarea.innerText = questionEl;//append questio

    if (index===questions.length-1) {
         nxtbtnn.className='d-flex-btn-dis';       
   };
   if(index===questions.length-1) {
        resultBtn.className='d-flex-btn-dip';
   };
  

}

displayQuestion(currentindex);


nxtbtnn.addEventListener('click', () => {//change next question
    currentindex = currentindex + 1;
    displayQuestion(currentindex);
});
resultBtn.addEventListener('click', () => {//result page divetor

  rel.style.display='block';
  questBtnFeald.style.display='none';
  Scoreres.innerText=score;
});


startBtn.addEventListener('click',()=>{
  questBtnFeald.style.display='block';
  startBtnFeald.style.display='none';

})

    Reatartbtn.addEventListener('click',()=>{
      location.reload();
    });
