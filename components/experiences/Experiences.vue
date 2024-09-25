<script setup>
import { useExperienceStore } from "~/stores/useExperienceStore";
import { createObserver } from "@/utils/intersectionObserver";
import { convertDateFormat } from "@/utils/date";

const { locale } = useI18n();
const lang = locale;

const expTitle = ref(null);
const isExpTitleVisible = ref(false);
const expTitleClass = computed(() =>
  isExpTitleVisible.value ? "fadeInTop" : ""
);
createObserver(expTitle, isExpTitleVisible);

const experienceStore = useExperienceStore();
const isSuccessful = computed(() => experienceStore.isSuccessful);

const windowWidth = ref(window.innerWidth);

const showArrows = computed(() => windowWidth.value > 600);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onBeforeMount(() => {
  window.addEventListener("resize", handleResize);
  experienceStore.fetchExps();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

//Helper functions.
const filterDescription = (exp) => {
  try {
    const description =
      exp.descriptions[lang.value.toUpperCase()]?.description ?? undefined;
    if (description !== undefined) {
      return description;
    }

    throw new Error();
  } catch (err) {
    return false;
  }
};

const parseDescriptions = (descriptions) => {
  return descriptions.split("<br/>");
};

const filterName = (exp) => {
  try {
    const name = exp.descriptions[lang.value.toUpperCase()]?.name ?? undefined;
    if (name !== undefined) {
      return name;
    }

    throw new Error();
  } catch (err) {
    return false;
  }
};

const parseDate = (date) => {
  try {
    if (date !== undefined) {
      const result = convertDateFormat(date);

      if (result) {
        return result;
      }
    }

    throw new Error();
  } catch (err) {
    return "";
  }
};
</script>

<template>
  <section id="experiences" class="w-100">
    <div
      :class="['title', 'text-center', 'mb-0', expTitleClass]"
      ref="expTitle"
    >
      <h2>{{ $t("MyWorkExperiences") }}</h2>
    </div>

    <div class="content">
      <v-slide-group
        v-if="isSuccessful && experienceStore.exps.length > 0"
        class="pa-4"
        :show-arrows="showArrows"
      >
        <v-slide-group-item
          v-for="exp in experienceStore.getExps"
          :key="exp.id"
          v-slot="{ toggle }"
        >
          <v-card
            v-if="filterDescription(exp) && filterName(exp)"
            :class="['ma-4']"
            color="grey-lighten-3"
            height="400"
            @click="toggle"
          >
            <div class="d-flex fill-height justify-center pa-5">
              <div class="card-content">
                <v-card-title class="d-flex justify-center">
                  <div class="title-content">
                    <v-avatar
                      image="https://cryptouk.io/wp-content/uploads/2021/06/logo-lexis-nexis-risk-900x450@1x.png"
                      size="100"
                      circle
                    ></v-avatar>
                    <h3 class="text-center mt-3">
                      {{ filterName(exp) }}
                    </h3>
                  </div>
                </v-card-title>
                <v-card-subtitle>
                  {{ parseDate(exp.start) }} - {{ parseDate(exp.end) }}
                </v-card-subtitle>

                <v-card-text class="card-text">
                  <h4 class="text-bold mb-2">Responsabilities:</h4>
                  <ul>
                    <li
                      v-for="(line, idx) in parseDescriptions(
                        filterDescription(exp)
                      )"
                      :key="idx"
                    >
                      {{ line }}
                    </li>
                  </ul>
                </v-card-text>
              </div>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
      <v-slide-group v-else class="pa-4">
        <v-slide-group-item v-for="i in 5" :key="i">
          <v-skeleton-loader
            class="ma-4 pa-3"
            color="grey-lighten-1"
            height="400"
            type="avatar,heading, list-item-three-line,list-item-three-line,list-item-three-line"
          ></v-skeleton-loader>
        </v-slide-group-item>
      </v-slide-group>
    </div>
  </section>
</template>
