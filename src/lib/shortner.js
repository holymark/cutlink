/**
 *
 * @author Holy Mark <https://github.com/makroghop>
 * @file functions for the url shortner API
 */

function Shortner() {
  this.dictionary =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
}

/**
 *
 * @param {number} max the length of the desired id, default length is 4
 * @returns {string}
 */
Shortner.prototype.generateUniqueRandomId = function (max = 4) {
  const store = [];
  do {
    const int = Math.floor(Math.random() * 65) + 1;
    if (store.indexOf(int == -1)) store.push(int);
  } while (store.length < max);

  return store.join("");
};

/**
 *
 * @param {number} int the number that (in this case is an id) that will be decoded to a string
 * @returns {string}
 */
Shortner.prototype.encodeId = function (int) {
  let base = this.dictionary.length;
  let encoded = "";

  if (int === 0) return this.dictionary[0];

  do {
    encoded += this.dictionary[int % base];
    int = Math.floor(int / base);
  } while (int > 0);
  return this.reverseString(encoded);
};

/**
 *
 * @param {string} id an id to be decoded back
 * @returns {number}
 */
Shortner.prototype.decodeId = function (id) {
  let base = this.dictionary.length;
  let decoded = 0;
  let index = 0;

  while (index < id.split("").length) {
    decoded = decoded * base + this.dictionary.indexOf(id.charAt(index));
    ++index;
  }
  return decoded;
};

/**
 *
 * @param {string} str reverse a given string
 * @returns {string}
 */
Shortner.prototype.reverseString = function (str) {
  let reversedStr = "",
    i = str.length - 1;

  while (i >= 0) {
    reversedStr += str.charAt(i);
    --i;
  }
  return reversedStr;
};

module.exports = Shortner;
