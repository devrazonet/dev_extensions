// background.js

browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') {
      browser.tabs.executeScript(tabId, { file: 'content.js' })
        .then(() => console.log('Código executado com sucesso'))
        .catch(error => console.error('Erro ao executar código:', error));
    }
  });
  