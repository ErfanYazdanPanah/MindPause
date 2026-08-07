const messages = [
    "🌿 یک نفس عمیق بکش.",
    "🎯 هدفت از ورود به این سایت چیه؟",
    "⏳ ۱۵ ثانیه صبر کن؛ اگر هنوز خواستی، وارد شو.",
    "🧠 آیا این کار به هدفت امروز کمک می‌کند؟"
];


let timeLeft = 15;


const timer = document.getElementById("timer");
const message = document.getElementById("message");
const circle = document.getElementById("progress");


message.textContent =
messages[Math.floor(Math.random()*messages.length)];


const urlParams =
new URLSearchParams(window.location.search);


const target =
urlParams.get("target");


const length = 596;

circle.style.strokeDasharray = length;



function updateCircle(){

    let value =
    length - ((timeLeft / 15) * length);

    circle.style.strokeDashoffset=value;

}



let interval=setInterval(()=>{


    timeLeft--;

    timer.textContent=timeLeft;

    updateCircle();



    if(timeLeft<=0){

        clearInterval(interval);


        if(target){

            window.location.replace(
                decodeURIComponent(target)
            );

        }

    }


},1000);
