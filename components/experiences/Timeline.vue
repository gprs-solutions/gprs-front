<script setup>
import { useExperienceStore } from "~/stores/useExperienceStore";
const experienceStore = useExperienceStore();
const { locale } = useI18n();
const lang = ref(locale.value);
const updateActiveExp = (exp) => {
  experienceStore.setActiveExp(exp);
};
</script>
<template>
  <v-timeline>
    <v-timeline-item
      v-for="(exp, i) in experienceStore.getExps"
      :key="i"
      :dot-color="exp.color"
      size="small"
      @click="updateActiveExp(exp)"
    >
      <template v-slot:opposite>
        <div
          :class="`pt-1 headline font-weight-bold text-${exp.color}`"
          v-text="exp.start"
        ></div>
      </template>
      <div :class="`d-flex align-center ` + (i % 2 === 0 ? '' : 'justify-end')">
        <h2 :class="`mt-n1 headline font-weight-light text-${exp.color}`">
          {{ exp.descriptions[lang].name }}
        </h2>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>
