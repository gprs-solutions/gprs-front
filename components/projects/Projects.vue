<script setup>
import { useProjectStore } from "~/stores/useProjectStore";

const projectStore = useProjectStore();
const toggleDetails = () => {
  projectStore.toggleDetailsBar();
};
const isDetailsOpen = computed(() => projectStore.isDetailsOpen);
const isSuccessful = computed(() => projectStore.isSuccessful);

const expTitle = ref(null);
const isExpTitleVisible = ref(false);
const expTitleClass = computed(() =>
  isExpTitleVisible.value ? "fadeInTop" : ""
);
createObserver(expTitle, isExpTitleVisible);

onBeforeMount(() => {
  projectStore.fetchProjects();
});
</script>

<template>
  <section id="projects">
    <div :class="['title', 'text-center', expTitleClass]" ref="expTitle">
      <h2>{{ $t("Projects") }}</h2>
    </div>
    <div class="cards-projects">
      <v-row v-if="isSuccessful">
        <v-col v-for="i in 3" cols="12" md="4" sm="4" xs="12" :key="i">
          <v-card class="mx-auto">
            <v-img
              height="200px"
              src="https://www.seox.com.br/_next/static/media/tempo.11f25279.svg"
              class="pa-3"
              cover
            ></v-img>

            <v-card-title> Project {{ i }} </v-card-title>

            <v-card-actions>
              <v-btn color="orange-lighten-2" text="Explore"></v-btn>

              <v-spacer></v-spacer>

              <v-btn
                :icon="isDetailsOpen ? 'mdi-minus' : 'mdi-plus'"
                @click="toggleDetails()"
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
