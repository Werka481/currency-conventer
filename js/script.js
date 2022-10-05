let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let buttonElement = document.querySelector(".js-submit");
let resultElement = document.querySelector(".js-result");
let exchangeElement = document.querySelector(".js-exchange");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let exchange = exchangeElement.value;

    let result = amount / exchange;

    let currency = currencyElement.value;

    switch (currency) {
        case "4.86":
            currencyElement.innerText = "EUR";
            break;
        case "4.95":
            currencyElement.innerText = "USD";
            break;
        default:
            currencyElement.innerText = "GBP";
    }
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
})
