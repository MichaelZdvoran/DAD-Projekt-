function createTicket() {
    let title = document.getElementById('ticketTitle').value;
    let description = document.getElementById('ticketDescription').value;
    if (title && description) {
        let ticketDiv = document.createElement('div');
        ticketDiv.className = 'ticket';
        ticketDiv.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
        document.getElementById('tickets').appendChild(ticketDiv);
        document.getElementById('ticketTitle').value = '';
        document.getElementById('ticketDescription').value = '';
    } else {
        alert('Vyplňte všechna pole!');
    }
}