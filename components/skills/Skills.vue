<script setup>
import { useSkillStore } from "~/stores/useSkillStore";
import { createObserver } from "@/utils/intersectionObserver";

const skillStore = useSkillStore();
const isSuccessful = computed(() => skillStore.isSuccessful);
const skills = computed(() => skillStore.skillsInfo);

const windowWidth = ref(window.innerWidth);

const skillTitle = ref(null);
const isskillTitleVisible = ref(false);
const skillTitleClass = computed(() =>
  isskillTitleVisible.value ? "fadeInLeft" : ""
);
createObserver(skillTitle, isskillTitleVisible);

const skillCarrousel = ref(null);
const isSkillCarrouselVisible = ref(false);
const skillCarrouselClass = computed(() =>
  isSkillCarrouselVisible.value ? "fadeInTop" : ""
);
createObserver(skillCarrousel, isSkillCarrouselVisible);

const showArrows = computed(() => windowWidth.value > 600);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onBeforeMount(async () => {
  await skillStore.fetchSkills();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
<template>
  <section id="skills">
    <div :class="['title', 'text-center', skillTitleClass]" ref="skillTitle">
      <h2>{{ $t("Skills") }}</h2>
    </div>
    <div
      :class="[
        'skills-carrousel',
        'd-flex',
        'justify-center',
        skillCarrouselClass,
      ]"
      ref="skillCarrousel"
    >
      <v-slide-group
        v-if="isSuccessful"
        class="pa-4"
        selected-class="bg-success"
        :show-arrows="showArrows"
        ref="skillCarrousel"
      >
        <v-slide-group-item v-for="skill in skills" :key="skill.image">
          <v-avatar
            :image="skill.image"
            size="100"
            class="ma-4"
            color="white"
          ></v-avatar>
        </v-slide-group-item>
      </v-slide-group>
      <v-slide-group
        v-else
        class="pa-4"
        selected-class="bg-success"
        :show-arrows="showArrows"
      >
        <v-slide-group-item v-for="i in 3" :key="i">
          <v-skeleton-loader
            class="ma-4"
            color="transparent"
            height="100px"
            type="avatar"
          >
          </v-skeleton-loader>
        </v-slide-group-item>
      </v-slide-group>
    </div>
  </section>
</template>
