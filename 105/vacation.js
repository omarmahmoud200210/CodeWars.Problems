function rentalCarCost(d) {
  // under 3 days
  if (d < 3) {
    return d * 40;
  }
  // under 7 days
  else if (d < 7) {
    return (d * 40) - 20;
  }
  // more than 7 days
  else {
    return (d * 40) - 50;
  }
}

console.log(rentalCarCost(8));