{
    const calculateResult = (amount, currency) => {
        const EUR = 4.72;
        const USD = 4.37;
        const GBP = 5.27;

        switch (currency) {
            case "EUR":
                return amount / EUR;

            case "USD":
                return amount / USD;

            case "GBP":
                return amount / GBP;
        }
    };

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.value = `${result.toFixed(2)}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
