<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useTheme } from "vuetify";

const themeSettings = useTheme();
const isDark = ref(false);
const drawer = ref(false);
const windowWidth = ref(window.innerWidth);

const isMobile = computed(() => {
  return windowWidth.value <= 600;
});

const icon = computed(() =>
  isDark.value ? "mdi-weather-night" : "mdi-weather-sunny"
);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  const newTheme = isDark.value ? "dark" : "light";
  themeSettings.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
};

const redirectToGit = () => {
  window.open("https://github.com/GuilhermePereiraRibeirodaSilva", "_blank");
};

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  const savedTheme = localStorage.getItem("theme") || "dark";
  isDark.value = savedTheme === "dark";
  themeSettings.global.name.value = savedTheme;
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <header id="header">
    <v-app-bar class="px-3" flat app>
      <v-app-bar-nav-icon v-if="isMobile" @click="drawer = !drawer" />
      <div v-else class="d-flex align-center">
        <v-btn text href="/">{{ $t("Home") }}</v-btn>

        <v-menu offset-y>
          <template v-slot:activator="{ props }">
            <v-btn text v-bind="props" append-icon="mdi-menu-down">
              {{ $t("AboutMe") }}
            </v-btn>
          </template>
          <MenuList></MenuList>
        </v-menu>

        <v-btn text href="/contact">{{ $t("Contact") }}</v-btn>
      </div>

      <v-spacer></v-spacer>

      <div id="icons" class="d-flex align-center">
        <MenuLang class="mt-1"></MenuLang>
        <v-icon
          :icon="icon"
          @click="toggleTheme"
          aria-label="Toggle Theme"
        ></v-icon>
        <v-icon
          icon="mdi-github"
          @click="redirectToGit"
          aria-label="GitHub Profile"
        ></v-icon>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <MenuList></MenuList>
      <v-list class="mt-2 mx-5">
        <v-list-item>
          <div id="icons" class="d-flex">
            <v-icon
              :icon="icon"
              @click="toggleTheme"
              aria-label="Toggle Theme"
            ></v-icon>
            <v-icon
              icon="mdi-github"
              @click="redirectToGit"
              aria-label="GitHub Profile"
            ></v-icon>
          </div>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>
