console.log("running");

const executeButton = document.getElementById('executeButton');
executeButton.addEventListener('click', () => {
    const command = 'echo "Hello, World!"';

    //send http request to server
    fetch('/execute-command', {
        method: 'POST',
        body: JSON.stringify({command}),
        headers: {
            'Content-Type': 'application/json'            
        }
    })
    .then(response => response.json())
    .then(data => {

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Result: ${data.result}`;
    })
    .catch(error => {
    console.error('Error:', error);
    })

    alert("Command Submitted!");
});