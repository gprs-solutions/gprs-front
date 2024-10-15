<script setup>
import logo from "@/assets/images/logo.png";

const redirectToGit = () => {
  window.open("https://github.com/GuilhermePereiraRibeirodaSilva", "_blank");
};

const redirectToLinkedIn = () => {
  window.open(
    "https://www.linkedin.com/in/guilherme-pereira-5097b31a2/",
    "_blank"
  );
};

const startingYear = 2024;
const currentYear = new Date().getFullYear();
</script>
<template>
  <section id="footer">
    <v-divider class="mt-3 mb-3"></v-divider>
    <v-row>
      <v-col cols="12">
        <a href="#">
          <v-img
            :src="logo"
            width="75"
            height="75"
            alt="logo"
            class="logo"
            cover
          ></v-img>
        </a>

        <p class="mt-3 text-justify">
          {{ $t("FooterText") }}
        </p>
        <div class="d-flex justify-space-between">
          <v-list-item class="pa-0">
            <div id="icons" class="d-flex">
              <v-icon
                icon="mdi-linkedin"
                @click="redirectToLinkedIn"
                aria-label="LinkedIn Profile"
                class="mr-1"
              ></v-icon>
              <v-icon
                icon="mdi-github"
                @click="redirectToGit"
                aria-label="GitHub Profile"
              ></v-icon>
            </div>
          </v-list-item>
        </div>
      </v-col>
    </v-row>
    <v-divider class="mt-3 mb-3"></v-divider>
    <div class="d-flex justify-space-between info">
      <p>{{ $t("GPRSSolutionsRightsReserved") }}</p>
      <p v-if="startingYear !== currentYear">
        © {{ startingYear }} - {{ currentYear }}
      </p>
      <p v-else>© {{ currentYear }}</p>
    </div>
  </section>
</template>
