const inputs = document.querySelector(".inputs");
resetBtn = document.querySelector(".reset-btn");
ipucu = document.querySelector(".ipucu span");
yanlisHarf = document.querySelector(".yanlis-harf span");
kalanTahmin = document.querySelector(".kalan-tahmin span");
typingInput = document.querySelector(".typing-input");

let word,
  maxTahmin,
  corrects = [],
  incorrects = [];
function randomWord() {
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranObj.word;
  maxTahmin = Math.round(word.length / 2);
  corrects = [];
  incorrects = [];

  ipucu.innerText = ranObj.hint;
  kalanTahmin.innerText = maxTahmin;
  yanlisHarf.innerText = incorrects;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled />`;
  }
  inputs.innerHTML = html;
}
randomWord();

function initGame(e) {
  let key = e.target.value;
  if (
    key.match(/[\p{Letter}\p{Mark}\s-]+/gu) &&
    !incorrects.includes(` ${key}`) &&
    !corrects.includes(key)
  ) {
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === key) {
          corrects.push(key);
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      maxTahmin--;
      incorrects.push(` ${key}`);
    }
    kalanTahmin.innerText = maxTahmin;
    yanlisHarf.innerText = incorrects;
  }

  typingInput.value = "";

  setTimeout(() => {
    if (corrects.length === word.length) {
      alert("Yiğidim bu ne zekadır,MaşAllah");
      randomWord();
    } else if (maxTahmin < 1) {
      alert("Çok cahilsin keşke ölsen !!!");
      for (let i = 0; i < word.length; i++) {
        inputs.querySelectorAll("input")[i].value = word[i];
      }
    }
  });
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
