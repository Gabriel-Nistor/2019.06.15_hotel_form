var submitButton = document.getElementById("submit-button");
var clearButton = document.getElementById("clear-button");

var name = document.getElementById("name");
var confirmationBox = document.getElementById("confirmation-box");

function addConfirmation() {
    var confirmationDiv = document.createElement("div");
    var thankYouText = document.createTextNode("Your reservation is complete. Please check the details bellow. A confirmation email will also be sent to you")
    var paragraph = document.createElement("p");

    confirmationDiv.appendChild(paragraph);
    paragraph.appendChild(thankYouText);
    confirmationBox.appendChild(confirmationDiv);
    
    
}

submitButton.addEventListener("click", addConfirmation);