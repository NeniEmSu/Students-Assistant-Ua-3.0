<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">
          {{ question }}
        </h3>
        <div class="card-text">
          <div class="col-sm">
            <button
              class="btn btn_1"
              style="margin: 10px"
              @click="onAnswer(btnData[0].correct)"
            >
              {{ btnData[0].answer }}
            </button>
          </div>
          <div class="col-sm">
            <button
              class="btn btn_1"
              style="margin: 10px"
              @click="onAnswer(btnData[1].correct)"
            >
              {{ btnData[1].answer }}
            </button>
          </div>

          <div class="col-sm">
            <button
              class="btn btn_1"
              style="margin: 10px"
              @click="onAnswer(btnData[2].correct)"
            >
              {{ btnData[2].answer }}
            </button>
          </div>
          <div class="col-sm">
            <button
              class="btn btn_1"
              style="margin: 10px"
              @click="onAnswer(btnData[3].correct)"
            >
              {{ btnData[3].answer }}
            </button>
          </div>
          <div class="col-sm">
            <button
              class="btn btn_1"
              style="margin: 10px"
              @click="onAnswer(btnData[4].correct)"
            >
              {{ btnData[4].answer }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const MODE_ADDITION = 1
const MODE_SUBTRACTION = 2
export default {
  data () {
    return {
      question: 'Oops, an error occured :/',
      btnData: [
        { correct: true, answer: 0 },
        { correct: false, answer: 0 },
        { correct: false, answer: 0 },
        { correct: false, answer: 0 },
        { correct: false, answer: 0 }
      ]
    }
  },
  created () {
    this.generateQuestion()
  },
  methods: {
    generateQuestion () {
      const firstNumber = this.generateRandomNumber(1, 100)
      const secondNumber = this.generateRandomNumber(1, 100)
      const modeNumber = this.generateRandomNumber(1, 2)
      let correctAnswer = 0
      switch (modeNumber) {
        case MODE_ADDITION:
          correctAnswer = firstNumber + secondNumber
          this.question = `What's ${firstNumber} + ${secondNumber}?`
          break
        case MODE_SUBTRACTION:
          correctAnswer = firstNumber - secondNumber
          this.question = `What's ${firstNumber} - ${secondNumber}?`
          break
        default:
          correctAnswer = 0
        // this.question = 'Oops, an error occurred :/';
      }
      this.btnData[0].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer)
      this.btnData[0].correct = false
      this.btnData[1].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer)
      this.btnData[1].correct = false
      this.btnData[2].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer)
      this.btnData[2].correct = false
      this.btnData[3].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer)
      this.btnData[3].correct = false
      this.btnData[4].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer)
      this.btnData[4].correct = false
      const correctButton = this.generateRandomNumber(0, 4)
      this.btnData[correctButton].correct = true
      this.btnData[correctButton].answer = correctAnswer
    },
    generateRandomNumber (min, max, except) {
      const rndNumber = Math.round(Math.random() * (max - min)) + min
      if (rndNumber === except) {
        return this.generateRandomNumber(min, max, except)
      }
      return rndNumber
    },

    onAnswer (isCorrect) {
      this.$emit('answered', isCorrect)
    }
  }
}
</script>
