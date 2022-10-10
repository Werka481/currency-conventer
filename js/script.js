{
    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const exchangeElement = document.querySelector(".js-exchange");

        const amount = amountElement.value;
        const exchange = exchangeElement.value;

        const result = amount / exchange;

        let currency = exchangeCurrency(exchange);
        updateResultText(result, currency);
    }

    const exchangeCurrency = (exchange) => {
        let currency;

        switch (exchange) {
            case "4.86":
                currency = "EUR";
                break;
            case "4.95":
                currency = "USD";
                break;
            default:
                currency = "GBP";
        }
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
