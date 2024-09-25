<script setup>
const { locale } = useI18n();
const lang = ref(locale.value);

import { useI18n } from "vue-i18n";
const { t } = useI18n();
const heroTexts = [t("FrontEnd"), t("BackEnd"), t("FullStack")];
let activeHeroText = ref("");
let defaultTypingTime = 150;

const blinkingCursor = ref(true);
setInterval(() => {
  blinkingCursor.value = !blinkingCursor.value;
}, 500);

const typing = async () => {
  for (let i = 0; i < heroTexts.length; i++) {
    let word = heroTexts[i];
    let letters = Array.from(word);
    for (let i = 0; i < letters.length; i++) {
      let letter = letters[i];
      activeHeroText.value += letter;
      await sleep(defaultTypingTime);
    }

    if (heroTexts.includes(activeHeroText.value)) {
      await sleep(1000);
      await typingReverse();
    }
  }
  typing();
};

let typingReverse = async () => {
  for (let i = activeHeroText.value.length - 1; i >= 0; i--) {
    activeHeroText.value = activeHeroText.value.slice(0, -1);
    await sleep(defaultTypingTime);
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

onMounted(() => {
  typing();
});
</script>

<template>
  <h1 class="hero-text">
    <div class="name">Guilherme Pereira,</div>
    <div v-if="lang === 'en'">
      <div class="dynamicText">
        {{ activeHeroText }}<span v-if="blinkingCursor">|</span>
      </div>
      <div>{{ $t("Developer") }}</div>
    </div>
    <div v-else>
      <div class="dynamicText">{{ $t("Developer") }}</div>
      <div>{{ activeHeroText }}<span v-if="blinkingCursor">|</span></div>
    </div>
  </h1>
</template>
