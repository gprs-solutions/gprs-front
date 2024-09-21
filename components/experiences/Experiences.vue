<script setup>
import { useExperienceStore } from "~/stores/useExperienceStore";
const experienceStore = useExperienceStore();
onBeforeMount(() => {
  experienceStore.fetchExps();
  if (experienceStore.getExps[0] !== undefined) {
    experienceStore.setActiveExp(experienceStore.getExps[0]);
  }
});
</script>

<template>
  <section id="experiences">
    <v-row>
      <v-col class="d-flex justify-end experiences-timeline">
        <Timeline></Timeline>
      </v-col>
      <v-col class="d-flex justify-start experiences-details">
        <Details></Details>
      </v-col>
    </v-row>
  </section>
</template>
