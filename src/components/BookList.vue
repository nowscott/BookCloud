<template>
  <div>
    <h2>Book List</h2>
    <ul>
      <li v-for="book in books" :key="book.id">{{ book.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        { id: 1, title: 'Book 1' },
        { id: 2, title: 'Book 2' },
        { id: 3, title: 'Book 3' }
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
</style>