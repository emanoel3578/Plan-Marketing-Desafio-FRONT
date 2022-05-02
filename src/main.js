import { createApp } from "vue";
import { createStore } from "vuex";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import "./index.css";

const url = "http://127.0.0.1:8000/api/produtos/";

const offset = 0;
const itemsPerPage = 10;

const store = createStore({
  state: {
    loading: false,
    allProducts: [],
  },

  mutations: {
    setLoadingState(state) {
      state.loading = !state.loading;
    },
    setProducts(state, payload) {
      state.allProducts = payload;
    },
  },

  getters: {
    getCurrentProducts: (state) => state.allProducts,
    getLoadingState: (state) => state.loading,
  },

  actions: {
    async setAllProducts(state) {
      state.commit("setLoadingState");
      await axios(
        url + `listar?itemsPerPage=${itemsPerPage}&offset=${offset}`
      ).then((response) => {
        state.commit("setProducts", response.data.data);
        state.commit("setLoadingState");
      });
    },
    async changePage(state, offset) {
      state.commit("setLoadingState");
      await axios(
        url + `listar?itemsPerPage=${itemsPerPage}&offset=${offset}`
      ).then((response) => {
        state.commit("setProducts", response.data.data);
        state.commit("setLoadingState");
      });
    },
  },
});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
