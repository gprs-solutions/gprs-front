import { defineStore } from "pinia";

export const useExperienceStore = defineStore("experiences", {
  state: () => ({
    exps: [],
    success: false,
  }),
  getters: {
    getExps: (state) => state.exps,
    isSuccessful: (state) => state.success,
  },
  actions: {
    async fetchExps() {
      try {
        const { data, error } = await useFetch("http://localhost:8030/api/exp");

        const result = data.value;

        if (result.success !== true || result.status !== 200) {
          throw new Error();
        }

        this.success = true;
        this.exps = result.data;
      } catch (err) {
        this.success = false;
        this.exps = [];
      }
    },
  },
});
