import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", {
  state: () => ({
    success: false,
    email: "",
    name: "",
    message: "",
  }),
  getters: {
    isSuccessful: (state) => state.success,
    getEmail: (state) => state.email,
    getName: (state) => state.name,
    getMessage: (state) => state.message,
  },
  actions: {
    async fetchSkills() {
      try {
        const { data, error } = await useFetch(
          "http://localhost:8030/api/skill"
        );
        const result = data.value;

        if (result.success !== true || result.status !== 200) {
          throw new Error();
        }

        this.success = true;
        this.skills = result.data;
      } catch (err) {
        this.success = false;
        this.skills = [];
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
  },
});
