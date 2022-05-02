<template>
  <div v-if="loading" class="absolute flex justify-center items-center w-screen h-screen bg-black/75 z-50">
    <div
      class="absolute flex items-center justify-center space-x-2 animate-pulse"
    >
      <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoaderComponent",
  data() {
    return {}
  },
  methods: {},
  computed: {
    loading() {
      return this.$store.getters.getLoadingState;
    }
  }
}
</script>
