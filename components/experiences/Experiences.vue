<script setup>
import { useExperienceStore } from "~/stores/useExperienceStore";
const experienceStore = useExperienceStore();
const isSuccessful = computed(() => {
  return experienceStore.isSuccessful;
});
onBeforeMount(async () => {
  await experienceStore.fetchExps();
  console.log(isSuccessful.value);
});
</script>

<template>
  <section id="experiences" v-if="isSuccessful">
    <div class="title">
      <h2>{{ $t("Experiences") }}</h2>
    </div>
    <ExpDetails></ExpDetails>
  </section>
</template>
