const chatbox = document.getElementById('chatbox');
const chatform = document.getElementById('chatform');
const userinput = document.getElementById('userinput');

chatform.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const userMessage = userinput.value.trim();
    if (userMessage === '') return;

    appendMessage('You', userMessage);

    setTimeout(() => {
        const aiReply = generateAIResponse(userMessage);
        appendMessage('GEN.aI', aiReply);
    }, 800);

    userinput.value = '';
});

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function generateAIResponse(userText) {
    return "That's interesting! Tell me more.";
}
