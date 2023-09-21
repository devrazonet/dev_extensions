chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: `
        var elements = document.querySelectorAll("#user-notifications #datatable-buttons > tbody > tr.unread > td:last-child > a");
        for (var i = 0; i < elements.length; i++) {
            elements[i].click();
        }
        `
    });
});  