import { defineStore } from "pinia";
import { useRuntimeConfig } from "#app";

export const useSkillStore = defineStore("skills", {
  state: () => ({
    success: false,
    skills: [],
  }),
  getters: {
    isSuccessful: (state) => state.success,
    skillsInfo: (state) => state.skills,
  },
  actions: {
    async fetchSkills() {
      try {
        const config = useRuntimeConfig();
        const { data, error } = await useFetch(config.public.apiUrl + "/skill");
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
  },
});
