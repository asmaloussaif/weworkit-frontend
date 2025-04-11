<template>
    <div class="star-rating">
      <span
        v-for="star in 5"
        :key="star"
        class="star"
        :class="{ filled: star <= rating }"
        @click="updateRating(star)"
      >
        ★
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StarRating',
    props: {
      modelValue: {
        type: Number,
        default: 0,
      },
    },
    emits: ['update:modelValue'],
    computed: {
      rating() {
        return this.modelValue
      },
    },
    methods: {
      updateRating(star) {
        this.$emit('update:modelValue', star)
      },
    },
  }
  </script>
  
  <style scoped>
  .star-rating {
    display: flex;
    gap: 5px;
    font-size: 2rem;
    cursor: pointer;
  }
  .star {
    color: #ccc;
    transition: color 0.2s;
  }
  .star.filled {
    color: #f5b301;
  }
  </style>
  