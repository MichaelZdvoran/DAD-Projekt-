function createTicket() {
    let title = document.getElementById('ticketTitle').value;
    let description = document.getElementById('ticketDescription').value;
    if (title && description) {
        let ticketDiv = document.createElement('div');
        ticketDiv.className = 'ticket';
        let status = document.createElement('span');
        status.className = 'status';
        status.innerText = 'Odesláno';
        ticketDiv.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
        ticketDiv.appendChild(status);
        document.getElementById('tickets').appendChild(ticketDiv);
        document.getElementById('ticketTitle').value = '';
        document.getElementById('ticketDescription').value = '';
    } else {
        alert('Vyplňte všechna pole!');
    }
}