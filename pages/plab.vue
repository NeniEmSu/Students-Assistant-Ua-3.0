<template>
  <div class="container mt-5 pt-5">
    <h3 class="mt-5">
      Plab Questions
    </h3>
    <ul>
      <li
        v-for="(question) in plabCollection"
        :key="question._id"
        class="my-5"
      >
        <div class="mb-3">
          {{ question.number }}. {{ question.question }}
          <!-- <b-badge
            v-for="(year, i) in question.years"
            :key="i"
            pill
            variant="info"
          >
            {{ year }}
          </b-badge> -->
        </div>
        <div
          v-for="(option, index) in shuffle(question.options)"
          :key="index"
          class="choice-container"
        >
          <p class="choice-prefix">
            {{ index | charIndex }}
          </p>
          <p class="choice-text">
            <!-- :class="[(option.value===question.correctAnswer && toggle)?'correct':'', (option.value!==question.correctAnswer && toggle)?'incorrect':'']"
            @click.stop="toggle = !toggle" -->
            {{ option.value }}
          </p>
        </div>
        <div>
          <b-button
            v-b-toggle="'accordion-' + question._id"
            variant="primary"
          >
            Check Answer
          </b-button>
          <b-collapse
            :id="'accordion-' + question._id"
            class="mt-2"
          >
            <b-card>
              <div class="mb-2">
                Correct Answer: <span class="text-success">{{ question.correctAnswer }}</span>
              </div>

              <b-button
                v-b-toggle="`accordion-${question._id}-inner`"
                size="sm"
              >
                Reason/Explanation
              </b-button>
              <b-collapse
                :id="`accordion-${question._id}-inner`"
                class="mt-2"
              >
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div v-html="question.reason" />
              </b-collapse>
            </b-card>
          </b-collapse>
        </div>
        <!-- <p v-if="toggle">
          Correct Answer: {{ question.correctAnswer }}
        </p> -->
      </li>
    </ul>
  </div>
</template>

<script>
import plabCollection from '~/gql/plab'
export default {
  apollo: {
    plabCollection: {
      prefetch: true,
      query: plabCollection
    }
  },
  filters: {
    charIndex (i) {
      return String.fromCharCode(97 + i)
    }
  },
  head: {
    title: 'Plab questions'
  },
  data () {
    return {
      toggle: false
    }
  },

  methods: {
    shuffle (a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
      }
      return a
    }
  }
}
</script>

<style lang="scss" scoped>
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
  padding: 0.5rem 2.5rem;
  background-color: #56a5eb;
  color: white;
}

.choice-text {
  padding: 0.5rem;
  width: 100%;
}

.correct {
  background-color: #28a745;
  color: white;
}

.incorrect {
  background-color: #b91626;
  color: white;
}
</style>
