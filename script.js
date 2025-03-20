function sendMessage() {
    const input = document.getElementById('userInput');
    const chatbox = document.getElementById('chatbox');
    const userMessage = input.value.trim();
    
    if (userMessage === '') return;

    chatbox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    input.value = '';

    // Simulating chatbot response
    setTimeout(() => {
        chatbox.innerHTML += `<p><strong>Bot:</strong> I received: ${userMessage}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
}
