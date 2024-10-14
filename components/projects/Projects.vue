<script setup>
import { useProjectStore } from "~/stores/useProjectStore";

const { locale, t } = useI18n();
const lang = locale;

const projectStore = useProjectStore();
const toggleDetails = (proj) => {
  projectStore.setActiveProject(proj);
  projectStore.toggleDetailsBar();
};
const isDetailsOpen = computed(() => projectStore.isDetailsOpen);
const isSuccessful = computed(() => projectStore.isSuccessful);
const projects = computed(() => projectStore.projects);

const projTitle = ref(null);
const isprojTitleVisible = ref(false);
const projTitleClass = computed(() =>
  isprojTitleVisible.value ? "fadeInTop" : ""
);
createObserver(projTitle, isprojTitleVisible);

const projCards = ref(null);
const isprojCardsVisible = ref(false);
const projCardsClass = computed(() =>
  isprojCardsVisible.value ? "fadeInTop" : ""
);
createObserver(projCards, isprojCardsVisible);

onBeforeMount(async () => {
  await projectStore.fetchProjects();
});
</script>

<template>
  <section id="projects">
    <div :class="['title', 'text-center', projTitleClass]" ref="projTitle">
      <h2>{{ $t("Projects") }}</h2>
    </div>
    <div :class="['cards-projects', projCardsClass]" ref="projCards">
      <v-row v-if="isSuccessful && projects.length > 0">
        <v-col
          v-for="project in projects"
          cols="12"
          md="4"
          sm="4"
          xs="12"
          :key="project.link"
        >
          <v-card class="mx-auto">
            <v-img
              height="200px"
              :src="project.image"
              class="pa-3"
              cover
            ></v-img>

            <v-card-title>
              {{ project.descriptions[lang]?.name ?? $t("Project") }}
            </v-card-title>

            <v-card-actions>
              <v-btn
                color="orange-lighten-2"
                :text="$t('ExploreProject')"
                :href="project.link"
                target="_blank"
              ></v-btn>

              <v-spacer></v-spacer>

              <v-btn
                :icon="isDetailsOpen ? 'mdi-minus' : 'mdi-plus'"
                @click="toggleDetails(project)"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col v-for="i in 3" cols="12" md="4" sm="4" xs="12" :key="i">
          <v-skeleton-loader
            class="pa-3"
            color="grey-lighten-1"
            height="300px"
            width="100%"
            type="card,text,text,text"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </div>
    <Details></Details>
  </section>
</template>
