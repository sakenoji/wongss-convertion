// Exchange rates (example values)
const exchangeRates = {
    USD: { USD: 1, IDR: 15800, EUR: 0.85, JPY: 110 },
    IDR: { USD: 0.000067, IDR: 1, EUR: 0.000057, JPY: 0.0073 },
    EUR: { USD: 1.18, IDR: 17500, EUR: 1, JPY: 130 },
    JPY: { USD: 0.0091, IDR: 137, EUR: 0.0077, JPY: 1 }
  };
  
  // Conversion logic
  document.getElementById('convertBtn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    // Validate input
    if (isNaN(amount) || amount <= 0) {
      document.getElementById('result').textContent = 'Please enter a valid amount.';
      return;
    }
  
    // Handle same currency conversion
    if (fromCurrency === toCurrency) {
      document.getElementById('result').textContent = `Converted Amount: ${amount.toFixed(2)} ${toCurrency}`;
      return;
    }
  
    // Perform conversion
    const fromRate = exchangeRates[fromCurrency];
    const rate = fromRate[toCurrency];
  
    if (rate) {
      const convertedAmount = (amount * rate).toFixed(2);
      document.getElementById('result').textContent = `Converted Amount: ${convertedAmount} ${toCurrency}`;
    } else {
      document.getElementById('result').textContent = 'Conversion rate not available.';
    }
  });
  