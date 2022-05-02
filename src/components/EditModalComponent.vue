<template>
  <div
    class="flex justify-center absolute items-center z-20 w-full inset-0 bg-black/75"
  >
    <div
      class="relative z-10 flex flex-col items-start justify-center p-10 bg-white shadow-2xl rounded-xl"
    >
      <div class="flex items-center gap-4">
        <h4 class="w-fit text-4xl font-medium leading-snug">Editar produto</h4>
        <div class="pt-2" @click="$emit('closeEditModal')">
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
          <label
            class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
            >Nome</label
          >
          <input
            type="text"
            class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            placeholder="Ex: Geladeira"
            v-model="product.name"
          />
        </div>
        <div class="relative">
          <label
            class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
            >Descrição</label
          >
          <input
            type="text"
            class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            placeholder="Ex: Geladeira 2 portas 30L"
            v-model="product.description"
          />
        </div>
        <div class="relative">
          <label
            class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
            >Tensão</label
          >
          <input
            type="text"
            class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            placeholder="Ex: 220v"
            v-model="product.tension"
          />
        </div>
        <div class="relative">
          <label
            class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white"
            >Marca</label
          >
          <select
            id="vehicle_id"
            name="vehicle_id"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            v-model="product.brand"
          >
            <option value="Electrolux">Electrolux</option>
            <option value="Brastemp">Brastemp</option>
            <option value="Fischer">Fischer</option>
            <option value="Samsung">Samsung</option>
            <option value="LG">LG</option>
          </select>
        </div>
        <div class="relative">
          <span
            @click="updateProduct"
            class="cursor-pointer inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            Salvar mudanças
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditModalComponent",
  props: ["product"],
  data() {
    return {};
  },
  methods: {
    updateProduct() {
      this.$emit("closeEditModal");
      this.$store.dispatch("updateProduct", this.product);
    },
  },
};
</script>
