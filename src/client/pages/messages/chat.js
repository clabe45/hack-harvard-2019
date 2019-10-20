const socket = io('http://localhost:4000');
const messageForm = document.getElementById('sendForm');
const messageInput = document.getElementById('message-input');

const name = prompt('input name')
socket.on('chat-message', data => {
    appenedMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
    appenedMessage(`${name} conneceted`);
})
socket.on('user-disconnected', name => {
    appenedMessage(`${name} disconneceted`);
})


messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.nodeValue;
    appendMessage(`you: ${message}`);
    socket.emit('send-chat-message', message);
    messageInput = '';
})

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);

}