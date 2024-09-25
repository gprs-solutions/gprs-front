<script setup>
import { ref, onMounted } from "vue";

const presentationTitle = ref(null);
const presentationContent = ref(null);
const isPresentationTitleVisible = ref(false);
const isPresentationContentVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target === presentationTitle.value) {
        isPresentationTitleVisible.value = entry.isIntersecting;
      }
      if (entry.target === presentationContent.value) {
        isPresentationContentVisible.value = entry.isIntersecting;
      }
    });
  });

  if (presentationTitle.value) observer.observe(presentationTitle.value);
  if (presentationContent.value) observer.observe(presentationContent.value);
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
<template>
  <section id="presentation">
    <div
      :class="[
        'title',
        'text-center',
        isPresentationTitleVisible ? 'fadeInLeft' : '',
      ]"
      ref="presentationTitle"
    >
      <h2>{{ $t("Presentation") }}</h2>
    </div>
    <div class="content fadeInRight" ref="presentationContent">
      <h3
        :class="[
          'text-center',
          isPresentationContentVisible ? 'fadeInRight' : '',
        ]"
      >
        {{ $t("PresentationText") }}
      </h3>
    </div>
  </section>
</template>
