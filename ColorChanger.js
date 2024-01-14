const getColor = () => {
    // Hex Code
        const randomNumber = Math.floor(Math.random() * 16777215); 
        const randomCode = "#" + randomNumber.toString(16);
        document.body.style.backgroundColor = randomCode;
        document.getElementById("colorcode").innerText = randomCode;
        console.log(randomNumber,randomCode);
}

document.getElementById("btn").addEventListener( 
    "click",
    getColor
)

getColor();