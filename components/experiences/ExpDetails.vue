<script setup>
import { VTreeview } from "vuetify/labs/VTreeview";
import { useExperienceStore } from "~/stores/useExperienceStore";
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const experienceStore = useExperienceStore();
const { locale } = useI18n();
const lang = ref(locale.value);

const responsibilityIcons = [
  "mdi-check-circle",
  "mdi-format-list-bulleted",
  "mdi-clipboard-check",
  "mdi-checkbox-marked-circle",
];

const getResponsibilityIcon = (index) => {
  return responsibilityIcons[index % responsibilityIcons.length];
};

onMounted(() => {
  experienceStore.fetchExps();
});

const sanitizedExps = computed(() => {
  return experienceStore.exps.map((exp) => ({
    title: exp.descriptions[lang.value.toLocaleUpperCase()].name,
    logo: exp.image,
    children: [
      {
        title: `${exp.start} - ${exp.end}`,
        isDate: true,
      },
      {
        title: "Responsibilities",
        children: exp.descriptions[lang.value.toLocaleUpperCase()].description
          .split("<br/>")
          .map((responsibility, index) => ({
            title: responsibility.trim(),
            rawHTML: true,
            icon: getResponsibilityIcon(index),
          }))
          .filter((responsibility) => responsibility.title !== ""),
      },
    ],
  }));
});

const initiallyOpen = computed(() => {
  if (experienceStore.exps.length > 0) {
    return [experienceStore.exps[0].id];
  }
  return [];
});
</script>

<template>
  <div>
    <v-treeview
      :items="sanitizedExps"
      :opened="initiallyOpen"
      item-value="id"
      activatable
      open-on-click
    >
      <template v-slot:label="{ item }">
        <div v-html="item.title"></div>
      </template>

      <template v-slot:prepend="{ item }">
        <div v-if="item.logo">
          <v-img
            :src="item.logo"
            alt="Company Logo"
            width="100"
            height="15"
            cover
          />
        </div>
        <v-icon v-else-if="item.isDate"> mdi-calendar </v-icon>
        <v-icon v-else-if="item.icon">
          {{ item.icon }}
        </v-icon>
      </template>
    </v-treeview>
  </div>
</template>
