import { defineStore } from "pinia";

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
  },
});
