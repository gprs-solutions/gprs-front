<script setup>
const projectStore = useProjectStore();
const isDetailsOpen = computed({
  get() {
    return projectStore.isDetailsOpen;
  },
  set() {
    projectStore.toggleDetailsBar();
  },
});
</script>
<template>
  <section id="project-detail">
    <v-navigation-drawer
      v-model="isDetailsOpen"
      class="pt-5"
      location="right"
      temporary
      app
    >
      <v-card elevation="0">
        <v-card-item>
          <v-card-title>GPRS Soluções</v-card-title>

          <v-card-subtitle>
            <p>
              <span>From:</span>
              2023/10
            </p>
            <p class="mt-1">
              <span>To:</span>
              2024/01
            </p>

            <a class="d-block mt-2"> </a>
            <v-chip
              size="small"
              prepend-icon="mdi-eye"
              href="http://localhost:3000"
              target="_blank"
            >
              <div class="see-project">See the project</div>
            </v-chip>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-divider></v-divider>
          <p class="mt-3">
            My personal website using Nuxt3, Vuetify, Laravel and Github
            Actions.
          </p>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
  </section>
</template>
