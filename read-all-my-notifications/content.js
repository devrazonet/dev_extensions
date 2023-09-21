var elements = document.querySelectorAll("#user-notifications #datatable-buttons > tbody > tr.unread > td:last-child > a");

for (var i = 0; i < elements.length; i++) {
  elements[i].click();
}

if(elements.length === 0) {
  alert("Nenhuma notificação para ser lida nesta aba.")
}else{
  alert(`${elements.length} tickets marcados como lido nesta aba.`)
}