<template>
  <div
    class="flex justify-center absolute items-center z-40 w-full inset-0 bg-black/75"
  >
    <div
      class="relative z-10 flex flex-col items-start justify-center p-10 bg-white shadow-2xl rounded-xl"
    >
      <div class="flex flex-row justify-center items-center gap-4 w-full">
        <h4 class="w-fit text-4xl font-medium leading-snug text-red-400">
          Deletar Produto ?
        </h4>
        <div class="pt-2 text-red-400" @click="$emit('closeDeleteModal')">
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
      <div class="relative flex gap-4 mt-8 justify-between items-center w-full">
        <span
          @click="deleteProduct"
          class="inline-block w-full px-4 py-2 cursor-pointer text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500"
        >
          Sim
        </span>

        <span
          @click="$emit('closeDeleteModal')"
          class="inline-block w-full px-4 py-2 cursor-pointer text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500"
        >
          Cancelar
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorModalComponent",
  props: ["idProduct"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.idProduct);
  },
  methods: {
    deleteProduct() {
      this.$emit("closeDeleteModal");
      this.$store.dispatch("deleteProduct", this.idProduct);
    }
  },
};
</script>
