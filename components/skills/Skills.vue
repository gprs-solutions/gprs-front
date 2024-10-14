<script setup>
const windowWidth = ref(window.innerWidth);

const showArrows = computed(() => windowWidth.value > 600);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onBeforeMount(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const mockImages = [
  "https://media.licdn.com/dms/image/v2/D4D03AQEx3wu-IJevtw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726831045994?e=1734566400&v=beta&t=SbKVxiU0C7DZsahQiPzaJun0l6BxzVTgx7oziW-jPQM",
  "https://media.licdn.com/dms/image/v2/D560BAQE0cpozGQREOA/company-logo_100_100/company-logo_100_100/0/1707857461520/wordpress_logo?e=1736985600&v=beta&t=-GDYNaGlnk47mce2mAkujbSdOfbvhQMblo2qkUjAkbQ",
  "https://media.licdn.com/dms/image/v2/C4D0BAQE0r4sntkH4Ig/company-logo_100_100/company-logo_100_100/0/1630491901915/vue_llc_logo?e=1736985600&v=beta&t=nfD9A_nBMq5v5nM0xnQcXIyuGE-X1OkWPb0EjRfkMto",
  "https://media.licdn.com/dms/image/v2/D560BAQEjv9CumkBUfw/company-logo_100_100/company-logo_100_100/0/1726599279686/laravel_logo?e=1736985600&v=beta&t=aHr9XWvedszyAb2zG5PvDIWZhIuYHfS4Q2JacN-LpAo",
  "https://media.licdn.com/dms/image/v2/C4E0BAQF540V_6xtyXw/company-logo_100_100/company-logo_100_100/0/1631350285879?e=1736985600&v=beta&t=ePm00Stz7YoFGcx-V-soH91M5wruOH-mTPVVINdVXmw",
];
</script>
<template>
  <section id="skills">
    <div class="title text-center">
      <h2>{{ $t("Skills") }}</h2>
    </div>
    <div class="skills-carrousel d-flex justify-center">
      <v-slide-group
        class="pa-4"
        selected-class="bg-success"
        :show-arrows="showArrows"
      >
        <v-slide-group-item
          v-for="image in mockImages"
          :key="image"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <v-avatar :image="image" size="100" class="ma-4" circle></v-avatar>
        </v-slide-group-item>
      </v-slide-group>
    </div>
  </section>
</template>
