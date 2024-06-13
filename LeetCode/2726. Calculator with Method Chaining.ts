class Calculator {
  currentValue: number;
  constructor(value: number) {
    this.currentValue = value;
  }
  newInstance(v) {
    return new Calculator(v);
  }
  get value() {
    return new Calculator(this.currentValue);
  }
  add(value: number): Calculator {
    this.currentValue += value;
    return this;
  }

  subtract(value: number): Calculator {
    this.currentValue -= value;

    return this;
  }

  multiply(value: number): Calculator {
    this.currentValue *= value;
    return this;
  }

  divide(value: number): Calculator {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.currentValue /= value;
    return this;
  }

  power(value: number): Calculator {
    this.currentValue **= value;
    return this;
  }

  getResult(): number {
    return this.currentValue;
  }
}

console.log(new Calculator(10).add(5).subtract(7).getResult()); // 10 + 5 - 7 = 8
