<script setup>
import { useExperienceStore } from "~/stores/useExperienceStore";
const experienceStore = useExperienceStore();
const { locale } = useI18n();
const lang = ref(locale.value);
const activeExp = computed(() => experienceStore.activeExp ?? false);
const activeExpDetails = computed(() => {
  return activeExp.value.descriptions?.[lang.value] ?? false;
});
const showCard = ref(true);
watchEffect(() => {
  if (activeExpDetails.value) {
    showCard.value = false;
    setTimeout(() => {
      showCard.value = true;
    }, 100);
  }
});
</script>
<template>
  <v-card
    v-if="showCard && activeExp && activeExpDetails"
    class="scroll-x-transition experiences-details-card"
  >
    <v-card-title class="d-flex">
      <h2>{{ activeExpDetails.name }}</h2>
      <v-img
        src="https://www.accurint.com/images/LNRS_Logo2.png"
        width="200"
        height="50"
      ></v-img>
    </v-card-title>
    <v-card-subtitle>
      {{ activeExp.start + " - " + activeExp.end }}
    </v-card-subtitle>
    <v-card-text>
      {{ activeExpDetails.description }}
    </v-card-text>
  </v-card>
</template>
