import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
  state: () => ({
    success: false,
    email: "",
    name: "",
    message: "",
    showSnackbar: false,
  }),
  getters: {
    isSuccessful: (state) => state.success,
    getEmail: (state) => state.email,
    getName: (state) => state.name,
    getMessage: (state) => state.message,
    getShowSnackBar: (state) => state.showSnackbar,
  },
  actions: {
    async createContact() {
      try {
        const { data, error } = await useFetch(
          "http://localhost:8030/api/contact",
          {
            method: "POST",
            body: JSON.stringify({
              name: this.name,
              email: this.email,
              message: this.message,
            }),
          }
        );
        const result = data.value;

        if (result.success !== true || result.status !== 200) {
          throw new Error();
        }

        this.success = true;
      } catch (err) {
        this.success = false;
      } finally {
        this.showSnackbar = true;
      }
    },
    setEmail(v) {
      this.email = v;
    },
    setName(v) {
      this.name = v;
    },
    setMessage(v) {
      this.message = v;
    },
    setShowSnackbar(v) {
      this.showSnackbar = v;
    },
  },
});
