function generatePassword() {

    // Getting values from inputs
    let length = document.getElementById("length").value;
    let hasUpper = document.getElementById("upper").checked;
    let hasLower = document.getElementById("lower").checked;
    let hasNumber = document.getElementById("number").checked;
    let hasSymbol = document.getElementById("symbol").checked;

    // Character sets
    let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChars = "abcdefghijklmnopqrstuvwxyz";
    let numberChars = "0123456789";
    let symbolChars = "!@#$%^&*()_+";

    let allChars = "";
    let password = "";

    // Adding selected character types
    if (hasUpper) {
        allChars += upperChars;
    }
    if (hasLower) {
        allChars += lowerChars;
    }
    if (hasNumber) {
        allChars += numberChars;
    }
    if (hasSymbol) {
        allChars += symbolChars;
    }

    // Error handling if no option is selected
    if (allChars === "") {
        alert("Please select at least one option");
        return;
    }

    // Generating password
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    // Displaying password
    document.getElementById("password").value = password;
}
