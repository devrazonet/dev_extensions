var menu = document.querySelector(".navigation-menu");
const originalTicketMenu = document.querySelector('.navigation-menu .submenu li#tour-tickets');

if(originalTicketMenu){
    const cloneTicketMenu = originalTicketMenu.cloneNode(true);
    const setUrlTicket = 'https://backoffice.razonet.com.br/painel/v1/tickets';

    cloneTicketMenu.style.cssText = "border:4px outside #fff;background: #eee;border-radius: 4px;"
    cloneTicketMenu.querySelector('a').href = setUrlTicket;
    
    menu.appendChild(cloneTicketMenu)
}