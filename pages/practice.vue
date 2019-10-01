<template>
  <div id="testPractice3">
    <div class="container hidden">
      <div
        id="home"
        class="flex-center flex-column"
      >
        <h1>Quick Quiz</h1>
        <a
          class="btn"
          href="/game.html"
        >Play</a>
        <a
          class="btn"
          href="/highscores.html"
        >High Scores</a>
      </div>
    </div>
    <div class="container mt-5">
      <div
        v-if="questionIndex<questions.length"
        id="game"
        :key="questionIndex"
        class="justify-center flex-column "
      >
        <div
          id="hud"
          class=""
        >
          <div
            id="hud-item"
            class=""
          >
            <p
              id="progressText"
              class="hud-prefix"
            >
              Question {{ `${questionIndex+1}/${questions.length}` }}
            </p>
            <progress
              id="progressBar"
              class="mx-auto"
              :value="(questionIndex/questions.length)*100"
              max="100"
            >
              {{ (questionIndex/questions.length)*100 }}%
            </progress>
          </div>
          <div
            id="hud-item"
            class=""
          >
            <p class="hud-prefix">
              Score
            </p>
            <h1
              id="score"
              class="hud-main-text"
            >
              {{ score() }}
            </h1>
          </div>
        </div>
        <h3
          id="question"
          class="my-2"
        >
          {{ questions[questionIndex].question_number }}. {{ questions[questionIndex].question_text }}
        </h3>
        <div
          v-for="(response, index) in questions[questionIndex].question_possibilities"
          :key="index"
          :class="{ 'is-selected': userResponses[questionIndex] == index}"
          class="choice-container"
          @click="selectOption(index)"
        >
          <p class="choice-prefix">
            {{ index | charIndex }}
          </p>
          <p
            class="choice-text"
            data-number="1"
          >
            {{ response.answer }}
          </p>
        </div>
        <!--pagination-->
        <nav
          class="pagination"
          role="navigation"
          aria-label="pagination"
        >
          <!-- back button -->
          <a
            class="button"
            :disabled="questionIndex < 1"
            @click="prev();"
          >
            Back
          </a>

          <!-- next button -->
          <a
            class="button"
            :class="(userResponses[questionIndex]==null)?'':'is-active'"
            :disabled="questionIndex>=questions.length"
            @click="next();"
          >
            {{ (userResponses[questionIndex]==null)?'Skip':'Next' }}
          </a>
        </nav>
        <!--/pagination-->
      </div>
      <div
        v-else
        class="container"
        style="height: 100vh;"
      >
        <div
          id="loader"
          class=""
        />
      </div>
    </div>

    <div class="container hidden">
      <div
        id="end"
        class="flex-center flex-column"
      >
        <h1 id="finalScore" />
        <form>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="username"
          >
          <button
            id="saveScoreBtn"
            type="submit"
            class="btn"
            onclick="saveHighScore(event)"
            disabled
          >
            Save
          </button>
        </form>
        <a
          class="btn"
          href="/game.html"
        >Play Again</a>
        <a
          class="btn"
          href="/"
        >Go Home</a>
      </div>
    </div>
    <div class="container hidden">
      <div
        id="highScores"
        class="flex-center flex-column"
      >
        <h1 id="finalScore">
          High Scores
        </h1>
        <ul id="highScoresList" />
        <a
          class="btn"
          href="/"
        >Go Home</a>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL = 'https://students-assistant-us-back-end.herokuapp.com/api/questions'
export default {
  filters: {
    charIndex (i) {
      return String.fromCharCode(97 + i)
    }
  },

  data () {
    return {
      questions: [],
      questionIndex: 0,
      userResponses: this.userResponseSkelaton,
      isActive: false,
      loading: false
    }
  },
  mounted () {
    fetch(API_URL)
      .then(response => response.json())
      .then((result) => {
        this.loading = true
        this.questions = result
        this.loading = false
      })
  },

  methods: {
    userResponseSkelaton () {
      this.userResponses = Array(this.questions.length).fill(null)
    },

    restart () {
      this.questionIndex = 0
    },

    selectOption (index) {
      this.$set(this.userResponses, this.questionIndex, index)
    },

    next () {
      if (this.questionIndex < this.questions.length) { this.questionIndex++ }
    },

    prev () {
      if (this.questions.length > 0) { this.questionIndex-- }
    },

    score () {
      let score = 0
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.questions[i].responses[this.userResponses[i]] !== 'undefined' &&
          this.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1
        }
      }
      return score
    }

  }

}
</script>

<style lang="scss" scoped>
:root {
  background-color: #ecf5ff;
  font-size: 62.5%;
}

/* UTILITIES */

.container {
  // width: 100vw;
  // height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
}

.container > * {
  width: 100%;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.text-center {
  text-align: center;
}

.hidden {
  display: none;
}

/* BUTTONS */
.btn {
  font-size: 1.8rem;
  padding: 1rem 0;
  width: 20rem;
  text-align: center;
  border: 0.1rem solid #56a5eb;
  margin-bottom: 1rem;
  text-decoration: none;
  color: #56a5eb;
  background-color: white;
}

.btn:hover {
  cursor: pointer;
  box-shadow: 0 0.4rem 1.4rem 0 rgba(86, 185, 235, 0.5);
  transform: translateY(-0.1rem);
  transition: transform 150ms;
}

.btn[disabled]:hover {
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

/* FORMS */
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin-bottom: 1rem;
  width: 20rem;
  padding: 1.5rem;
  font-size: 1.8rem;
  border: none;
  box-shadow: 0 0.1rem 1.4rem 0 rgba(86, 185, 235, 0.5);
}

input::placeholder {
  color: #aaa;
}

.choice-container {
  display: flex;
  margin-bottom: 0.5rem;
  width: 100%;
  font-size: 1.8rem;
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
  padding: 1rem 2.5rem;
  background-color: #56a5eb;
  color: white;
}

.choice-text {
  padding: 1rem;
  width: 100%;
}

.correct {
  background-color: #28a745;
}

.incorrect {
  background-color: #dc3545;
}

/* HUD */

#hud {
  display: flex;
  justify-content: space-between;
}

.hud-prefix {
  text-align: center;
  font-size: 2rem;
}

.hud-main-text {
  text-align: center;
}

#progressBar {
  width: 20rem;
  height: 4rem;
  border: 0.3rem solid #56a5eb;
  margin-top: 1.5rem;
}

#progressBarFull {
  height: 3.4rem;
  background-color: #56a5eb;
  width: 0%;
}

$trans_duration: 0.3s;
$primary_color: #657cff;

progress {
  margin: 0;
  overflow: hidden;
  border: none;

  &::-moz-progress-bar {
    background: $primary_color;
  }
  &::-webkit-progress-value {
    background: $primary_color;
  }
}

/* LOADER */
#loader {
  border: 1.6rem solid white;
  border-radius: 50%;
  border-top: 1.6rem solid #56a5eb;
  width: 12rem;
  height: 12rem;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
