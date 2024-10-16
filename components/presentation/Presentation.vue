<script setup>
import { ref } from "vue";
import { createObserver } from "@/utils/intersectionObserver";

const presentationTitle = ref(null);
const presentationContent = ref(null);

const isPresentationTitleVisible = ref(false);
const isPresentationContentVisible = ref(false);
const presentationTitleClass = computed(() =>
  isPresentationTitleVisible.value ? "fadeInLeft" : ""
);
const presentationContentClass = computed(() =>
  isPresentationContentVisible.value ? "fadeInRight" : ""
);
createObserver(presentationTitle, isPresentationTitleVisible);
createObserver(presentationContent, isPresentationContentVisible);
</script>
<template>
  <section id="presentation">
    <div
      :class="['title', 'text-center', presentationTitleClass]"
      ref="presentationTitle"
    >
      <h2>{{ $t("Presentation") }}</h2>
    </div>
    <div class="content" ref="presentationContent">
      <h3 :class="['text-center', presentationContentClass]">
        {{ $t("PresentationText") }}
      </h3>
    </div>
  </section>
</template>
