<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <div>
      <LoaderComponent />
    </div>
    <div v-if="errors">
      <ErrorModalComponent
        :errors="errors"
        @closeErrorModal="closeErrorModal"
      />
    </div>
    <div v-if="success">
      <SuccessModalComponent :messages="success" />
    </div>
    <div class="flex w-screen h-screen">
      <aside
        class="ml-[-100%] z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]"
      >
        <div>
          <div class="mt-8 text-center">
            <img
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
              alt=""
              class="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5
              class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block"
            >
              Camila Moura da Silva
            </h5>
            <span class="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul class="space-y-2 tracking-wide mt-8">
            <li @click="setTab">
              <RouterLink
                to="/listar"
                aria-label="dashboard"
                class="relative px-4 py-3 flex items-center rounded-xl"
                :class="[isList ? activeClass : '']"
              >
                <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    class="fill-current text-cyan-400 dark:fill-slate-600"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    class="fill-current text-cyan-200 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    class="fill-current group-hover:text-sky-300"
                  ></path>
                </svg>
                <span id="listar" class="font-medium group-hover:text-gray-700"
                  >Listar Produtos</span
                >
              </RouterLink>
            </li>
            <li @click="setTab">
              <RouterLink
                to="/criar"
                class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
                :class="[isCreate ? activeClass : '']"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    class="fill-current text-gray-300 group-hover:text-cyan-300"
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clip-rule="evenodd"
                  />
                  <path
                    class="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span id="criar" class="font-medium group-hover:text-gray-700">
                  Adicionar Produtos
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </aside>
      <div class="w-full bg-gray-200">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import LoaderComponent from "./components/LoaderComponent.vue";
import ErrorModalComponent from "./components/ErrorModalComponent.vue";
import SuccessModalComponent from "./components/SuccessModalComponent.vue";
export default {
  components: {
    LoaderComponent,
    ErrorModalComponent,
    SuccessModalComponent,
  },
  data() {
    return {
      activeClass: "text-white bg-gradient-to-r from-sky-600 to-cyan-400",
      isList: true,
      isCreate: false,
    };
  },
  computed: {
    errors() {
      return this.$store.getters.getErrorState;
    },
    success() {
      return this.$store.getters.getSuccessState;
    },
  },
  methods: {
    closeErrorModal() {
      this.$store.commit("setError", false);
    },
    setTab(event) {
      if (event.target.id === "listar") {
        this.isList = true;
        this.isCreate = false;
      } else {
        this.isList = false;
        this.isCreate = true;
      }
    },
  },
};
</script>