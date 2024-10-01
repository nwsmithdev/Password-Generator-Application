
const characters = 
    [
    "A","B","C","D","E","F","G","H","I","J","K",
    "L","M","N","O","P","Q","R","S","T","U","V",
    "W","X","Y","Z","a","b","c","d","e","f","g",
    "h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z", "0", "1", "2", "3",
     "4", "5", "6", "7", "8", "9","~","`","!","@","#",
     "$","%","^","&","*","(",")","_","-","+","=","{",
     "[","}","]",",","|",":",";","<",">",".","?","/"
    ];


let password1 = document.getElementById("input--one");
let password2 = document.getElementById("input--two"); 
let generateButton = document.getElementById("generate--button");
let toast = document.getElementById("toast");


generateButton.addEventListener("click", function() {
    let randomPassword1 = "";
    let randomPassword2 = ""; 
    
    for (let i = 0; i < 15; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length);
        let randomIndex2 = Math.floor(Math.random() * characters.length);
        randomPassword1 += characters[randomIndex1];
        randomPassword2 += characters[randomIndex2]; 
    }

    password1.value = randomPassword1;
    password2.value = randomPassword2;
});


function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    toast.classList.add("visible");

    setTimeout(() => {
        toast.classList.remove("visible");
        toast.classList.add("hidden");
    }, 2000);
}


function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            showToast("Copied to clipboard: " + text);
        })

        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}; 


password1.addEventListener("click", function() {
    copyToClipboard(password1.value);
});

password2.addEventListener("click", function() {
    copyToClipboard(password2.value);
});