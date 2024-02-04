const API_KEY = "2e8500aa3e1463725c092741" ;
const BASE_URL = "https://v6.exchangerate-api.com/v6/2e8500aa3e1463725c092741/latest/USD";
    // Fetch supported currencies
    fetch(`${BASE_URL}/symbols?access_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.symbols);
            populateCurrencySelects(currencies);
        });
    function populateCurrencySelects(currencies) {
        const fromCurrencySelect = document.getElementById('fromCurrency');
        const toCurrencySelect = document.getElementById('toCurrency');
        currencies.forEach(currency => {
            const option = document.createElement('option');
            option.value = currency;
            option.text = currency;
            fromCurrencySelect.add(option);
            
            const option2 = document.createElement('option');
            option2.value = currency;
            option2.text = currency;
            toCurrencySelect.add(option2);
        });
    }
    function convertCurrency() {
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;
        const amount = document.getElementById('amount').value;
        fetch(`${BASE_URL}/pair/${fromCurrency}/${toCurrency}?amount=${amount}&access_key=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                const result = document.getElementById('result');
                result.textContent = `${amount} ${fromCurrency} is equal to ${data.result} ${toCurrency}`;
            });
    }
    function switchCurrencies() {
        const fromCurrencySelect = document.getElementById('fromCurrency');
        const toCurrencySelect = document.getElementById('toCurrency');
        const temp = fromCurrencySelect.value;
        fromCurrencySelect.value = toCurrencySelect.value;
        toCurrencySelect.value = temp;
        convertCurrency();
    }