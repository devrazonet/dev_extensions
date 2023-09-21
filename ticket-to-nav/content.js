var menu = document.querySelector(".navigation-menu");
var li = document.createElement('li');
var a = document.createElement('a');

a.style = 'background: #eee;border-radius: 4px;';
a.href = 'https://backoffice.razonet.com.br/painel/v1/tickets';
a.textContent = 'Meus Tickets';

li.appendChild(a);
menu.appendChild(li);
