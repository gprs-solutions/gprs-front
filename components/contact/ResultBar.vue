<script setup>
import { useContactStore } from "~/stores/useContactStore";

const contactStore = useContactStore();
const showSnackbar = computed({
  get() {
    return contactStore.getShowSnackBar;
  },
  set(v) {
    contactStore.setShowSnackbar(v);
  },
});
const isSuccessful = computed(() => contactStore.isSuccessful);
const color = computed(() => (contactStore.isSuccessful ? "green" : "red"));
</script>
<template>
  <v-snackbar v-model="showSnackbar" :color="color">
    <p v-if="isSuccessful">{{ $t("MessageSentSuccessfully") }}</p>
    <p v-else>{{ $t("MessageCouldntBeSent") }}</p>

    <template v-slot:actions>
      <v-btn variant="text" @click="showSnackbar = false">
        {{ $t("Close") }}
      </v-btn>
    </template>
  </v-snackbar>
</template>
