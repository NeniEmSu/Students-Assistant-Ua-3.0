<template>
  <div id="krok">
    <b-container class="bv-example-row">
      <div v-if="$apolloData.loading">
        <TheLoading />
      </div>
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
import TheLoading from '~/components/TheLoading'

export default {
  name: 'Krok2PediatricsBases',
  head: {
    title: 'Krok 2 Pediatrics Bases'
  },

  components: {
    QuestionBox,
    TheLoading,
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
  },
  mounted () {
    if (localStorage.pedIndex) {
      this.index = JSON.parse(localStorage.pedIndex)  
    }
  },
  methods: {
    next() {
      this.index++
    },
    previous() {
      this.index--
    },
    resetIndex() {
      this.index = 0
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
    }
  }
}
</script>