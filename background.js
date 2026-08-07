const DEFAULT_SITES = [
  "aparat.com",
  "youtube.com",
  "instagram.com",
  "x.com",
  "twitter.com",
  "reddit.com"
];


chrome.runtime.onInstalled.addListener(() => {

  chrome.storage.sync.get(["sites", "delay"], (data) => {

    if (!data.sites) {

      chrome.storage.sync.set({
        sites: DEFAULT_SITES,
        delay: 15
      });

    }

  });

});



chrome.webNavigation.onBeforeNavigate.addListener((details) => {


  // فقط صفحه اصلی تب، نه عکس و فایل و...
  if (details.frameId !== 0) return;


  const url = details.url;


  // جلوگیری از گیر افتادن در حلقه تایمر
  if (url.includes("countdown.html")) {
    return;
  }



  if (
    url.startsWith("chrome://") ||
    url.startsWith("edge://") ||
    url.startsWith("chrome-extension://")
  ) {
    return;
  }



  chrome.storage.sync.get(["sites"], (data) => {


    const sites = data.sites || DEFAULT_SITES;


    const matched = sites.some(site =>
      url.includes(site)
    );



    if (!matched) return;



    const countdownURL =
      chrome.runtime.getURL("countdown.html") +
      "?target=" +
      encodeURIComponent(url);



    chrome.tabs.update(
      details.tabId,
      {
        url: countdownURL
      }
    );


  });


});
