// background.js

if (typeof browser !== 'undefined'){
  browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      browser.tabs.executeScript(tabId, { file: 'content.js' })
        .then(() => console.log('Código executado com sucesso'))
        .catch(error => console.error('Erro ao executar código:', error));
    }
  });
}else if (typeof chrome !== 'undefined'){
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      chrome.tabs.executeScript(tabId, { file: 'content.js' }, function(){
        if (chrome.runtime.lastError) {
          console.error('Erro ao executar código:', chrome.runtime.lastError);
        } else {
          console.log('Código executado com sucesso');
        }
      })
    }
  })
}