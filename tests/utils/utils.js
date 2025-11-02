export default class UniqueRandomGenerator {
    constructor(min, max) {
        this.min = Math.ceil(min);
        this.max = Math.floor(max);
        this.usedNumbers = new Set();
    }

    getUniqueRandom() {
        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        } while (this.usedNumbers.has(randomNum));

        this.usedNumbers.add(randomNum);
        return randomNum;
    }

    reset() {
        this.usedNumbers.clear();
    }
}