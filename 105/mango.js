function mango(quantity, price) {
    let offer = Math.floor(quantity / 3); // 3
    return (quantity - offer) * price;
}

console.log(mango(5,3));

