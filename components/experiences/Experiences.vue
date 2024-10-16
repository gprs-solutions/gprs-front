<script setup>
import { useExperienceStore } from "~/stores/useExperienceStore";
import { createObserver } from "@/utils/intersectionObserver";
import { convertDateFormat } from "@/utils/date";

const { locale, t } = useI18n();
const lang = locale;

const expTitle = ref(null);
const isExpTitleVisible = ref(false);
const expTitleClass = computed(() =>
  isExpTitleVisible.value ? "fadeInTop" : ""
);
createObserver(expTitle, isExpTitleVisible);

const expCards = ref(null);
const isExpCardsVisible = ref(false);
const expCardsClass = computed(() =>
  isExpCardsVisible.value ? "fadeInTop" : ""
);
createObserver(expCards, isExpCardsVisible);

const experienceStore = useExperienceStore();
const isSuccessful = computed(() => experienceStore.isSuccessful);

const windowWidth = ref(0);

const showArrows = computed(() => windowWidth.value > 600);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onBeforeMount(() => {
  experienceStore.fetchExps();
});

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  windowWidth.value = window.innerWidth;
  window.removeEventListener("resize", handleResize);
});

//Helper functions.
const filterDescription = (exp) => {
  try {
    const description = exp.descriptions[lang.value]?.description ?? undefined;
    if (description !== undefined) {
      return description;
    }

    throw new Error();
  } catch (err) {
    return false;
  }
};

const parseDescriptions = (descriptions) => {
  return descriptions.split("<br/>").slice(0, -1);
};

const filterName = (exp) => {
  try {
    const name = exp.descriptions[lang.value]?.name ?? undefined;
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

      if (result === "") {
        return t("Currently");
      }

      if (result) {
        return result;
      }
    }

    throw new Error();
  } catch (err) {
    return false;
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

    <div :class="['content', expCardsClass]" ref="expCards">
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
            color="white"
            height="400"
            @click="toggle"
          >
            <div class="d-flex fill-height justify-center pa-5">
              <div class="card-content">
                <v-card-title class="d-flex justify-center">
                  <div class="title-content">
                    <v-avatar :image="exp.image" size="100" circle></v-avatar>
                    <h3 class="text-center mt-3">
                      {{ filterName(exp) }}
                    </h3>
                  </div>
                </v-card-title>
                <v-card-subtitle class="text-center">
                  {{ parseDate(exp.start) }} -
                  {{ parseDate(exp.end) }}
                </v-card-subtitle>

                <v-card-text class="pb-0 pl-2">
                  <h4 class="text-bold">Responsabilities:</h4>
                </v-card-text>
                <v-card-text class="card-text pt-0 mt-2">
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
