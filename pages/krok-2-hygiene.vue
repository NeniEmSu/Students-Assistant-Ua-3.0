<template>
  <div id="krok">
    <b-container class="bv-example-row">
      <div v-if="$apolloData.loading">
        <TheLoading />
      </div>
      <b-row v-else>
        <b-col>
          <QuestionBox
            :current-question="krok2HygieneCollection[index]"
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
        <vue-disqus shortname="students-assistant" identifier="Krok2HygieneBases" url="https://students-assistant.com/krok2" />
      </div>

      <TheLabValues />
    </b-container>
  </div>
</template>

<script>
import QuestionBox from '~/components/QuestionBoxGql.vue'
import TheLabValues from '~/components/TheLabValues'
import krok2HygieneCollection from '~/gql/krok2Hygiene'
import TheLoading from '~/components/TheLoading'

export default {
  name: 'Krok2HygieneBases',
  head: {
    title: 'Krok 2 Hygiene Bases'
  },

  components: {
    QuestionBox,
    TheLoading,
    TheLabValues
  },
   apollo: {
    krok2HygieneCollection: {
      prefetch: true,
      query: krok2HygieneCollection
    }
  },
  data() {
    return {
      title: 'Krok 2 Hygiene Bases',
      index: 0,
      numCorrect: 0,
    }
  },
  computed: {
    numTotal() {
       return this.krok2HygieneCollection.length      
    },
  },
  watch: {
    index (newIndex) {
      localStorage.hygIndex = newIndex
    },
  },
  mounted () {
    if (localStorage.hygIndex) {
      this.index = JSON.parse(localStorage.hygIndex)  
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