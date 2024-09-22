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
      //here we will soon retrive the xp from backend using axios. For now we will mock it.
      const exps = [
        {
          id: 1,
          start: "2024-10-10",
          end: "2023-10-10",
          image: "https://www.accurint.com/images/LNRS_Logo2.png",
          descriptions: {
            pt: {
              name: "Lexis Nexis Risk Solutions PT",
              description: "Lorem ipsum sit dolor amet",
            },
            en: {
              name: "Lexis Nexis Risk Solutions EN",
              description: `
              -Habilidade para desenvolver e manter aplicações front-end de alto desempenho e complexidade utilizando o NuxtJS 3. <br/>
              -Experiência na manutenção de aplicações e sistemas usando tanto o <b>VueJS 2 </b>quanto o VueJS 3. <br/>
              -Experiência em desenvolver e manter camadas de API com o Laravel 10.x. <br/>
              -Habilidade em containerizar aplicações usando o Docker. <br/>
              -Eficiência no gerenciamento de tarefas e responsabilidades utilizando o Jira. <br/>
              -Habilidade comprovada em resolver problemas de forma eficaz. <br/>
              -Proficiência no controle de versão com o Git, garantindo colaboração eficiente e gerenciamento de código ao longo dos processos de desenvolvimento. <br/>
              -Habilidades excelentes de trabalho em equipe e comunicação, capaz de incentivar conversas abertas e colaborar de forma eficaz para garantir o sucesso do projeto. <br/>
              -Experiência com controle e gerenciamento de recursos na Azure <br/>
              -Expêriencia utilizando AKS (Azure Kubernetes service) para disponibilizar aplicações
              `,
            },
          },
        },
        {
          id: 2,
          start: "2024-10-10",
          end: "2023-10-10",
          image: "https://www.accurint.com/images/LNRS_Logo2.png",
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
        {
          id: 3,
          start: "2024-10-10",
          end: "2023-10-10",
          image: "https://www.accurint.com/images/LNRS_Logo2.png",
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
