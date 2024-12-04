



let sec = 0;
let timerIsRuning=false;

chrome.alarms.onAlarm.addListener((alarm) => {
    
    console.log(++sec);
    // You can add functionality here, like updating the icon or sending notifications.
    // Example:
    // chrome.action.setIcon({ path: "icons/digital-clock.png" });
});


function createAlarm(name) {
    chrome.alarms.create(name, {
        periodInMinutes: 1 / 60 // This sets the alarm to trigger every minute
    });
}


function clearAlarm(){
    chrome.alarms.clear('alarms', function() {
    });
}

chrome.contextMenus.create({
    id: "start-timer",
    title: "Start Timer",
    contexts: ["all"],
});

chrome.contextMenus.create({
    id: "reset-timer",
    title: "Reset Timer",
    contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
        case "start-timer":

        if(timerIsRuning){
            timerIsRuning= !timerIsRuning;
            return;
        }
            timerIsRuning=true;
            createAlarm("myAlarm");
            chrome.contextMenus.update("start-timer", {
                title : "Stop Timer",
                contexts: ["all"],
             })
            break;
        case "reset-timer":
            // Add functionality to reset the timer if needed
            console.log("Timer reset functionality not implemented yet.");
            break;
    }
});

// Optional: Uncomment to handle installation events if needed
// chrome.runtime.onInstalled.addListener(function (details) {
//     if (details.reason === "install") {
//         console.log("Extension installed");
//     } else if (details.reason === "update") {
//         console.log("Extension updated");
//     }
// });