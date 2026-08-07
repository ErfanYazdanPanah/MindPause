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


// انتخاب پیام تصادفی
message.textContent =
    messages[Math.floor(Math.random() * messages.length)];


// تنظیم دایره
const totalLength = 596;
circle.style.strokeDasharray = totalLength;


function updateCircle(){

    const offset =
        totalLength -
        (timeLeft / 15) * totalLength;

    circle.style.strokeDashoffset = offset;

}



const countdown = setInterval(() => {


    timeLeft--;

    timer.textContent = timeLeft;


    updateCircle();



    if(timeLeft <= 0){

        clearInterval(countdown);


        const params =
            new URLSearchParams(
                window.location.search
            );


        const target =
            params.get("target");



        if(target){

            window.location.href =
                decodeURIComponent(target);

        }

    }


},1000);
