import { defineStore } from "pinia";

export const useExperienceStore = defineStore("experiences", {
  state: () => ({
    exps: [],
    activeExp: [],
  }),
  getters: {
    getExps: (state) => state.exps,
    getActiveExp: (state) => state.activeExp,
  },
  actions: {
    async fetchExps() {
      const colors = ["cyan", "green", "pink", "amber", "orange"];
      //here we will soon retrive the xp from backend using axios. For now we will mock it.
      const exps = [
        {
          start: "2024-10-10",
          end: "2023-10-10",
          image: "http://image.com",
          color: colors[Math.floor(Math.random() * colors.length)],
          descriptions: {
            pt: {
              name: "Lexis Nexis Risk Solutions PT",
              description: "Lorem ipsum sit dolor amet",
            },
            en: {
              name: "Lexis Nexis Risk Solutions EN",
              description: "Lorem ipsum sit dolor amet EN",
            },
          },
        },
        {
          start: "2024-10-10",
          end: "2023-10-10",
          image: "http://image2.com",
          descriptions: {
            pt: {
              name: "SEOX PT 2",
              description: "Lorem ipsum sit dolor amet 2 ",
            },
            en: {
              name: "SEOX EN 2",
              description: "Lorem ipsum sit dolor amet EN 2",
            },
          },
        },
      ];
      this.exps = exps;
    },
    setActiveExp(exp) {
      this.activeExp = exp;
    },
  },
});
