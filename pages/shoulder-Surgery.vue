<template>
  <div class="container mt-5 pt-5">
    <h3 class="mt-5 mb-4 text-center">
      Shoulder Surgery
    </h3>
    <div
      id="theGame"
      class="text-center mt-2"
    >
      <iframe
        id="iframegame"
        seamless
        scrolling
        frameborder="0"
        height="420"
        width="560"
        allowfullscreen
        allow="fullscreen"
        webkit-playsinline="true"
        src="//games.cdn.spilcloud.com/html5/operate_now_shoulder_surgery/index.html?gp=1?gp=1&siteid=79&channelid=2&siteLocale=en-US&spilStorageId=56210912800"
        style="max-width: 560px; width: 100%; height: auto; min-height: 420px;"
      />
    </div>
  </div>
</template>

<script>
import krok2Collection from '~/gql/krok2'

const customLabels = {
  first: 'First',
  last: 'Last',
  previous: '<',
  next: '>'
}

export default {
  apollo: {
    krok2Collection: {
      prefetch: true,
      query: krok2Collection
    }
  },
  filters: {
    charIndex (i) {
      return String.fromCharCode(97 + i)
    }
  },
  head: {
    title: 'Shoulder Surgery'
  },
  data () {
    return {
      pageOfItems: [],
      customLabels,
      pageCount: '1'
    }
  },

  methods: {
    shuffle (a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
      }
      return a
    },

    onChangePage (pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems
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
