<script setup>
import en from "@/assets/resume/en.pdf";
import pt from "@/assets/resume/pt.pdf";
import heroImg from "@/assets/custom/placeholder.png";

const { locale } = useI18n();
const activeResume = ref(locale.value === "en" ? en : pt);
</script>

<template>
  <section id="hero" class="d-flex align-center h-100">
    <v-row class="hero-row">
      <v-col cols="12" sm="6" md="6" class="d-flex justify-center align-center">
        <div class="hero-text-container">
          <TextHero />
          <div class="links mt-2 d-flex align-center">
            <v-btn
              :href="activeResume"
              class="resume-btn"
              append-icon="mdi-download"
              rounded
              target="_blank"
              download
            >
              {{ $t("Resume") }}
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="d-flex justify-center align-center">
        <v-img class="hero-img" :src="heroImg" max-width="400"></v-img>
      </v-col>
    </v-row>
  </section>
</template>
