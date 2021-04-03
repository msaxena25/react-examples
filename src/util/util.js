export function addTwoNumber(number1, number2) {
  return number1 + number2;
}

export function getUserName() {
  return "JS Mount";
}

export function getNameArray() {
  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push("JS-" + i);
  }
  return data;
}
