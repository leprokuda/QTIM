<template>
  <button :type="type" class="btn" :class="btnClass" @click="onClick">
    {{label}}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    btnClass: {
      type: String,
      required: true
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.btn {
  width: 150px;
  height: 40px;
  border-radius: 8px;
}

.primary {
  background: #E9F3FA;
}
</style>