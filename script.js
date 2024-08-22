const judulUcapan = document.querySelector(".textUcapan");
const judulText = ["Chef Shopiah", "Ai Sopiah", "Pembully", "Perut Karet"];
let judulTextIndex = 0;
let judulTextIndexChar = 0;
let textJudulFirst = "Happy Birthday Yang ke 21";
let textJudulFirstIndex = 0;

function sound() {
  judulFirst();
  document.getElementById("buttonClick").style.display = "none";
  const audioMp = document.getElementById("audio");
  audioMp.play();
}

function judulFirst() {
  judulUcapan.innerHTML = `${textJudulFirst.slice(0, textJudulFirstIndex)}`;
  if (textJudulFirstIndex !== textJudulFirst.length) {
    textJudulFirstIndex++;
    setTimeout(judulFirst, 250);
  } else {
    setTimeout(judul, 250);
    setTimeout(textFunct, 500);
  }
}
function judul() {
  // Menampilkan teks pertama dan sebagian teks judul berikutnya dengan highlight
  judulUcapan.innerHTML = `${textJudulFirst} <span style="background-color: red; border-radius: 7px;">${judulText[
    judulTextIndex
  ].slice(0, judulTextIndexChar)}</span>`;

  // Memastikan bahwa seluruh teks pertama telah selesai ditampilkan
  if (textJudulFirstIndex === textJudulFirst.length) {
    // Jika seluruh teks dalam array judulText sudah selesai ditampilkan
    if (judulTextIndexChar === judulText[judulTextIndex].length) {
      // Fungsi untuk menghapus karakter satu per satu
      function charJudul() {
        judulTextIndexChar--; // Mengurangi indeks karakter
        judulUcapan.innerHTML = `${textJudulFirst} <span style="background-color: red; border-radius: 7px;">${judulText[
          judulTextIndex
        ].slice(0, judulTextIndexChar)}</span>`;

        let setTimeoutchar = setTimeout(charJudul, 100);

        // Jika semua karakter telah dihapus
        if (judulTextIndexChar === 0) {
          clearTimeout(setTimeoutchar); // Menghentikan penghapusan karakter
          judulTextIndex++; // Pindah ke teks berikutnya

          // Jika sudah mencapai akhir array, reset indeks
          if (judulTextIndex === judulText.length) {
            judulTextIndex = 0;
          }

          // Mulai kembali pengetikan dari awal
          setTimeout(judul, 250);
        }
      }

      // Mulai menghapus karakter satu per satu
      setTimeout(charJudul, 250);
    } else {
      // Jika teks masih harus ditampilkan, lanjutkan pengetikan karakter
      judulTextIndexChar++;
      setTimeout(judul, 250);
    }
  }
}

const text = document.getElementsByClassName("Komentar")[0];
const text2 = document.getElementsByClassName("Komentar")[1];
let textIsi =
  "Kamu adalah orang yang paling saya kagumi sejak dulu—seorang wanita yang begitu kuat, bijaksana, dan penuh kasih. Setiap langkahmu selalu menginspirasi, dan aku merasa beruntung bisa mengenal sosok sepertimu.";
let textIsi2 =
  "Tuan Putri, pada hari istimewa ini, izinkan hamba menyampaikan ucapan selamat ulang tahun dengan penuh hormat dan doa terbaik. Semoga Tuan Putri senantiasa diberkahi kesehatan, kebahagiaan, dan kebijaksanaan yang semakin bertambah seiring bertambahnya usia. Semoga Tuan Putri terus menjadi inspirasi bagi banyak orang, sebagaimana kebesaran yang diwarisi dari ibunda tercinta. Hamba sangat beruntung dapat menyaksikan perjalanan hidup Tuan Putri yang penuh keanggunan dan kebaikan. Selamat ulang tahun ke-21, Tuan Putri Ai Sopiah. Semoga perjalanan hidup Tuan Putri selalu dipenuhi berkah dan kesuksesan.";
let textIndex = 0;
let textIndex2 = 0;
function textFunct() {
  text.innerHTML = textIsi.slice(0, textIndex);
  let textSetTimeOut = setTimeout(textFunct, 50);
  if (textIndex === textIsi.length) {
    clearTimeout(textSetTimeOut);
    setTimeout(textFunct2, 50);
  } else {
    textIndex++;
  }
}

function textFunct2() {
  text2.innerHTML = textIsi2.slice(0, textIndex2);
  let textSetTimeOut = setTimeout(textFunct2, 100);
  if (textIndex2 === textIsi2.length) {
    clearTimeout(textSetTimeOut);
    const footer = document.getElementById("pertanyaan");
    footer.style.display = "inline";
  } else {
    textIndex2++;
  }
}

const bodyEl = document.querySelector("body");
function tidak() {
  const Tidak1 = document.getElementById("Tidak");
  Tidak1.style.position = "relative";
  Tidak1.style.left = Math.random() * 100 + "%";
  Tidak1.style.top = Math.random() * 100 + "%";
  const image = document.createElement("img");
  image.setAttribute("src", "image.png");
  image.setAttribute("class", "monkey");
  image.style.width = "auto";
  image.style.height = "50% ";

  document.getElementById("container").appendChild(image);
}
function heartYes() {
  window.open("https://wa.me/message/4L5UCHVQBD6UP1", "_blank");
  bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    console.log(event);
    console.log(`${yPos} ${xPos}`);
    const spanEl = document.createElement("span");
    spanEl.setAttribute("class", "heart");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    document.getElementsByClassName("monkey")[0].remove();
    setTimeout(() => {
      spanEl.remove();
    }, 3000);
  });
}
