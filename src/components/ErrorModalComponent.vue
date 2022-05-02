<template>
  <div
    class="flex justify-center absolute items-center z-20 w-full inset-0 bg-black/75"
  >
    <div
      class="relative z-10 flex flex-col items-start justify-center p-10 bg-white shadow-2xl rounded-xl"
    >
      <div class="flex flex-row justify-center items-center gap-4 w-full">
        <h4 class="w-fit text-4xl font-medium leading-snug text-red-400">Error</h4>
        <div class="pt-2 text-red-400 " @click="$emit('closeErrorModal')">
          <svg
            class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <path
              d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
            />
          </svg>
        </div>
      </div>
      <form class="relative w-full mt-6 space-y-8">
        <div class="relative">
          <ul class="list-disc" v-for="error in errors" :key="error">
            <li class="py-1">{{ error[0] }}</li>
          </ul>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorModalComponent",
  props: ["errors"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.errors);
  },
};
</script>
