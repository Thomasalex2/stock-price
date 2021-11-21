var purchase_price = document.querySelector("#purchase-price")
var quantity = document.querySelector("#quantity")
var current_price = document.querySelector("#current-price")
var calculate_btn = document.querySelector("#calculate-btn")
var results = document.querySelector("#results")


function changeTheme(color) {
    var root = document.querySelector(':root');
    root.style.setProperty('--primary-color', color);
}

function calculate() {
    var resultsText, absolute, percentage
    if (purchase_price.value === "" || quantity.value === "" || current_price.value === "") {
        results.innerText = "Please fill in all fields"
        results.style.display = "block"
        return
    }
    else if (purchase_price.value <=0 || quantity.value <=0 || current_price.value <=1){
        results.innerText = "Please enter valid values"
        results.style.display = "block"
        return
    }
    absolute = (current_price.value - purchase_price.value) * quantity.value
    percentage = ((absolute / quantity.value) * 100 / purchase_price.value).toFixed(2)
    if (absolute > 0) {
        resultsText = "Congratulations! You have gained in your investment! 😄\n\nAbsolute Gain: " + absolute + "\nPercentage Gain: " + percentage + "%"
    } else if (absolute < 0) {
        resultsText = "Oh no! You have lost money in your investment 😧...\n\nAbsolute Loss: " + Math.abs(absolute) + "\nPercentage Loss: " + Math.abs(percentage) + "%"
    } else if (absolute === 0) {
        resultsText = "No gain and no loss"
    }
    results.innerText = resultsText
    results.style.display = "block"
    if (percentage <= -50) {
        console.log("Huge Loss")
        changeTheme("red")
    } else if (percentage >= 50) {
        changeTheme("#059669")
    }
}

results.style.display = "none"
calculate_btn.addEventListener("click", calculate)