import { createApp } from "vue";
import { createStore } from "vuex";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import "./index.css";

const url = "http://127.0.0.1:8001/api/produtos/";

const offset = 0;
const itemsPerPage = 10;

const store = createStore({
  state: {
    loading: false,
    allProducts: [],
    error: "",
    success: "",
  },

  mutations: {
    setLoadingState(state) {
      state.loading = !state.loading;
    },
    setProducts(state, payload) {
      state.allProducts = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    setSuccess(state, payload) {
      state.success = payload;
    }
  },

  getters: {
    getCurrentProducts: (state) => state.allProducts,
    getLoadingState: (state) => state.loading,
    getErrorState: (state) => state.error,
    getSuccessState: (state) => state.success,
  },

  actions: {
    async setAllProducts(state) {
      state.commit("setLoadingState");
      await axios(url + `listar?itemsPerPage=${itemsPerPage}&offset=${offset}`)
        .then((response) => {
          state.commit("setProducts", response.data.data);
          state.commit("setLoadingState");
        })
        .catch((error) => {
          state.commit("setLoadingState");
          state.commit("setError", error.response.data.errors);
        });
    },
    async changePage(state, offset) {
      state.commit("setLoadingState");
      await axios(url + `listar?itemsPerPage=${itemsPerPage}&offset=${offset}`)
        .then((response) => {
          state.commit("setProducts", response.data.data);
          state.commit("setLoadingState");
          state.commit("setSuccess", response.data.message)
        })
        .catch((error) => {
          state.commit("setLoadingState");
          state.commit("setError", error.response.data.errors);
        });
    },
    async updateProduct(state, product) {
      state.commit("setLoadingState");
      await axios
        .patch(url + `editar`, { product })
        .then((response) => {
          state.commit("setLoadingState");
          state.commit("setSuccess", response.data.message);
        })
        .catch((error) => {
          state.commit("setLoadingState");
          state.commit("setError", error.response.data.errors);
          state.dispatch("setAllProducts");
        });
    },
    async deleteProduct(state, id) {
      state.commit("setLoadingState");
      await axios
        .delete(url + `deletar`, { params: { id: id } })
        .then((response) => {
          state.commit("setLoadingState");
          state.dispatch("setAllProducts");
          state.commit("setSuccess", response.data.message)
        })
        .catch((error) => {
          state.commit("setLoadingState");
          state.commit("setError", error.response.data.errors);
          state.dispatch("setAllProducts");
        });
    },
    async createProduct(state, product) {
      state.commit("setLoadingState");
      await axios
        .post(url + `criar`, { product})
        .then((response) => {
          state.commit("setLoadingState");
          state.commit("setSuccess", response.data.message)
        })
        .catch((error) => {
          state.commit("setLoadingState");
          state.commit("setError", error.response.data.errors);
          state.dispatch("setAllProducts");
        });
    },
  },
});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
