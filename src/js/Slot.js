import Reel from "./Reel.js";
import Symbol from "./Symbol.js";

export default class Slot {
  constructor(domElement, config = {}) {
    Symbol.preload();

    this.currentSymbols = this.getNewSymbols();

    this.nextSymbols = this.getNewSymbols();

    this.container = domElement;

    this.reels = Array.from(this.container.getElementsByClassName("reel")).map(
      (reelContainer, idx) =>
        new Reel(reelContainer, idx, this.currentSymbols[idx])
    );

    this.spinButton = document.getElementById("spin");
    this.spinButton.addEventListener("click", () => this.spin());

    this.scoreDisplay = document.getElementById("sc");

    this.autoPlayCheckbox = document.getElementById("autoplay");

    if (config.inverted) {
      this.container.classList.add("inverted");
    }

    this.config = config;
  }

  spin() {
    this.currentSymbols = this.nextSymbols;
    this.nextSymbols = this.getNewSymbols();

    this.onSpinStart(this.nextSymbols);

    return Promise.all(
      this.reels.map((reel) => {
        reel.renderSymbols(this.nextSymbols[reel.idx]);
        return reel.spin();
      })
    ).then(() => this.onSpinEnd(this.nextSymbols));
  }

  onSpinStart(symbols) {
    this.spinButton.disabled = true;

    this.config.onSpinStart?.(symbols);
  }

  onSpinEnd(symbols) {
    this.spinButton.disabled = false;

    this.config.onSpinEnd?.(symbols);

    const tempScoreString = this.scoreDisplay.textContent;
    const tempScoreNum = Math.ceil(
      Number(tempScoreString.replace(/,/g, "")) + Math.random() * 100
    );
    this.scoreDisplay.innerHTML = tempScoreNum;

    if (this.autoPlayCheckbox.checked) {
      return window.setTimeout(() => this.spin(), 200);
    }
  }

  getNewSymbols() {
    return [
      [
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
      ],
      [
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
      ],
      [
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
      ],
      [
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
      ],
      [
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
        Symbol.random(),
      ],
    ];
  }
}
