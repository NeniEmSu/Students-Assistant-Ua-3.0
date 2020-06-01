<template>
  <div class="question-box-container mt-5 pt-5">
    <div class="mb-3"> 
      <h3 class="mt-4">
        Krok 2 Questions
      </h3>
      <div>
        Score: {{ numCorrect }}/{{ numTotal }}
      </div>
      <b-tabs content-class="mt-3">
        <b-tab
          :title="(questionNumber+1).toString()"
          active
        >
          <div
            class="normal"
            v-html="currentQuestion.question"
          />
        </b-tab>

        <b-tab title="Highlight Keys">
          <div
            class="detailed"
            v-html="currentQuestion.question"
          />
        </b-tab>
        <!-- <b-badge
              pill
              variant="dark"
            >
              {{ question.subject }}
            </b-badge>
            <b-badge
              v-for="(year, i) in question.years"
              :key="i"
              pill
              variant="info"
            >
              {{ year }}
            </b-badge> -->
      </b-tabs>
    </div>

    <div
      v-for="(answer, index) in shuffledAnswers"
      :key="index"
      :class="answerClass(index)"
      class="choice-container"
      @click.prevent="selectAnswer(index)"
    >
      <p class="choice-prefix text-uppercase mb-0">
        {{ index | charIndex }}
      </p>
      <p class="choice-text mb-0">
        {{ answer }}
      </p>
    </div>

    <div class="mb-2">
      <b-button
        v-if="!answered"
        variant="primary"
        :disabled="selectedIndex === null || answered"
        @click="submitAnswer"
      >
        Submit
      </b-button>
      <b-button
        v-else-if="answered && questionNumber +1 !== numTotal"
        variant="success"
        @click="next"
      >
        Next
      </b-button>
      <p v-else>
        You've successully finished the quiz.
      </p>
    </div>

    <div class="mb-2 d-flex">
      <div class="form-check mr-2">
        <label class="form-check-label">
          <input
            id="autoCheck"
            v-model="autoCheck"
            type="checkbox"
            class="form-check-input"
            name="autoCheck"
            value="autoCheck"
            checked
          >
          Auto Check
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input
            id="autoNext"
            v-model="autoNext"
            type="checkbox"
            class="form-check-input"
            name="autoNext"
            value="autoNext"
            checked
          >
          Auto Next
        </label>
      </div>
    </div>

    <b-progress
      v-if="answered && autoNext && questionNumber +1 !== numTotal"
      :value="countDown"
      :max="max"
      show-progress
      animated
    />
  </div>
</template>

<script>
// import _ from 'lodash'

export default {
  filters: {
    charIndex (i) {
      return String.fromCharCode(97 + i)
    }
  },
  props: {
    currentQuestion: Object,
    questionNumber: Number,
    numTotal: Number,
    next: Function,
    increment: Function,
    numCorrect: Number
  },
  data: function () {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false,
      autoCheck: true,
      autoNext: true,
      max: 5,
      countDown: 5
    }
  },
  computed: {
    answers () {
      // this function is no longer used in finished code
      // it is replaced by the watch function below and the
      // shuffleAnswers method
      let answers = [...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
      return answers
    }
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler () {
        this.selectedIndex = null
        this.answered = false
        this.shuffleAnswers()
      }
    },
  },
  methods: {
    selectAnswer (index) {
      this.selectedIndex = index
      if (this.autoCheck) {
        let isCorrect = false

        if (this.selectedIndex === this.correctIndex) {
          isCorrect = true
        }
        this.answered = true

        this.increment(isCorrect)
        this.autoCallNext()
      }

    },
    countDownTimer () {
      if (this.countDown === 0) return this.countDown = 5;
      setTimeout(() => {
        this.countDown -= 1
        this.countDownTimer()
      }, 1000)
    },
    autoCallNext () {
      if (this.autoNext && this.questionNumber + 1 !== this.numTotal) {
        this.countDownTimer()
        const self = this
        setTimeout(function () { self.next() }, 5000)
      }

    },
    submitAnswer () {
      let isCorrect = false

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true
      }
      this.answered = true

      this.increment(isCorrect)
    },
    shuffle (answers) {
      for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [answers[i], answers[j]] = [answers[j], answers[i]]
      }
      return answers
    },
    shuffleAnswers () {
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
      this.shuffledAnswers = this.shuffle(answers)
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
    },
    answerClass (index) {
      let answerClass = ''

      if (!this.answered && this.selectedIndex === index) {
        answerClass = 'selected'
      } else if (this.answered && this.correctIndex === index) {
        answerClass = 'correct'
      } else if (this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = 'incorrect'
      }

      return answerClass
    }
  }
}
</script>

<style scoped>
/* .list-group {
  margin-bottom: 15px;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}

.btn {
  margin: 0 5px;
}



.correct,
.correct:hover {
  background-color: lightgreen;
}

.incorrect,
.incorrect:hover {
  background-color: red;
} */

.choice-container {
  display: flex;
  margin-bottom: 0.5rem;
  width: 100%;
  border: 0.1rem solid rgba(5, 13, 20, 0.25);
  background-color: white;
}

.choice-container:hover {
  cursor: pointer;
  box-shadow: 0 0.4rem 1.4rem 0 rgba(86, 185, 235, 0.5);
  transform: translateY(-0.1rem);
  transition: transform 150ms;
}

.choice-prefix {
  padding: 0.5rem 2.5rem;
  background-color: #56a5eb;
  color: white;
}

.choice-text {
  padding: 0.5rem;
  width: 100%;
}

.selected,
.selected:hover {
  background-color: lightblue;
}

.correct {
  background-color: #09631e;
  color: white;
}

.incorrect {
  background-color: #b91626;
  color: white;
}

.detailed {
  font-family: "Roboto", sans-serif;
  line-height: 1.929;
}

.normal,
.normal mark,
.normal em,
.normal b,
.normal strong,
.normal p {
  font-family: "Roboto", sans-serif;
  line-height: 1.929;
  font-size: 1.05rem;
  font-style: normal;
  margin-bottom: 0px;
  color: #888888;
  background-color: transparent;
  font-weight: 400;
}
</style>
