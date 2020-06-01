<template>
  <div id="krok">
    <b-container class="bv-example-row">
      <div v-if="$apolloData.loading">
        <TheLoading />
      </div>
      <b-row v-else>
        <b-col>
          <QuestionBox
            :current-question="krok2019Collection[index]"
            :next="next"
            :increment="increment"
            :num-total="numTotal"
            :num-correct="numCorrect"
            :title="title"
          />
        </b-col>
      </b-row>

      <div class="comments">
        <vue-disqus shortname="students-assistant" identifier="krok2_2019Collection" url="https://students-assistant.com/krok2" />
      </div>

      <TheLabValues />
    </b-container>
  </div>
</template>

<script>
import QuestionBox from '~/components/QuestionBoxGql.vue'
import TheLabValues from '~/components/TheLabValues'
import krok2019Collection from '~/gql/krok2-2019'
import TheLoading from '~/components/TheLoading'

export default {
  name: 'Krok2',
  head: {
    title: 'Krok 2 2019 Practice'
  },

  components: {
    QuestionBox,
    TheLoading,
    TheLabValues
  },
   apollo: {
    krok2019Collection: {
      prefetch: true,
      query: krok2019Collection
    }
  },
  data() {
    return {
      title: 'Krok 2 2019 Practice',
      index: 0,
      numCorrect: 0,
    }
  },
  computed: {
    numTotal() {
       return this.krok2019Collection.length      
    },
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