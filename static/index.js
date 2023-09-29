console.log("running");

const executeButton = document.getElementById('executeButton');
if (executeButton){
    executeButton.addEventListener('click', () => {
    const command = executeButton.getAttribute('data-command');
    console.log(command);
    //send http request to server
    send_http_request(command);    
    alert("Command Submitted!");
});
}

function send_http_request(command){
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
}