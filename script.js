document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");

    function sendMessage() {
        const message = userInput.value.trim();
        if (!message) return;

        // Redirect to ChatGPT with the user's message pre-filled
        window.open(`https://chat.openai.com/?q=${encodeURIComponent(message)}`, "_blank");

        // Clear input field after sending
        userInput.value = "";
    }

    // Attach event listener to button
    sendButton.addEventListener("click", sendMessage);

    // Allow "Enter" key to send message
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
