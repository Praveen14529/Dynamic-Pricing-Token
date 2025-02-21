// Simulated token price (this could be fetched from an API in a real-world scenario)
let tokenPrice = 1.00;

// Function to update the token price
function updateTokenPrice() {
  // Simulate a price change (e.g., +/- 0.01)
  const change = (Math.random() - 0.5) * 0.02;
  tokenPrice += change;
  tokenPrice = Math.max(tokenPrice, 0.01); // Ensure price doesn't go below $0.01

  // Update the price display
  document.getElementById('currentPrice').textContent = `$${tokenPrice.toFixed(2)}`;
}

// Function to handle token purchase
function buyTokens() {
  const messageElement = document.getElementById('message');
  messageElement.textContent = `You bought tokens at $${tokenPrice.toFixed(2)} each!`;
}

// Update the token price every 5 seconds
setInterval(updateTokenPrice, 5000);

// Initial price update
updateTokenPrice();

// Add event listener to the buy button
document.getElementById('buyTokens').addEventListener('click', buyTokens);