const main = (params) => {
  let isPalindrome = [];
  for ( let i = 0; i < 10000; i++ ) {
    let randomWord = Math.random().toString(36).substr(2, params);
    let palindrome = randomWord.split('').reverse().join('');
    if(palindrome === randomWord) {
      isPalindrome.push(randomWord);
    }
  }
  return isPalindrome.length;
}

let rndInt = Math.floor(Math.random() * (5 - 3 + 1) + 3);
main(rndInt);
