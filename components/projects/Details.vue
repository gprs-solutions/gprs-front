<script setup>
const { locale, t } = useI18n();
const lang = locale;

const projectStore = useProjectStore();
const isDetailsOpen = computed({
  get() {
    return projectStore.isDetailsOpen;
  },
  set() {
    projectStore.toggleDetailsBar();
  },
});
const activeProject = computed(() => projectStore.activeProject ?? {});
const activeProjectDesc = computed(
  () => activeProject.value.descriptions?.[lang.value] ?? {}
);
const parseDate = (date) => {
  try {
    if (date !== undefined) {
      const result = convertDateFormat(date);

      if (result === "") {
        return t("Currently");
      }

      if (result) {
        return result;
      }
    }

    throw new Error();
  } catch (err) {
    return false;
  }
};
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
        <v-img
          height="100px"
          :src="activeProject.image"
          class="pa-3"
          contain
        ></v-img>
        <v-card-item>
          <v-card-title>{{ activeProjectDesc.name }}</v-card-title>

          <v-card-subtitle>
            <p>
              <span>{{ $t("From") }}:</span>
              {{ parseDate(activeProject.start) }}
            </p>
            <p class="mt-1">
              <span>{{ $t("To") }}:</span>
              {{ parseDate(activeProject.end) }}
            </p>

            <a class="d-block mt-2"> </a>
            <v-chip
              size="small"
              prepend-icon="mdi-eye"
              :href="activeProject.link"
              target="_blank"
            >
              <div class="see-project">{{ $t("SeeTheProject") }}</div>
            </v-chip>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-divider></v-divider>
          <p class="mt-3">
            {{ activeProjectDesc.description }}
          </p>
        </v-card-text>
      </v-card>
    </v-navigation-drawer>
  </section>
</template>
