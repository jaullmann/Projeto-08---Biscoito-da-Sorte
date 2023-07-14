const imageInteract = document.querySelector("#closedBiscuit")
const firstFrame = document.querySelector(".frame1")
const secondFrame = document.querySelector(".frame2")
const resetButton = document.querySelector("#reset")
const messageField = document.querySelector(".frame2 p")
const biscuitMessages = [
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'Defeitos e virtudes são apenas dois lados da mesma moeda.',
  'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
  'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?',
  'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
  'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.',
  'Siga os bons e aprenda com eles.',
  'O bom-senso vale mais do que muito conhecimento.',
  'Não importa o tamanho da montanha, ela não pode tapar o sol.', 
  'A adversidade é um espelho que reflete o verdadeiro eu.'
]


imageInteract.addEventListener('click', handleTryClick)
resetButton.addEventListener('click', handleResetClick)

function handleTryClick() {
  toggleScreen()
  let random = Math.round(Math.random() * 9)
  messageField.innerHTML = biscuitMessages[random]
}

function handleResetClick() {
  toggleScreen()
}

function toggleScreen() {
  firstFrame.classList.toggle("hide")
  secondFrame.classList.toggle("hide")
}
