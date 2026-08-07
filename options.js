const sitesBox = document.getElementById("sites");
const delayBox = document.getElementById("delay");
const saveButton = document.getElementById("save");


const defaultSites = [
    "aparat.com",
    "youtube.com",
    "instagram.com",
    "x.com",
    "reddit.com"
];



// نمایش تنظیمات قبلی

chrome.storage.sync.get(
    ["sites","delay"],
    (data)=>{


        const sites =
            data.sites || defaultSites;


        sitesBox.value =
            sites.join("\n");


        delayBox.value =
            data.delay || 15;

    }
);




// ذخیره تنظیمات

saveButton.addEventListener(
"click",
()=>{


    const sites =
        sitesBox.value
        .split("\n")
        .map(s=>s.trim())
        .filter(s=>s.length>0);



    const delay =
        Number(delayBox.value);



    chrome.storage.sync.set({

        sites:sites,

        delay:delay

    });


    saveButton.textContent =
        "✅ ذخیره شد";


    setTimeout(()=>{

        saveButton.textContent =
        "ذخیره تنظیمات";

    },1500);


});
