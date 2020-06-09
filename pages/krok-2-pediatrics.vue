<template>
  <div id="krok">
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
            :current-question="krok2PediatricsCollection[index]"
            :next="next"
            :previous="previous"
            :increment="increment"
            :num-total="numTotal"
            :num-correct="numCorrect"
            :title="title"
            :question-number="index"
            :reset-index="resetIndex"
            :review-numbers="reviewNumbersPed"
            @changedView="updateView($event)"
            @updateReviews="pushToReviewQuestions($event)"
          />
        </b-col>
      </b-row>

      <div class="comments">
        <vue-disqus shortname="students-assistant" identifier="Krok2PediatricsBases" url="https://students-assistant.com/krok2" />
      </div>

      <TheLabValues />
    </b-container>
  </div>
</template>

<script>
import QuestionBox from '~/components/QuestionBoxGql.vue'
import TheLabValues from '~/components/TheLabValues'
import krok2PediatricsCollection from '~/gql/krok2Pediatrics'


export default {
  name: 'Krok2PediatricsBases',
  head: {
    title: 'Krok 2 Pediatrics Bases'
  },

  components: {
    QuestionBox,
    
    TheLabValues
  },
   apollo: {
    krok2PediatricsCollection: {
      prefetch: true,
      query: krok2PediatricsCollection
    }
  },
  data() {
    return {
      title: 'Krok 2 Pediatrics Bases',
      index: 0,
      numCorrect: 0,
      reviewNumbersPed: []
    }
  },
  computed: {
    numTotal() {
       return this.krok2PediatricsCollection.length      
    },
  },
  watch: {
    index (newIndex) {
      localStorage.pedIndex = newIndex
    },
    reviewNumbersPed (newReviewNumbersPed) {
      localStorage.reviewNumbersPed = JSON.stringify(newReviewNumbersPed)
    }
  },
  mounted () {
    if (localStorage.pedIndex) {
      this.index = JSON.parse(localStorage.pedIndex)  
    }
    if (localStorage.reviewNumbersPed) {
      this.reviewNumbersPed = JSON.parse(localStorage.reviewNumbersPed)
    }
  },
  methods: {
    updateView (updatedView) {
      this.index = updatedView
    },
    pushToReviewQuestions(updateReview) {
      if (!this.reviewNumbersPed.includes(updateReview)) {
        this.reviewNumbersPed.push(updateReview)
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
      this.reviewNumbersPed = []
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
    }
  }
}
</script>