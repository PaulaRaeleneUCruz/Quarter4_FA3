function getUserInput() {
    let input;
    do {
        input = prompt("Please enter a number:");
        if (input === null) return null;
    } while (isNaN(input) || input.trim() === "");
    
    return parseInt(input);
}

function generateShape() {
    const num = getUserInput();
    if (num === null) return;
    
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<h3>Number inputted: ${num}</h3>`;
    
    let tableHTML = '<table border="1">';
    
    if (num % 2 === 1) {
        for (let i = num; i >= 1; i--) {
            tableHTML += '<tr><td>' + Array(num).fill(i).join(' ') + '</td></tr>';
        }
    } else {
        for (let i = num; i >= 1; i--) {
            tableHTML += '<tr><td>' + Array(i).fill(i).join(' ') + '</td></tr>';
        }
    }
    
    tableHTML += '</table>';
    outputDiv.innerHTML += tableHTML;
}

generateShape();