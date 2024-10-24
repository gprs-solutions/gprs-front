import { defineStore } from "pinia";
import { useRuntimeConfig } from "#app";

export const useExperienceStore = defineStore("experiences", {
  state: () => ({
    exps: [],
    start: "",
    end: "",
    success: false,
  }),
  getters: {
    getExps: (state) => state.exps,
    isSuccessful: (state) => state.success,
  },
  actions: {
    async fetchExps() {
      try {
        const config = useRuntimeConfig();
        console.log(config);
        const { data, error } = await useFetch(config.public.apiUrl + "/exp");

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
