function rps (p1, p2) {
    if (p1 === p2) return `Draw!`;
    let rules = {
        rock: "scissors",
        scissors: "paper",
        paper: "rock",
    };
    // player 2 (Paper) === rules[scissors]
    return (p2 === rules[p1]) ? `Player 1 won!` : `Player 2 won!`;
}
console.log(rps("scissors", "paper"));

// another way with Regular Expression
const RPS = (p1,p2) => {
    if (p1 === p2) return `Draw!`; 
    return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)?1:2} won!`;
}
console.log(RPS("paper", "scissors"));