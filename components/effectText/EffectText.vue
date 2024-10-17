<script setup>
import { createObserver } from "@/utils/intersectionObserver";
const text = ref(null);
const isTextVisible = ref(false);
const TextClass = computed(() => (isTextVisible.value ? "fadeInTop" : ""));
createObserver(text, isTextVisible);
</script>
<template>
  <section id="effectText">
    <h2 :class="['text-center', 'font-italic', TextClass]" ref="text">
      {{ $t("EffectText") }}
    </h2>
  </section>
</template>
