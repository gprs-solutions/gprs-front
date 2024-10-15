<script setup>
import en from "@/assets/icons/language/en.png";
import pt from "@/assets/icons/language/pt.png";
const { locale } = useI18n();
const lang = ref(locale.value);

watch(lang, (newLang) => {
  locale.value = newLang;
});
</script>

<template>
  <div class="d-flex align-center menu-lang">
    <v-img class="mr-1" :width="30" :height="30" :src="pt" alt="Portuguese" />
    <v-switch
      v-model="lang"
      hide-details
      false-value="pt"
      true-value="en"
    ></v-switch>
    <v-img class="ml-1" :width="30" :height="30" :src="en" alt="English" />
  </div>
</template>
