export class Count {
  private count: number;

  constructor() {
    this.count = 0;
  }

  increaseCount() {
    this.count = this.count + 1;
    return this.count;
  }

  decreaseCount() {
    if (this.count > 0) {
      this.count = this.count - 1;
    }
    return this.count;
  }
}
