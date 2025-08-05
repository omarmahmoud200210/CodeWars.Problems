function multiTable(number) {
  let result = "";  
  for (let i = 1; i <= 10; i++) {
    (i !== 10) ? 
    result += `${i} * ${number} = ${i*number}\n`:
    result += `${i} * ${number} = ${i*number}`;
  }
  return result;
}

multiTable(5);