<template>
  <ul class="custom-pagination">
    <li
        v-if="currentPage > 1"
        @click="goToPage(currentPage - 1)"
    >
      <span>Previous</span>
    </li>
    <li
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="{ active: currentPage === page }"
    >
      <span>{{ page }}</span>
    </li>
    <li
        v-if="currentPage < totalPages"
        @click="goToPage(currentPage + 1)"
    >
      <span>Next</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },

    totalPages: {
      type: Number,
      required: true,
    }
  },

  methods: {
    goToPage(page) {
      this.$emit("paginate", page)
    }
  }
}
</script>

<style scoped>
.custom-pagination {
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin-top: 20px;
}

.custom-pagination li {
  cursor: pointer;
  margin: 0 5px;
}

.custom-pagination li span {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.custom-pagination li.active span {
  background-color: #67aef8;
  color: #fff;
}
</style>