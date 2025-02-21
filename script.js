let tokenPrice = 1.0; // Initial price
let demand = 50; // Initial demand
let userTokens = 0; // User's tokens

const tokenPriceElement = document.getElementById('tokenPrice');
const demandElement = document.getElementById('demand');
const userTokensElement = document.getElementById('userTokens');
const demandSlider = document.getElementById('demandSlider');

// Update token price based on demand
const updatePrice = () => {
    const basePrice = 1.0;
    const demandFactor = demand / 50; // Scale demand (0-2)
    tokenPrice = (basePrice * demandFactor).toFixed(2);
    tokenPriceElement.textContent = `$${tokenPrice}`;
};

// Handle demand slider changes
demandSlider.addEventListener('input', (event) => {
    demand = event.target.value;
    demandElement.textContent = demand;
    updatePrice();
});

// Handle token purchase
const buyTokens = (quantity) => {
    const cost = (tokenPrice * quantity).toFixed(2);
    alert(`You bought ${quantity} tokens for $${cost}`);
    userTokens += quantity;
    userTokensElement.textContent = userTokens;
    demand = Math.min(100, parseInt(demand) + quantity / 10); // Increase demand
    demandSlider.value = demand;
    demandElement.textContent = demand;
    updatePrice();
};

// Initialize price
updatePrice();
