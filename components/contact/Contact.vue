<script setup>
import { useContactStore } from "~/stores/useContactStore";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const contactStore = useContactStore();
const email = computed({
  get() {
    return contactStore.getEmail;
  },
  set(v) {
    contactStore.setEmail(v);
  },
});
const name = computed({
  get() {
    return contactStore.getName;
  },
  set(v) {
    contactStore.setName(v);
  },
});
const message = computed({
  get() {
    return contactStore.getMessage;
  },
  set(v) {
    contactStore.setMessage(v);
  },
});

const emailRules = [
  (value) => !!value || t("RequiredField", { field: t("Email") }),
  (value) =>
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    t("InvalidField", { field: t("Email") }),
];
const nameRules = [
  (value) => !!value || t("RequiredField", { field: t("Name") }),
];
const messageRules = [
  (value) => !!value || t("RequiredField", { field: t("Message") }),
];

const contactForm = ref(null);
const isLoading = ref(false);

const submit = async () => {
  isLoading.value = true;
  if (contactForm.value) {
    const isValid = await contactForm.value.validate();
    if (isValid.valid) {
      await contactStore.createContact();

      if (contactStore.isSuccessful) {
        await contactForm.value.reset();
      }
    }
  }
  isLoading.value = false;
};
</script>
<template>
  <section id="contact">
    <div class="title text-center pa-2">
      <h2>{{ $t("ContactMeToday") }}</h2>
      <p>{{ $t("ContactMeForm") }}</p>
    </div>
    <v-row class="pa-0 ma-0">
      <v-col cols="1" sm="3" md="4" lg="4"></v-col>
      <v-col cols="10" sm="6" md="4" lg="4">
        <v-card class="pa-8">
          <v-form ref="contactForm">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              :readonly="isLoading"
              :loading="isLoading"
              class="mb-2"
              :label="$t('Name')"
              :placeholder="$t('WriteYourName')"
            >
            </v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              :readonly="isLoading"
              :loading="isLoading"
              class="mb-2"
              :label="$t('Email')"
              :placeholder="$t('WriteYourEmail')"
            >
            </v-text-field>
            <v-textarea
              v-model="message"
              :rules="messageRules"
              :readonly="isLoading"
              :loading="isLoading"
              class="mb-2"
              :label="$t('Message')"
              :placeholder="$t('WriteAMessage')"
            >
            </v-textarea>

            <v-btn color="success" @click="submit()" :loading="isLoading" block>
              {{ $t("SendMessage") }}
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="1" sm="3" md="4" lg="4"></v-col>
    </v-row>
  </section>
</template>
