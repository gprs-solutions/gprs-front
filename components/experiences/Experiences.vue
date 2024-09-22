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
    <div class="title">
      <h2>{{ $t("Experiences") }}</h2>
    </div>
    <ExpDetails></ExpDetails>
  </section>
</template>
