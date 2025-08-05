function expressionMatter(a, b, c) {

    let first = a * (b + c);
    let second = a * b * c;
    let third = a + b * c;
    let fourth = (a + b) * c;
    let fifth = a + b + c;
    return Math.max(first, second, third, fourth, fifth);
}

console.log(expressionMatter(1,6,1));

// assert.strictEqual(expressionMatter(2, 1, 2), 6); -- Done
// assert.strictEqual(expressionMatter(2, 1, 1), 4);  -- Done
// assert.strictEqual(expressionMatter(1, 1, 1), 3); -- Done
// assert.strictEqual(expressionMatter(1, 2, 3), 9); -- Done
// assert.strictEqual(expressionMatter(1, 3, 1), 5); -- Done
// assert.strictEqual(expressionMatter(2, 2, 2), 8);    