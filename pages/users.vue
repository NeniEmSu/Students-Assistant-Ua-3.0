<template>
  <div class="container mt-5 pt-5">
    <h3 class="mt-5">
      users
    </h3>
    <ul>
      <li
        v-for="(user) in users"
        :key="user._id"
        class="my-5"
      >
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import users from '~/gql/users'
export default {
  apollo: {
    $client: 'otherClient',
    users: {
      prefetch: true,
      query: users
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
