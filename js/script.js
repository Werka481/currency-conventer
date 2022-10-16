{
    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const exchangeElement = document.querySelector(".js-exchange");

        const amount = amountElement.value;
        const exchangeRate = exchangeElement.value;

        const result = amount / exchangeRate;

        const currency = exchangeCurrency(exchangeRate);
        updateResultText(result, currency);
    }

    const exchangeCurrency = (exchangeRate) => {
        let currency;

        switch (exchangeRate) {
            case "4.86":
                return "EUR";
            case "4.95":
                return "USD";
            default:
                return "GBP";
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
