const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  let result;
  let lowerCasePhrase = this.phrase.toLowerCase();
  let splitPhrase = lowerCasePhrase.split('');
  splitPhrase.forEach((letter) => {
      let letterIndex = this.alphabet.indexOf(letter);
      if (this.alphabet.includes(letter)) {
        this.alphabet.splice(letterIndex , 1)
      }
  });

  if (this.alphabet.length === 0){
    result = true;
  } else {
    result = false;
  }

  // return result;
  return result;

};

module.exports = PangramFinder;

