class Helper {
  // Simple function
  static printSum = (a, b) => {
    return a + b;
  };

  // Simple function
  static multiply = (a, b) => {
    return a * b;
  };

  // Return Promise
  static getPromiseData = () => {
    return Promise.resolve({ name: "JsMount", id: 123 });
  };
}

export default Helper;
