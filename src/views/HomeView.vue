<template>
  <div v-if="showDeleteModal">
    <DeleteModalComponent
      :idProduct="idProductDelete"
      @closeDeleteModal="deleteProduct"
    />
  </div>
  <div v-if="showEditModal">
    <EditModalComponent :product="product" @closeEditModal="editProduct" />
  </div>
  <div class="sticky z-10 w-full top-0 h-16 border-b bg-white lg:py-2.5">
    <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
      <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">
        Dashboard
      </h5>
    </div>
  </div>

  <div
    v-if="allProducts"
    class="relative flex items-center justify-center px-10 top-10"
  >
    <div class="flex flex-col min-w-full">
      <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden">
            <table
              class="w-full divide-y left-0 top-10 divide-gray-700 text-center"
            >
              <thead class="bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-gray-400 uppercase"
                  >
                    Nome do produto
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-gray-400 uppercase"
                  >
                    Descrição
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-gray-400 uppercase"
                  >
                    Tensão
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-gray-400 uppercase"
                  >
                    Marca
                  </th>
                  <th scope="col">
                    <span class="sr-only">Edit</span>
                  </th>
                  <th scope="col">
                    <span class="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-700 bg-gray-800">
                <tr
                  v-for="(product, index) in allProducts"
                  :key="product.id"
                  class="hover:bg-gray-700"
                >
                  <td
                    class="py-3 px-2 text-sm font-medium text-white whitespace-nowrap"
                  >
                    {{ product.name }}
                  </td>
                  <td class="py-3 px-2 text-sm font-medium text-white">
                    {{ product.description }}
                  </td>
                  <td
                    class="py-3 px-2 text-sm font-medium whitespace-nowrap text-white"
                  >
                    {{ product.tension }}
                  </td>
                  <td
                    class="py-3 px-2 text-sm font-medium whitespace-nowrap text-white"
                  >
                    {{ product.brand }}
                  </td>
                  <td
                    class="py-3 px-2 text-sm font-medium text-center whitespace-nowrap"
                  >
                    <span
                      @click="editProduct(index)"
                      class="text-blue-500 hover:underline cursor-pointer"
                      >Edit</span
                    >
                  </td>
                  <td
                    class="py-3 px-2 text-sm font-medium text-center whitespace-nowrap"
                  >
                    <span
                      @click="deleteProduct(product.id)"
                      class="text-red-400 hover:underline cursor-pointer"
                      >Apagar</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="flex justify-end items-center gap-4 px-4 py-3 bg-gray-800 text-blue-400"
            >
              <div
                @click="previousPage"
                class="rounded-full bg-gray-200 p-1 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <div>{{ currentPage }}</div>
              <div
                @click="nextPage"
                class="rounded-full bg-gray-200 p-1 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditModalComponent from "../components/EditModalComponent.vue";
import DeleteModalComponent from "../components/DeleteModalComponent.vue"
export default {
  components: {
    EditModalComponent,
    DeleteModalComponent,
  },
  name: "HomeView",
  data() {
    return {
      currentPage: 1,
      offset: 0,
      itemsPerPage: 10,
      product: [],
      idProductDelete: '',
      showEditModal: false,
      showDeleteModal: false,
    };
  },
  computed: {
    allProducts() {
      return this.$store.getters.getCurrentProducts;
    },
  },
  methods: {
    nextPage() {
      this.currentPage = this.currentPage + 1;
      this.offset = (this.currentPage - 1) * this.itemsPerPage + 1;
      this.$store.dispatch("changePage", this.offset);
    },
    previousPage() {
      if (this.currentPage != 1) {
        this.currentPage = this.currentPage - 1;
        this.offset = (this.currentPage - 1) * this.itemsPerPage + 1;
        this.$store.dispatch("changePage", this.offset);
      }
    },
    editProduct(index) {
      this.showEditModal = !this.showEditModal;
      this.product = this.allProducts[index];
    },
    deleteProduct(id) {
      this.showDeleteModal = !this.showDeleteModal;
      this.idProductDelete = id;
    },
  },
};
</script>
