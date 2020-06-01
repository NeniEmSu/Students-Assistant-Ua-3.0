<template>
  <div id="krok">
    <b-container class="bv-example-row">
      <div v-if="$apolloData.loading">
        <TheLoading />
      </div>
      <b-row v-else>
        <b-col>
          <QuestionBox
            :current-question="krok2Collection[index]"
            :next="next"            
            :increment="increment"
            :num-total="numTotal"
            :num-correct="numCorrect"
            :title="title"
          />
        </b-col>
      </b-row>

      <div class="comments">
        <vue-disqus shortname="students-assistant" identifier="krok2Collection" url="https://students-assistant.com/krok2" />
      </div>

      <TheLabValues />
    </b-container>
  </div>
</template>

<script>
import QuestionBox from '~/components/QuestionBoxGql.vue'
import TheLabValues from '~/components/TheLabValues'
import TheLoading from '~/components/TheLoading'
import krok2Collection from '~/gql/krok2'

export default {
  // middleware: ['auth'],
  apollo: {
    krok2Collection: {
      prefetch: true,
      query: krok2Collection
    }
  },
  head: {
    title: 'Krok 2 Practice'
  },

  components: {
    TheLabValues,
    QuestionBox,
    TheLoading
  },

  data () {
    return {
      title: 'Krok 2 Practice',
      disqusIdentifier: 'Krok2',
      index: 0,
      numCorrect: 0,
    }
  },

  computed: {
    numTotal() {
       return this.krok2Collection.length      
    },
  },

  methods: {
    next() {
      this.index++
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++
      }
    }
  }
}
</script>