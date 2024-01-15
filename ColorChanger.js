const getColor = () => {
    // Hex Code
        const randomNumber = Math.floor(Math.random() * 16777215); 
        const randomCode = "#" + randomNumber.toString(16);
        document.body.style.backgroundColor = randomCode;
        document.getElementById("colorcode").innerText = randomCode;
        
}

document.getElementById("btn").addEventListener( 
    "click",
    getColor
)

getColor();

function copyText() {
    // Get the text content
    const colorcode = document.getElementById('colorcode').innerText;

    // Create a temporary input element
    const tempInput = document.createElement('textarea');
    tempInput.value = colorcode;
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the text to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Optionally, provide visual feedback (you can customize this)
    alert('Text copied to clipboard!');
  }
