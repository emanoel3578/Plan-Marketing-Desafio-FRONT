<template>
  <div>
    <div class="sticky z-10 w-full top-0 h-16 border-b bg-white lg:py-2.5">
      <div
        class="px-6 flex items-center justify-between space-x-4 2xl:container"
      >
        <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">
          Adicionar produto
        </h5>
      </div>
    </div>

    <div class="px-10 mt-10 text-base">
      <div
        class="relative z-10 bg-sky-600 flex flex-col items-start justify-center p-6 bg-white shadow-2xl rounded-xl"
      >
        <div class="flex justify-center text-center items-center gap-4 w-full">
          <h4 class="text-white w-fit text-3xl font-medium leading-snug">
            Adicionar produto
          </h4>
        </div>
        <form class="relative w-full mt-6 space-y-8">
          <div class="relative">
            <label
              class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white rounded-full"
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
              class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white rounded-full"
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
              class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white rounded-full"
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
              class="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white rounded-full"
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
              @click="createProduct"
              class="cursor-pointer inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-sky-900 rounded-lg hover:bg-blue-500"
            >
              Salvar
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "",
        description: "",
        tension: "",
        brand: "Electrolux",
      }
    }
  },
  methods: {
    createProduct() {
      console.log(this.product)
      this.$store.dispatch("createProduct", this.product);
    }
  },
}
</script>
