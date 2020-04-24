export class Count {
  private count: number;

  constructor() {
    this.count = 1;
  }

  increaseCount() {
    return this.count++;
  }

  decreaseCount() {
    return this.count > 0 && this.count--;
  }
}
