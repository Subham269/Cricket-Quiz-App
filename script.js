let timeInterval=null;
let timeLeft=30;
let score=0;
let Qindex=0;



let questions = [{
    question : "Who holds the record for the most centuries in International Cricket",
    options : ["Virat Kohli","Ricky Pointing","Sachin Tendulkar","Rohit Sharma"],
    correct : "Sachin Tendulkar"
},
{
    question : "Who holds the record for the fastest century in ODIs?",
    options : ["AB de Villiers","Virat Kohli","Rohit Sharma","Chris Gayle"],
    correct : "AB de Villiers"
},
{
    question : "Which bowler has taken the most wickets in Test cricket?",
    options : ["James Anderson","Shane Warne","Muttiah Muralitharan","Anil Kumble"],
    correct : "Muttiah Muralitharan"
},
{
    question : "Who is the only player to score a century and take a five-wicket haul in the same match on Test debut?",
    options: ["Kapil Dev","Ian Botham","Bruce Taylor","Jacques Kallis"],
    correct : "Bruce Taylor"
},
{
    question : "Which cricketer was involved in the famous “Mankading” dismissal of Jos Buttler in IPL 2019?",
    options: ["Ravichandran Ashwin","Ravindra Jadeja","Sunil Narine","Yuzvendra Chahal"],
    correct : "Ravichandran Ashwin"
},
{
    question : "Who was the first bowler to take a hat-trick in T20 Internationals?",
    options: ["Jasprit Bumrah","Brett Lee","Lasith Malinga","Dale Steyn"],
    correct : "Brett Lee"
},
{
    question : "Who is the only Indian cricketer to have played 100+ international matches in all three formats?",
    options: ["Rohit Sharma","MS Dhoni","Sachin Tendulkar","Virat Kohli"],
    correct : "Virat Kohli"
},
{
    question : "Which ground hosted the first-ever day-night Test match?",
    options: ["Eden Gardens","Adelaide Oval","Dubai International Stadium","Lord's Cricket Ground"],
    correct : "Adelaide Oval"
},
{
    question : "Who was the first cricketer to hit 6 sixes in an over in international cricket?",
    options: ["Kieron Pollard","Yuvraj Singh","Herschelle Gibbs","Tim David"],
    correct : "Herschelle Gibbs"
},
{
    question : "Which of the given below is NOT a nickname given to The Legendary MS Dhoni by his fans",
    options: ["Thala","Dhobi","Captain Cool","DRS(Dhoni Review System)"],
    correct : "Dhobi"
}];
function loadQuestion()
{
    document.getElementById("restart").style.display="none";
    timeLeft=30;
    let ques=document.getElementById("Question");
    ques.textContent=questions[Qindex].question;
    let opt=document.getElementById("options");
    opt.innerHTML="";
    questions[Qindex].options.forEach(function(option){
        let btn=document.createElement("button");
        btn.textContent=option;
        opt.appendChild(btn);
        btn.onclick= function() {checkAnswer(btn.textContent)};
    })
    startTimer();
}
function checkAnswer(answer)
{
    clearInterval(timeInterval);
    if(answer===questions[Qindex].correct)
        score++;
    document.getElementById("options").querySelectorAll("button").forEach(function(btn){
        if(btn.textContent===questions[Qindex].correct)
        {
            btn.style.background="green";
            btn.style.color="white";
        }
        else
        {
            btn.style.background="red";
            btn.style.color="white";
        }
        btn.disabled=true;
    })
    if(Qindex<10)
    {
        document.getElementById("next-btn").style.display="block";
        document.getElementById("next-btn").onclick = function () {nextone()};
    }
    
}
function nextone()
{
    Qindex++;
    if(Qindex>=10)
    {
        document.getElementById("Question").innerHTML="";
        document.getElementById("options").innerHTML="";
        document.getElementById("next-btn").style.display="none";
        document.getElementById("result").style.display="block";
        document.getElementById("result").textContent=`${score}/10`;
        document.getElementById("restart").style.display="block";
    }
    else
    {
    document.getElementById("next-btn").style.display="none";
    loadQuestion();
    }
    
}
function startTimer()
{
        timeInterval=setInterval(function() {
        timeLeft--;
        document.getElementById("timer").textContent=timeLeft;
        if(timeLeft<=0)
        {
            clearInterval(timeInterval);
            nextone();
        }
            
    },1000);
}
function restart()
{
    timeInterval=null;
    timeLeft=30;
    score=0;
    Qindex=0;
    loadQuestion();
}
loadQuestion();
