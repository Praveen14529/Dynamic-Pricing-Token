pragma solidity ^0.8.0;

contract DynamicPricingToken {
    string public name = "DynamicToken";
    string public symbol = "DTK";
    uint8 public decimals = 18;

    uint256 public totalSupply;
    uint256 public tokensSold;
    uint256 public basePrice = 1 ether; // Starting price per token
    uint256 public priceIncreasePerToken = 0.01 ether; // Price increases by 0.01 ether per token sold

    mapping(address => uint256) public balanceOf;

    event Transfer(address indexed from, address indexed to, uint256 value);

    // No constructor or input fields required

    function buyTokens() public payable {
        require(msg.value > 0, "Send Ether to buy tokens");

        uint256 currentPrice = basePrice + (tokensSold * priceIncreasePerToken);
        uint256 tokensToBuy = msg.value / currentPrice;

        require(tokensToBuy > 0, "Insufficient Ether to buy tokens");

        balanceOf[msg.sender] += tokensToBuy;
        totalSupply += tokensToBuy;
        tokensSold += tokensToBuy;

        emit Transfer(address(0), msg.sender, tokensToBuy);
    }

    function getCurrentPrice() public view returns (uint256) {
        return basePrice + (tokensSold * priceIncreasePerToken);
    }
}
