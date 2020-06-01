<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <QuestionBox
            v-if="questions.length"
            :current-question="questions[index]"
            :question-number="index"
            :next="next"
            :increment="increment"
            :num-total="numTotal"
            :num-correct="numCorrect"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import QuestionBox from '~/components/QuestionBox.vue'

export default {
  name: 'App',
  components: {
    QuestionBox
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0
    }
  },
  mounted: function() {
    fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple', {
      method: 'get'
    })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.questions = jsonData.results
        this.numTotal = jsonData.results.length
      })
  },
  methods: {
    next() {
      this.index++
    },
    previous() {
      this.index--
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}


.normal,
.normal mark,
.normal em,
.normal b,
.normal strong,
.normal p {
  font-family: "Roboto", sans-serif;
  line-height: 1.929;
  font-size: 14px;
  font-style: normal;
  margin-bottom: 0px;
  color: #888888;
  background-color: transparent;
  font-weight: 400;
}

.detailed {
  font-family: "Roboto", sans-serif;
  line-height: 1.929;
}
</style>
