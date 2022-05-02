<template>
  <div
    class="slide-bottom absolute z-30 top-4 right-0 bg-green-100 rounded-md p-3 flex"
  >
    <svg
      class="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2 4-4" />
    </svg>

    <div class="text-green-700">
      <div class="font-bold text-xl"></div>

      <div>
        {{ messages }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessModalComponent",
  props: ["messages"],
  data() {
    return {};
  },
  mounted() {
    setTimeout(() => this.$store.commit("setSuccess", false), 5000);
  },
  methods: {},
};
</script>

<style>
.slide-right {
  -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
  }
}
@keyframes slide-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(100px);
    transform: translateX(100px);
  }
}
</style>
