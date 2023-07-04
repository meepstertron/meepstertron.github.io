const urlParams = new URLSearchParams(window.location.search);
const key = urlParams.get('key');
console.log(key);

var send = function(textin){
    fetch( `https://api.openai.com/v1/chat/completions`,
    {
      body: JSON.stringify({
        “model”: “gpt-3.5-turbo”,
          “messages”: [
            {role: “system”, content: “You are the chatbot of a website called moleculARweb, which provides educational material for chemistry using commodity augmented reality. You answer questions about the website, about chemistry, science, etc.”},
            {role: “user”, content: “What is the formula of acetic acid?”},
            {role: “assistant”, content: “The formula of acetic acid is CH3COOH”},
            {role: “user”, content: textin}
          ],
          “temperature”: 0.3,
          “max_tokens”: 2000
        }), 
        method: “POST”,
        headers: {
        “content-type”: “application/json”,
        Authorization: “Bearer “ + key,
      }
    }).then((response) => {
      console.log(response) //If you want to check the full response
      if (response.ok) {
        response.json().then((json) => {
          console.log(json);  //If you want to check the response as JSON
          console.log(json.choices[0].message.content) //HERE'S THE CHATBOT'S RESPONSE
        });
      }
    });
   }