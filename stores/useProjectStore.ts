import { defineStore } from "pinia";

export const useProjectStore = defineStore("projects", {
  state: () => ({
    detailsOpen: false,
    success: false,
  }),
  getters: {
    isDetailsOpen: (state) => state.detailsOpen,
    isSuccessful: (state) => state.success,
  },
  actions: {
    async fetchProjects() {
      setTimeout(() => {
        this.success = true;
      }, 2000);
    },
    toggleDetailsBar() {
      this.detailsOpen = !this.detailsOpen;
    },
  },
});
