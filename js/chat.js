        const chatBox = document.getElementById('chat-box');
        
        // Function to toggle the chat box visibility
        function ChatBox() {
            console.log("Toggling chat box visibility"); // Debugging log to check if the function is triggered
            if (chatBox.style.display === 'block') {
                chatBox.style.display = 'none'; // Hide the chat box
            } else {
                chatBox.style.display = 'block'; // Show the chat box
            }
        }

        // Function to close the chat box
        function closeChatBox() {
            chatBox.style.display = 'none'; // Hide the chat box
        }

        // Send message function (just for demo)
        function sendMessage() {
            const messageInput = document.getElementById('message');
            alert('Message sent: ' + messageInput.value);
            messageInput.value = ''; // Clear the input
        }