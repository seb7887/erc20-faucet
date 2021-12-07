//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RawToken is ERC20 {
    constructor() ERC20("RawToken", "RAW") {
        _mint(msg.sender, 1000 * 10**18);
    }

    function faucet(address recipient, uint amount) external {
        _mint(recipient, amount);
    }
}
