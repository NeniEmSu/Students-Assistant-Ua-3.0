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
            :current-question="krok2Collection[index]"
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
        <vue-disqus shortname="students-assistant" identifier="Krok2BookletsCombined" url="https://students-assistant.com/krok2" />
      </div>

      <TheLabValues />
    </b-container>
  </div>
</template>

<script>
import QuestionBox from '~/components/QuestionBoxGql.vue'
import TheLabValues from '~/components/TheLabValues'
import krok2Collection from '~/gql/krok2'


export default {
  name: 'Krok2BookletsCombined',
  head: {
    title: 'Krok 2 Practice Combined Booklets Practice'
  },

  components: {
    QuestionBox,
    
    TheLabValues
  },
   apollo: {
    krok2Collection: {
      prefetch: true,
      query: krok2Collection
    }
  },
  data() {
    return {
      title: 'Krok 2 Practice Combined Booklets Practice',
      index: 0,
      numCorrect: 0,
    }
  },
  computed: {
    numTotal() {
       return this.krok2Collection.length      
    },
  },
  watch: {
    index (newIndex) {
      localStorage.Kro2CombIndex = newIndex
    },
  },
  mounted () {
    if (localStorage.Kro2CombIndex) {
      this.index = JSON.parse(localStorage.Kro2CombIndex)  
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