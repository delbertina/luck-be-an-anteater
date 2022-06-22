const cache = {};

export default class Symbol {
  constructor(name = Symbol.random()) {
    this.name = name;

    if (cache[name]) {
      this.img = cache[name].cloneNode();
    } else {
      this.img = new Image();
      this.img.src = require(`../assets/symbols/${name}.svg`);

      cache[name] = this.img;
    }
  }

  static preload() {
    Symbol.symbols.forEach((symbol) => new Symbol(symbol));
  }

  static get symbols() {
    return [
      "Apple",
      "Avocado",
      "Banana",
      "Broccoli",
      "Cactus",
      "Citrus",
      "Grapes",
      "Hazelnut",
      "Melon",
      "Nut",
      "Pear",
      "Plum",
      "Pomegranate",
      "Raspberry",
      "Tomato",
      "Watermelon",
    ];
  }

  static random() {
    return this.symbols[Math.floor(Math.random() * this.symbols.length)];
  }
}
