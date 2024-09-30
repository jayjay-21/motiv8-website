document.addEventListener('DOMContentLoaded', () => {
    const quoteList = document.getElementById('quote-list');
    const quoteInput = document.getElementById('quote-input');
    const submitButton = document.getElementById('submit-button');

    const quotes = [
        "Believe in yourself!",
        "Stay positive, work hard, make it happen.",
        "You are stronger than you think.",
        "Dream it. Wish it. Do it."
    ];

    function displayQuotes() {
        quoteList.innerHTML = '';
        quotes.forEach((quote) => {
            const quoteDiv = document.createElement('div');
            quoteDiv.className = 'quote';
            quoteDiv.textContent = quote;
            quoteList.appendChild(quoteDiv);
        });
    }

    submitButton.addEventListener('click', () => {
        const newQuote = quoteInput.value.trim();
        if (newQuote) {
            quotes.push(newQuote);
            quoteInput.value = '';
            displayQuotes();
        } else {
            alert("Please enter a quote.");
        }
    });

    // Initial display of quotes
    displayQuotes();
});
