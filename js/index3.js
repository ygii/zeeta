const title = document.querySelector('.title')
const text = 'Cantik, Indah, Menawan, Manis, Geulis, dan Ayu. bisa disederhanakan dalam satu makna "KAMU"'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 1; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});