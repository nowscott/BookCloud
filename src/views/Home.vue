<template>
  <div>
    <h1>BookCloud</h1>
    <BookList />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BookList from '../components/BookList.vue';

export default {
  name: 'HomeView', // 修改组件名称
  components: {
    BookList
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>