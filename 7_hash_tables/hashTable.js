class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);

    if (!this.keyMap[index]) return undefined;

    for (let entry of this.keyMap[index]) {
      if (entry[0] === key) return entry[1];
    }
  }

  keys() {
    let keysArr = [];

    for (let mapEntry of this.keyMap) {
      if (mapEntry) {
        for (let cellEntry of mapEntry) {
          if (!keysArr.includes(cellEntry[0])) keysArr.push(cellEntry[0]);
        }
      }
    }

    return keysArr;
  }

  values() {
    let valuesArr = [];

    for (let mapEntry of this.keyMap) {
      if (mapEntry) {
        for (let cellEntry of mapEntry) {
          if (!valuesArr.includes(cellEntry[1])) valuesArr.push(cellEntry[1]);
        }
      }
    }

    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
ht.set('purple', '#DDA0DD');
ht.set('violet', '#DDA0DD');
console.log(ht.get('maroon'));
console.log(ht.get('salmon'));
console.log(ht.get('plum'));
console.log(ht.get('plummm'));
console.log(ht.keys());
