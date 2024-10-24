import { defineStore } from "pinia";
import { useRuntimeConfig } from "#app";

export const useProjectStore = defineStore("projects", {
  state: () => ({
    detailsOpen: false,
    success: false,
    projs: [],
    activeProj: {},
  }),
  getters: {
    isDetailsOpen: (state) => state.detailsOpen,
    isSuccessful: (state) => state.success,
    projects: (state) => state.projs,
    activeProject: (state) => state.activeProj,
  },
  actions: {
    async fetchProjects() {
      try {
        const config = useRuntimeConfig();
        const { data, error } = await useFetch(config.public.apiUrl + "/proj");

        const result = data.value;

        if (result.success !== true || result.status !== 200) {
          throw new Error();
        }

        this.success = true;
        this.projs = result.data;
      } catch (err) {
        this.success = false;
        this.projs = [];
      }
    },
    toggleDetailsBar() {
      this.detailsOpen = !this.detailsOpen;
    },
    setActiveProject(proj) {
      this.activeProj = proj;
    },
  },
});
