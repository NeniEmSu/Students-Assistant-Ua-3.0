<template>
  <div class="question-box-container mt-5 pt-5">
    <!-- eslint-disable vue/no-v-html -->
    <div class="mb-3">
      <h1 class="mt-4">
        {{ title }}
      </h1>
      <p>
        Question: {{ questionNumber+1 }}/{{ numTotal }}
      </p>
      <b-tabs v-model="tabIndex" content-class="mt-3">
        <b-tab
          :title="(currentQuestion.number).toString()"
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
            v-html="currentQuestion.q_Highlighted"
          />
        </b-tab>
        <b-badge
          v-if="currentQuestion.subject"
          pill
          variant="dark"
        >
          {{ currentQuestion.subject }}
        </b-badge>
        <div v-if="currentQuestion.years" class="d-inline">
          <b-badge
            v-for="(year, i) in currentQuestion.years"
            :key="i"
            class="ml-1"
            pill
            variant="info"
          >
            {{ year }}
          </b-badge>
        </div>
      </b-tabs>
    </div>

    <button
      v-for="(answer, index) in shuffledAnswers"
      :id="index"
      :key="index"
      :class="answerClass(index)"
      class="choice-container p-0"
      :disabled="selectedIndex !== null || answered"
      @click.prevent="selectAnswer(index)"
    >
      <p class="choice-prefix text-uppercase">
        {{ index | charIndex }}.
      </p>
      <p class="choice-text">
        {{ answer }}
      </p>
    </button>

    <div class="mb-2">
      <b-button
        v-if="questionNumber > 0"
        variant="primary"
        @click="callPrevious()"
      >
        Previous
      </b-button>
      <b-button
        v-if="!answered"
        variant="primary"
        :disabled="selectedIndex === null || answered"
        @click="submitAnswer"
      >
        Submit
      </b-button>
      <b-button
        v-else-if="answered && questionNumber+1 !== numTotal"
        variant="success"
        :disabled="autoNext"
        @click="callNext"
      >
        Next <span v-if="answered && autoNext && currentQuestion.number !== numTotal">in {{ countDown }}</span>
      </b-button>
      <p v-else>
        You've successully finished the quiz.
      </p>
    </div>

    <div class="mb-2 d-flex">
      <div class="form-check my-auto mr-3">
        <label class="form-check-label">
          <input
            id="autoCheck"
            v-model="autoCheck"
            type="checkbox"
            class="form-check-input"
            name="autoCheck"
            checked
          >
          Auto Check
        </label>
      </div>
      <div class="form-check my-auto mr-3">
        <label class="form-check-label">
          <input
            id="autoNext"
            v-model="autoNext"
            type="checkbox"
            class="form-check-input"
            name="autoNext"
            checked
          >
          Auto Next
        </label>
      </div>
      <b-button
        v-if="questionNumber > 0"
        class="ml-auto"
        variant="danger"
        @click="callResetIndex"
      >
        Reset Quiz
      </b-button>
    </div>

    <div class="form-group">
      <label for="goTo">Go to a question:</label>
      <input
        id="goTo"
        v-model.number="questionToGoTo"
        step="1"
        min="1"
        :max="numTotal"
        type="number"
        class="form-control"
        name="goTo"
        aria-describedby="goTo_helpId"
        :placeholder="`Question you want between 1 and ${numTotal}`"
      >
      <small id="goTo_helpId" class="form-text text-muted">1 - {{ numTotal }}.</small>
    </div>
    <div class="form-group">
      <b-button
        v-if="questionToGoTo"
        class="my-auto"
        variant="primary"
        :disabled="!questionToGoTo || questionToGoTo > numTotal"
        @click="goToQuestion"
      >
        Find Question
      </b-button>
    </div>

    <div v-if="reviewNumbers.length > 0" class="form-group">
      <p>Questions you failed that you might want to review:</p>
      <b-button
        v-for="(reviewNumber, index) in reviewNumbers"
        :key="index"
        class="mr-1"
        variant="danger"
        @click="goToReviewQuestion(reviewNumber)"
      >
        {{ reviewNumber+1 }}
      </b-button>
    </div>


    <div v-if="currentQuestion.reason" class="mb-2">
      <b-button
        v-b-toggle="`accordion-${currentQuestion._id}-inner`"
        size="sm"
      >
        Reason/Explanation
      </b-button>
      <b-collapse
        :id="`accordion-${currentQuestion._id}-inner`"
        class="mt-2"
      >
        <b-card>
          <div v-html="currentQuestion.reason" />
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/require-default-prop */
export default {
  filters: {
    charIndex (i) {
      return String.fromCharCode(97 + i)
    }
  },
  props: {
    currentQuestion: Object,
    numTotal: Number,
    questionNumber: Number,
    next: Function,
    previous: Function,
    resetIndex: Function,
    increment: Function,
    numCorrect: Number,
    title: String,
    reviewNumbers: Array
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
      countDown: 5,
      tabIndex: 0,
      questionToGoTo: null,
    }
  },
  computed: {
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
    autoCheck (newAutoCheck) {
      localStorage.autoCheck = newAutoCheck
    },
    autoNext (newAutoNext) {
      localStorage.autoNext = newAutoNext
    }
  },

   mounted () {
    if (localStorage.autoCheck) {
      this.autoCheck = JSON.parse(localStorage.autoCheck)  
    }
    if (localStorage.autoNext) {
      this.autoNext = JSON.parse(localStorage.autoNext)
    }
  },
  methods: {
    goToQuestion () {
      this.$emit('changedView', this.questionToGoTo-1)
      this.questionToGoTo = null
     window.scrollTo(0,100)
    },

    goToReviewQuestion (number) {
      this.$emit('changedView', number)
      this.questionToGoTo = null
      window.scrollTo(0,100)
    },

    updateReviewQuestions() {
      this.$emit('updateReviews', this.questionNumber)
    },

    selectAnswer (index) {
      this.selectedIndex = index
      if (this.autoCheck) {
        this.tabIndex = 1
        let isCorrect = false

        if (this.selectedIndex === this.correctIndex) {
          isCorrect = true
        }
        if (!isCorrect) {
          this.updateReviewQuestions()
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
      if (this.autoNext && this.questionNumber+1 !== this.numTotal) {
        this.countDownTimer()
        const self = this
        setTimeout(function () { self.tabIndex = 0, self.callNext() }, 5000)
      }
    },

    callNext (autoCallNext) {
      if (this.questionNumber+1 !== this.numTotal) {
        this.tabIndex = 0, 
        this.next()
        window.scrollTo(0,100)
      }
    },

    callPrevious () {
        this.tabIndex = 0, 
        this.previous()
        window.scrollTo(0,100)
    },

    callResetIndex () {
      this.resetIndex()
      window.scrollTo(0,100)
    },

    submitAnswer () {
      let isCorrect = false

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true
      }
      if (!isCorrect) {
        this.updateReviewQuestions()
        this.tabIndex = 1
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
      const incorrect_answers = this.currentQuestion.options.map((item) => {
        return item.value
      })
      let answers = [...incorrect_answers, this.currentQuestion.correctAnswer]
      this.shuffledAnswers = this.shuffle(answers)
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correctAnswer)
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

<style lang="scss" scoped>
.choice-container {
  display: flex;
  margin-bottom: 0.5rem;
  width: 100%;
  border: 0.1rem solid rgba(5, 13, 20, 0.25);
  background-color: white;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(86, 185, 235, 0.5);
    transform: translateY(-0.1rem);
    transition: transform 150ms;
  }
  &:disabled,
  &:disabled:hover {
    cursor: not-allowed;
    box-shadow: none;
    transform: translateY(0);
  }

  &.correct,
  &.incorrect {
    .choice-text,
    .choice-prefix {
      color: white;
    }
    
  }
}

.choice-prefix {
  padding: 0.25rem 1.25rem;
  // background-color: #56a5eb;
  // color: white;
  margin: auto 0px;
}

.choice-text {
  padding: 0.5rem;
  width: 100%;
  text-align: left;
}

.selected,
.selected:hover {
  background-color: lightblue;
}

.correct,
.correct:hover {
  background-color: #28a745;
  color: white;
}

.incorrect,
.incorrect:hover {
  background-color: #b91626;
  color: white;
}

</style>
