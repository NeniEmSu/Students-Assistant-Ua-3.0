<template>
  <div id="krok2020">
    <b-container class="bv-example-row">
      <template v-if="$apolloData.loading">
        <content-placeholders
          rounded
          class="mt-5 pt-5"
        >
          <content-placeholders-heading class="mb-3" />
          <content-placeholders-img />
          <content-placeholders-text :lines="5" />
        </content-placeholders>
      </template>
      <b-row v-else>
        <b-col>
          <QuestionBox
            :current-question="krok2020Collection[index]"
            :next="next"
            :previous="previous"
            :increment="increment"
            :num-total="numTotal"
            :num-correct="numCorrect"
            :title="title"
            :question-number="index"
            :reset-index="resetIndex"
            :review-numbers="reviewNumbers"
            @changedView="updateView($event)"
            @updateReviews="pushToReviewQuestions($event)"
          />
        </b-col>
      </b-row>

      <div class="comments">
        <vue-disqus shortname="students-assistant" identifier="krok2_2020Collection" url="https://students-assistant.com/krok2" />
      </div>

      <TheLabValues />
    </b-container>
  </div>
</template>

<script>
import QuestionBox from '~/components/QuestionBoxGql.vue'
import TheLabValues from '~/components/TheLabValues'
import krok2020Collection from '~/gql/krok2-2020'


export default {
  name: 'Krok2',
  head: {
    title: 'Krok 2 2020 Practice'
  },

  components: {
    QuestionBox,
    
    TheLabValues
  },
   apollo: {
    krok2020Collection: {
      prefetch: true,
      query: krok2020Collection
    }
  },
  data() {
    return {
      title: 'Krok 2 2020 Practice',
      index: 0,
      numCorrect: 0,
      reviewNumbers: []
    }
  },
  computed: {
    numTotal() {
       return this.krok2020Collection.length      
    },
  },
  watch: {
    index (newIndex) {
      localStorage.index2020 = newIndex
    },
    reviewNumbers (newReviewNumbers) {
      localStorage.reviewNumbers2020 = JSON.stringify(newReviewNumbers)
    }
  },
  mounted () {
    if (localStorage.index2020) {
      this.index = JSON.parse(localStorage.index2020)  
    }
    if (localStorage.reviewNumbers2020) {
      this.reviewNumbers = JSON.parse(localStorage.reviewNumbers2020)
    }
  },
  methods: {
    updateView (updatedView) {
      this.index = updatedView
    },
    pushToReviewQuestions(updateReview) {
      if (!this.reviewNumbers.includes(updateReview)) {
        this.reviewNumbers.push(updateReview)
      }
    },
    next() {
      this.index++
    },
    previous() {
      this.index--
    },
    resetIndex() {
      this.index = 0
      this.reviewNumbers = []
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
    }
  }
}
</script>