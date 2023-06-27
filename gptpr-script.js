function sendMessage() {
    var message = document.getElementById("message").value;
    
    // Send request to the ChatGPT API
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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' // Replace with your ChatGPT API key
        },
        body: JSON.stringify({
            'messages': [{'role': 'system', 'content': 'You: ' + message}]
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('API request failed.');
        }
        return response.json();
    })
    .then(data => {
        var reply = data.choices[0].message.content.trim();
        document.getElementById("response").innerHTML += '<p><strong>AI: </strong>' + reply + '</p>';
        document.getElementById("error").innerHTML = ''; // Clear any previous error message
        document.getElementById("message").value = ''; // Clear the input field
    })
    .catch(error => {
        console.error(error);
        document.getElementById("error").innerHTML = 'An error occurred. Please try again.'; // Display error message
    });
}
