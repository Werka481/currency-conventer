{
    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const exchangeElement = document.querySelector(".js-exchange");

        const amount = amountElement.value;
        const exchange = exchangeElement.value;

        const result = amount / exchange;

        exchangeCurrency(currency);
    }

    const exchangeCurrency = (currency) => {
        const currency = currency.value;

        switch (currency) {
            case "4.86":
                currency.innerText = "EUR";
                break;
            case "4.95":
                currency.innerText = "USD";
                break;
            default:
                currency.innerText = "GBP";
        }
        updateResultText(result, currency);
    }

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();

}
